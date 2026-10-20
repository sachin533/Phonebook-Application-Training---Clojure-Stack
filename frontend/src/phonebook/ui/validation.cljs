(ns phonebook.ui.validation
  "Pure, reusable form validation - mirrors the backend Malli schemas."
  (:require [clojure.string :as str]))

(def phone-pattern
  "Loose international phone format: optional +, then 7-20 digits with
  optional spaces, dashes, dots and parentheses."
  #"^\+?[0-9][0-9\s\-().]{6,19}$")

(def email-pattern
  #"^[^@\s]+@[^@\s]+\.[^@\s]+$")

(defn- too-long? [s n] (> (count s) n))

(defn validate-contact
  "Validate a contact form map. Returns {} when valid, otherwise a map of
  field keyword -> error message."
  [{:keys [name phoneNumber email address] :as _form}]
  (cond-> {}
    (str/blank? name)
    (assoc :name "Name is required")

    (and (not (str/blank? name)) (too-long? name 255))
    (assoc :name "Name must be 255 characters or fewer")

    (str/blank? phoneNumber)
    (assoc :phoneNumber "Phone number is required")

    (and (not (str/blank? phoneNumber))
         (not (re-matches phone-pattern phoneNumber)))
    (assoc :phoneNumber "Phone number format is invalid, e.g. +1 555 123 4567 or 0171 2345678")

    (and (not (str/blank? phoneNumber)) (too-long? phoneNumber 50))
    (assoc :phoneNumber "Phone number must be 50 characters or fewer")

    (and (not (str/blank? email))
         (not (re-matches email-pattern email)))
    (assoc :email "Email address format is invalid")

    (and (not (str/blank? email)) (too-long? email 255))
    (assoc :email "Email must be 255 characters or fewer")))

(defn validate-login
  "Validate a login form map. Returns {} when valid."
  [{:keys [email password]}]
  (cond-> {}
    (str/blank? email)
    (assoc :email "Email is required")

    (and (not (str/blank? email)) (not (re-matches email-pattern email)))
    (assoc :email "Email address format is invalid")

    (str/blank? password)
    (assoc :password "Password is required")))

(defn validate-register
  "Validate a registration form map (includes password confirmation)."
  [{:keys [email password confirm]}]
  (cond-> {}
    (str/blank? email)
    (assoc :email "Email is required")

    (and (not (str/blank? email)) (not (re-matches email-pattern email)))
    (assoc :email "Email address format is invalid")

    (str/blank? password)
    (assoc :password "Password is required")

    (and (not (str/blank? password)) (< (count password) 8))
    (assoc :password "Password must be at least 8 characters")

    (and (not (str/blank? password)) (too-long? password 128))
    (assoc :password "Password must be 128 characters or fewer")

    (not= password confirm)
    (assoc :confirm "Passwords do not match")))
