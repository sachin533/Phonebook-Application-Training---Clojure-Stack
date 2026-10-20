(ns phonebook.validation
  "Malli schemas and validation helpers for API input.

  The schemas work on the *API* (JSON) shape of a contact, i.e. camelCase
  keys such as :phoneNumber."
  (:require [clojure.string :as str]
            [malli.core :as m]
            [malli.error :as me]))

(def phone-pattern
  "Loose international phone format: optional +, then 7-20 digits with
  optional spaces, dashes, dots and parentheses."
  #"^\+?[0-9][0-9\s\-().]{6,19}$")

(def email-pattern
  #"^[^@\s]+@[^@\s]+\.[^@\s]+$")

(defn- string-schema
  ([max] (string-schema 1 max))
  ([min max] [:string {:min min :max max}]))

(def Contact
  "Schema for creating a contact."
  [:map
   [:name        (string-schema 255)]
   [:phoneNumber [:and (string-schema 1 50) [:re phone-pattern]]]
   [:email       {:optional true}
    [:maybe [:and (string-schema 0 255) [:re email-pattern]]]]
   [:address     {:optional true} [:maybe (string-schema 0 65535)]]])

(def ContactUpdate
  "Schema for PUT /api/contacts/:id (full replacement, but the id and the
  creation timestamp are not part of the payload)."
  Contact)

(def Register
  "Schema for POST /api/auth/register."
  [:map
   [:email    [:and (string-schema 3 255) [:re email-pattern]]]
   [:password (string-schema 8 128)]])

(def Login
  "Schema for POST /api/auth/login."
  [:map
   [:email    [:and (string-schema 3 255) [:re email-pattern]]]
   [:password (string-schema 1 128)]])

(defn normalize
  "Trim string values; turn blank :email/:address into nil so the API
  behaves consistently for empty form fields."
  [body]
  (if (map? body)
    (-> body
        (update :name #(some-> % str/trim))
        (update :phoneNumber #(some-> % str/trim))
        (update :email #(some-> % str/trim))
        (update :address #(some-> % str/trim))
        (update :email #(if (str/blank? %) nil %))
        (update :address #(if (str/blank? %) nil %)))
    body))

(defn normalize-auth
  "Trim/lower-case the email of an auth payload."
  [body]
  (if (map? body)
    (update body :email #(some-> % str/trim str/lower-case))
    body))

(defn validate
  "Validate `data` against `schema`. Returns nil when valid, otherwise a
  map of field -> list of humanized messages (ready for a 400 response)."
  [schema data]
  (when-not (m/validate schema data)
    {:errors (me/humanize (m/explain schema data))}))

(defn valid-id?
  "True when `s` can be parsed as a positive long id."
  [s]
  (try
    (let [n (Long/parseLong (str s))]
      (pos? n))
    (catch Exception _
      false)))
