(ns phonebook.db
  "Database access: a pooled HikariCP datasource (next.jdbc), the schema
  (with small idempotent migrations) and all queries.

  Every contact belongs to a user; all contact queries are scoped by
  user_id so users can only ever see their own rows."
  (:require [clojure.string :as str]
            [next.jdbc :as jdbc]
            [next.jdbc.result-set :as rs]
            [phonebook.config :as config])
  (:import [com.zaxxer.hikari HikariConfig HikariDataSource]
           [java.sql SQLException]))

;; ---------------------------------------------------------------------------
;; Pool

(defn- make-datasource
  ^HikariDataSource []
  (let [cfg (HikariConfig.)]
    (.setJdbcUrl cfg (config/jdbc-url))
    (.setUsername cfg (:db-user config/config))
    (.setPassword cfg (:db-password config/config))
    (.setDriverClassName cfg "com.mysql.cj.jdbc.Driver")
    (.setMaximumPoolSize cfg 10)
    (.setMinimumIdle cfg 1)
    (.setConnectionTimeout cfg 5000)
    (.setPoolName cfg "phonebook-pool")
    (HikariDataSource. cfg)))

(defonce ^HikariDataSource pool
  (delay (make-datasource)))

(def ^:private jdbc-opts
  {:builder-fn rs/as-unqualified-lower-maps})

(defn query!
  "Execute a [sql & params] vector, returning all rows."
  [sql+params]
  (jdbc/execute! @pool sql+params jdbc-opts))

(defn query-one!
  "Execute a [sql & params] vector, returning the first row or nil."
  [sql+params]
  (jdbc/execute-one! @pool sql+params jdbc-opts))

(defn- update-count [result]
  (or (:next.jdbc/update-count result) 0))

;; ---------------------------------------------------------------------------
;; Schema (idempotent; also serves as the migration runner)

(defn- ensure-user-id-column!
  "Migration for pre-existing installs: contacts gains a user_id column,
  an index and a foreign key. Safe to run repeatedly."
  []
  (let [col (query-one! [(str "SELECT COUNT(*) AS c FROM information_schema.columns "
                              "WHERE table_schema = DATABASE() "
                              "AND table_name = 'contacts' AND column_name = 'user_id'")])]
    (when (zero? (:c col))
      (query! ["ALTER TABLE contacts ADD COLUMN user_id INT NULL AFTER id"])
      (query! ["ALTER TABLE contacts ADD INDEX idx_contacts_user_id (user_id)"])))
  (try
    (query! [(str "ALTER TABLE contacts "
                  "ADD CONSTRAINT fk_contacts_user FOREIGN KEY (user_id) "
                  "REFERENCES users(id) ON DELETE CASCADE")])
    (catch SQLException _ nil))) ; constraint already present

