(ns phonebook.config
  "Configuration sourced from environment variables, with an optional .env
  file as fallback (later sources override earlier ones):

    defaults  <  .env file  <  real environment variables"
  (:require [clojure.java.io :as io]
            [clojure.string :as str]))

(def defaults
  {:db-host     "localhost"
   :db-port     "3306"
   :db-name     "phonebook_db"
   :db-user     "phonebook_app"
   :db-password ""
   :port        "3000"
   ;; comma separated list of allowed browser origins
   :cors-origin "http://localhost:8080,http://127.0.0.1:8080"
   ;; login sessions: how long a bearer token stays valid (hours)
   :auth-ttl-hours "168"})

(def ^:private env->key
  {"DB_HOST"     :db-host
   "DB_PORT"     :db-port
   "DB_NAME"     :db-name
   "DB_USER"     :db-user
   "DB_PASSWORD" :db-password
   "PORT"        :port
   "CORS_ORIGIN" :cors-origin
   "AUTH_TOKEN_TTL_HOURS" :auth-ttl-hours})

(defn- parse-env-file
  "Parse a .env file into a map of KEY -> VALUE strings.
  Supports `KEY=VALUE` lines, optional `export ` prefix, `#` comments
  and optional surrounding quotes on the value."
  [file]
  (let [f (io/file file)]
    (when (.exists f)
      (reduce (fn [m line]
                (let [line (str/trim line)]
                  (if (or (str/blank? line) (str/starts-with? line "#"))
                    m
                    (let [line (str/replace-first line #"^export\s+" "")
                          [k v] (str/split line #"=" 2)]
                      (if (and k v)
                        (assoc m (str/trim k)
                               (-> (str/trim v)
                                   (str/replace #"^['\"]" "")
                                   (str/replace #"['\"]$" "")))
                        m)))))
              {}
              (str/split-lines (slurp f))))))

(def ^:private file-env
  ;; .env can live in the backend/ dir or in the project root (when started
  ;; from backend/ the parent directory is the project root).
  (merge (parse-env-file ".env")
         (parse-env-file "../.env")))

(defn- from-env [getenv]
  (into {}
        (keep (fn [[env-key cfg-key]]
                (when-some [v (getenv env-key)]
                  [cfg-key v])))
        env->key))

(def config
  (merge defaults
         (into {} (keep (fn [[k v]] (when (env->key k) [(env->key k) v]))) file-env)
         (from-env #(System/getenv %))))

(defn allowed-origins
  "Set of origins allowed by CORS, parsed from :cors-origin."
  []
  (->> (str/split (:cors-origin config) #",")
       (map str/trim)
       (remove str/blank?)
       set))

(defn cors-allowed?
  "True when the given Origin header value is explicitly allowed."
  [origin]
  (and (some? origin)
       (contains? (allowed-origins) origin)))

(defn jdbc-url
  "MySQL JDBC url built from the configuration."
  []
  (str "jdbc:mysql://" (:db-host config) ":" (:db-port config) "/" (:db-name config)
       "?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC"
       "&characterEncoding=utf8"))
