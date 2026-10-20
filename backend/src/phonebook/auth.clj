(ns phonebook.auth
  "Password hashing, opaque bearer tokens and the session middleware.

  Security model:
    - passwords are stored as bcrypt hashes (buddy-hashers), never
      in plain text
    - login issues a random 256-bit bearer token; only its SHA-256
      digest is stored server-side (sessions table), so even a database
      dump cannot be replayed as a live session
    - tokens expire after AUTH_TOKEN_TTL_HOURS (default 168 = 7 days)
      and are revoked on logout"
  (:require [buddy.core.codecs :as codecs]
            [buddy.hashers :as hashers]
            [clojure.string :as str]
            [phonebook.config :as config]
            [phonebook.db :as db])
  (:import [java.security MessageDigest SecureRandom]
           [java.sql Timestamp]))

;; ---------------------------------------------------------------------------
;; Passwords

(defn hash-password
  "Bcrypt hash (salted, cost 12) of a plain-text password."
  ^String [plain]
  (hashers/derive plain))

(defn verify-password
  "True when the plain-text password matches the stored hash."
  ^Boolean [plain hash]
  (and (string? plain)
       (string? hash)
       (boolean (hashers/check plain hash))))

;; ---------------------------------------------------------------------------
;; Tokens

(def ^:private secure-random (SecureRandom.))

(defn new-token
  "Cryptographically random 256-bit token, hex encoded (URL safe)."
  []
  (let [bs (byte-array 32)]
    (.nextBytes secure-random bs)
    (codecs/bytes->hex bs)))

(defn- sha256-hex
  "SHA-256 digest of a string, hex encoded (64 chars)."
  ^String [^String s]
  (-> (MessageDigest/getInstance "SHA-256")
      (.digest (.getBytes s "UTF-8"))
      (codecs/bytes->hex)))

(defn- ttl-timestamp
  "java.sql.Timestamp for now + the configured session lifetime."
  []
  (let [hours (try (Long/parseLong (:auth-ttl-hours config/config))
                   (catch Exception _ 168))]
    (Timestamp. (+ (System/currentTimeMillis) (* 3600000 hours)))))

;; ---------------------------------------------------------------------------
;; Sessions

(defn create-session!
  "Create a session for user-id and return the plaintext token."
  [user-id]
  (let [token (new-token)]
    (db/delete-expired-sessions!)
    (db/insert-session! user-id (sha256-hex token) (ttl-timestamp))
    token))

(defn user-for-token
  "Active user for a bearer token, or nil when unknown/expired."
  [token]
  (when (and (string? token) (not (str/blank? token)))
    (db/find-user-by-session-hash! (sha256-hex token))))

(defn revoke-token!
  "Delete the session behind a bearer token (idempotent)."
  [token]
  (when (and (string? token) (not (str/blank? token)))
    (db/delete-session-hash! (sha256-hex token))
    true))

;; ---------------------------------------------------------------------------
;; Ring/Reitit integration

(defn bearer-token
  "Extract the token from an Authorization: Bearer <token> header."
  [request]
  (some-> (get-in request [:headers "authorization"])
          (str/replace #"^Bearer\s+" "")
          str/trim
          not-empty))

(defn wrap-auth
  "Reitit middleware: require a valid bearer token. Attaches the user row
  (id, email, created_at) to the request as :auth-user, or answers 401."
  [handler]
  (fn [request]
    (if-let [user (some-> (bearer-token request) user-for-token)]
      (handler (assoc request :auth-user user))
      {:status 401 :body {:error "Authentication required"}})))