(defn create-schema!
  "Create missing tables/columns. Existing data is never touched."
  []
  (query! ["CREATE TABLE IF NOT EXISTS users (
              id INT AUTO_INCREMENT PRIMARY KEY,
              email VARCHAR(255) NOT NULL UNIQUE,
              password_hash VARCHAR(255) NOT NULL,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )"])
  (query! ["CREATE TABLE IF NOT EXISTS sessions (
              id INT AUTO_INCREMENT PRIMARY KEY,
              user_id INT NOT NULL,
              token_hash CHAR(64) NOT NULL UNIQUE,
              expires_at TIMESTAMP NOT NULL,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              CONSTRAINT fk_sessions_user FOREIGN KEY (user_id)
                REFERENCES users(id) ON DELETE CASCADE,
              INDEX idx_sessions_expires (expires_at)
            )"])
  (query! ["CREATE TABLE IF NOT EXISTS contacts (
              id INT AUTO_INCREMENT PRIMARY KEY,
              user_id INT NULL,
              name VARCHAR(255) NOT NULL,
              phone_number VARCHAR(50) UNIQUE NOT NULL,
              email VARCHAR(255) UNIQUE,
              address TEXT,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )"])
  (ensure-user-id-column!))

;; ---------------------------------------------------------------------------
;; Errors

(defn duplicate-key?
  "True for SQL integrity (unique constraint) violations."
  ^Boolean [^SQLException e]
  (or (= "23000" (.getSQLState e))
      (boolean (re-find #"Duplicate entry" (or (.getMessage e) "")))))

;; ---------------------------------------------------------------------------
;; Users

(defn find-user-by-email!
  "User row (incl. password_hash) by lower-cased email, or nil."
  [email]
  (query-one! ["SELECT id, email, password_hash, created_at FROM users WHERE email = ?"
               email]))

(defn insert-user!
  "Create a user and return the fresh row."
  [email password-hash]
  (query-one! ["INSERT INTO users (email, password_hash) VALUES (?, ?)"
               email password-hash])
  (find-user-by-email! email))

;; ---------------------------------------------------------------------------
;; Sessions

(defn insert-session!
  [user-id token-hash expires-at]
  (query-one! ["INSERT INTO sessions (user_id, token_hash, expires_at) VALUES (?, ?, ?)"
               user-id token-hash expires-at]))

(defn find-user-by-session-hash!
  "User owning a live (unexpired) session, or nil."
  [token-hash]
  (query-one! [(str "SELECT u.id, u.email, u.created_at "
                    "FROM sessions s JOIN users u ON u.id = s.user_id "
                    "WHERE s.token_hash = ? AND s.expires_at > NOW()")
               token-hash]))

(defn delete-session-hash!
  [token-hash]
  (query-one! ["DELETE FROM sessions WHERE token_hash = ?" token-hash]))

(defn delete-expired-sessions!
  "Housekeeping: drop sessions that expired."
  []
  (update-count (query-one! ["DELETE FROM sessions WHERE expires_at <= NOW()"])))

;; ---------------------------------------------------------------------------
;; Contacts (always scoped by user_id)

(def ^:private contacts-columns
  "id, name, phone_number, email, address, created_at")

(defn- like-pattern [q]
  (str "%" q "%"))

(defn list-contacts!
  "Contacts of `user-id`, optionally filtered by `q` (name, phone number
  or email LIKE - case-insensitive), sorted by name or newest first,
  paginated with limit/offset."
  [{:keys [user-id q limit offset sort]}]
  (let [sql    (str/join " "
                         (concat ["SELECT" contacts-columns "FROM contacts WHERE user_id = ?"]
                                 (when q ["AND (name LIKE ? OR phone_number LIKE ? OR email LIKE ?)"])
                                 [(if (= :recent sort)
                                    "ORDER BY created_at DESC, id DESC"
                                    "ORDER BY name")]
                                 (when limit ["LIMIT ? OFFSET ?"])))
        params (concat [user-id]
                       (when q (repeat 3 (like-pattern q)))
                       (when limit [limit offset]))]
    (query! (into [sql] params))))

(defn count-contacts!
  "Number of contacts of `user-id`, optionally filtered by `q`."
  ([user-id]
   (or (:c (query-one! ["SELECT COUNT(*) AS c FROM contacts WHERE user_id = ?" user-id])) 0))
  ([user-id q]
   (if (str/blank? q)
     (count-contacts! user-id)
     (or (:c (query-one! [(str "SELECT COUNT(*) AS c FROM contacts "
                               "WHERE user_id = ? "
                               "AND (name LIKE ? OR phone_number LIKE ? OR email LIKE ?)")
                          user-id (like-pattern q) (like-pattern q) (like-pattern q)]))
         0))))

(defn find-contact!
  "Single contact of `user-id` by id, or nil (other users' rows are
  invisible)."
  [user-id id]
  (query-one! [(str "SELECT " contacts-columns " FROM contacts WHERE id = ? AND user_id = ?")
               id user-id]))

(defn find-contact-by-phone!
  "Single contact of `user-id` by phone number, or nil."
  [user-id phone]
  (query-one! [(str "SELECT " contacts-columns " FROM contacts WHERE phone_number = ? AND user_id = ?")
               phone user-id]))

(defn insert-contact!
  "Insert a contact map (:name :phone_number :email :address) for
  `user-id` and return the fresh row."
  [user-id contact]
  (let [phone (:phone_number contact)]
    (query-one! [(str "INSERT INTO contacts (user_id, name, phone_number, email, address) "
                      "VALUES (?, ?, ?, ?, ?)")
                 user-id (:name contact) phone (:email contact) (:address contact)])
    (find-contact-by-phone! user-id phone)))

(defn insert-contact-if-new!
  "INSERT IGNORE variant used by the seed script. Returns true when a
  row was actually inserted (false when it already existed)."
  [user-id contact]
  (pos? (update-count
          (query-one! [(str "INSERT IGNORE INTO contacts "
                            "(user_id, name, phone_number, email, address) "
                            "VALUES (?, ?, ?, ?, ?)")
                       user-id (:name contact) (:phone_number contact)
                       (:email contact) (:address contact)]))))

(defn update-contact!
  "Update a contact of `user-id`. Returns the updated row, or nil."
  [user-id id contact]
  (let [result (query-one! [(str "UPDATE contacts SET name = ?, phone_number = ?, "
                                 "email = ?, address = ? WHERE id = ? AND user_id = ?")
                            (:name contact) (:phone_number contact)
                            (:email contact) (:address contact) id user-id])]
    (when (pos? (update-count result))
      (find-contact! user-id id))))

(defn delete-contact!
  "Delete a contact of `user-id`. Returns true when a row was deleted."
  [user-id id]
  (pos? (update-count
          (query-one! ["DELETE FROM contacts WHERE id = ? AND user_id = ?" id user-id]))))

;; ---------------------------------------------------------------------------
;; Helpers for the seed script

(defn backfill-contact-owners!
  "Assign contacts created before multi-user support (user_id IS NULL)
  to a user. Returns the number of rows updated."
  [user-id]
  (update-count
    (query-one! ["UPDATE contacts SET user_id = ? WHERE user_id IS NULL" user-id])))

(defn insert-contacts-batch!
  "Insert many contacts with INSERT IGNORE (idempotent). Returns the
  number of rows actually inserted."
  [user-id contacts]
  (transduce
    (map (fn [c]
           (if (insert-contact-if-new! user-id c) 1 0)))
    +
    contacts))
