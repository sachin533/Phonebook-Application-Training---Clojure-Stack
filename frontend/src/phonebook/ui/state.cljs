(ns phonebook.ui.state
  "Application state (a single Reagent atom), hash-based routing and every
  action the UI can trigger: auth, search, pagination and contact CRUD.

  The URL is the source of truth for list state - the hash carries
  #/contacts?q=<search>&page=<n>, so search and page survive reloads and
  are shareable."
  (:require [clojure.string :as str]
            [reagent.core :as r]
            [phonebook.ui.api :as api]
            [phonebook.ui.validation :as v]))

(def default-form
  {:name "" :phoneNumber "" :email "" :address ""})

(def default-auth-form
  {:email "" :password "" :confirm ""})

(def page-size 20)

(defonce app
  (r/atom {:view       :login  ;; :login | :register | :dashboard | :contacts
           ;;                               | :new | :detail | :edit
           :auth       {:user nil :busy? false :checking? true}
           :auth-form  default-auth-form
           :auth-errors {}
           :contacts   []      ;; current page of contacts
           :recent     []      ;; dashboard: newest contacts
           :total      0
           :page       1
           :page-size  page-size
           :search     ""
           :searching? false
           :loading?   false
           :current    nil     ;; contact shown on :detail / prefills :edit
           :route-id   nil     ;; id from the URL on :detail/:edit
           :form       default-form
           :form-errors {}
           :saving?    false
           :notice     nil     ;; success banner
           :error      nil}))  ;; error banner

;; ---------------------------------------------------------------------------
;; Navigation helpers

(defn navigate!
  "Change the location hash (triggers handle-route! via hashchange)."
  [hash]
  (let [target (if (str/starts-with? hash "#") hash (str "#" hash))]
    (when-not (= target (or (.-hash js/location) ""))
      (set! (.-hash js/location) target))))

(defn dismiss-notices! []
  (swap! app assoc :notice nil :error nil))

;; ---------------------------------------------------------------------------
;; Route parsing

(defn- decode [s]
  (try (js/decodeURIComponent s)
       (catch js/Error _ s)))

(defn- parse-query [s]
  (reduce (fn [m pair]
            (let [[k v] (str/split pair #"=" 2)]
              (assoc m (keyword k) (decode (or v "")))))
          {}
          (remove str/blank? (str/split (or s "") #"&"))))

(defn parse-hash
  "#/contacts?q=x&page=2 -> {:segments [\"contacts\"] :query {:q \"x\" :page \"2\"}}"
  [hash]
  (let [h     (if (str/starts-with? (or hash "") "#") (subs hash 1) (or hash ""))
        [path query] (str/split h #"\?" 2)]
    {:segments (vec (remove str/blank? (str/split path #"/")))
     :query    (parse-query query)}))

(defn- safe-page [s]
  (let [p (js/parseInt (or s "1") 10)]
    (if (js/isNaN p) 1 (max 1 p))))

(defn contacts-hash
  "Build the canonical list URL for a search/page combination."
  [q page]
  (let [params (cond-> []
                 (not (str/blank? q)) (conj (str "q=" (js/encodeURIComponent q)))
                 (> page 1)           (conj (str "page=" page)))]
    (if (seq params)
      (str "#/contacts?" (str/join "&" params))
      "#/contacts")))

;; ---------------------------------------------------------------------------
;; Data loading

(defn load-contacts!
  "Fetch the current search/page from the API."
  []
  (let [{:keys [search page page-size]} @app]
    (swap! app assoc :searching? true :loading? true :error nil)
    (api/fetch-contacts
      {:q        (when-not (str/blank? search) search)
       :page     page
       :pageSize page-size}
      (fn [{:keys [contacts total page pageSize]}]
        (swap! app assoc
               :contacts   (vec contacts)
               :total      (or total 0)
               :page       (or page 1)
               :page-size  (or pageSize page-size)
               :loading?   false
               :searching? false))
      (fn [payload status]
        (swap! app assoc
               :contacts   []
               :total      0
               :loading?   false
               :searching? false
               :error      (or (:error payload)
                               (str "Failed to load contacts (HTTP " status ")")))))))

(defn load-recent!
  "Dashboard: five newest contacts plus the total count."
  []
  (swap! app assoc :loading? true :error nil)
  (api/fetch-contacts
    {:q nil :page 1 :pageSize 5 :sort "recent"}
    (fn [{:keys [contacts total]}]
      (swap! app assoc :recent (vec contacts) :total (or total 0) :loading? false))
    (fn [payload status]
      (swap! app assoc
             :loading? false
             :error (or (:error payload)
                        (str "Failed to load dashboard (HTTP " status ")"))))))

(defn load-contact!
  "Fetch one contact for the detail view."
  [id]
  (swap! app assoc :loading? true :error nil :current nil)
  (api/get-contact id
    (fn [contact]
      (swap! app assoc :loading? false :current contact))
    (fn [payload status]
      (swap! app assoc
             :loading? false
             :error (or (:error payload)
                        (if (= 404 status)
                          "Contact not found"
                          "Failed to load the contact"))))))

(defn load-contact-into-form!
  "Fetch one contact and prefill the edit form."
  [id]
  (swap! app assoc :loading? true :error nil :form-errors {})
  (api/get-contact id
    (fn [c]
      (swap! app assoc
             :loading? false
             :current  c
             :form     {:name        (or (:name c) "")
                        :phoneNumber (or (:phoneNumber c) "")
                        :email       (or (:email c) "")
                        :address     (or (:address c) "")}))
    (fn [payload status]
      (swap! app assoc
             :loading? false
             :error (or (:error payload)
                        (if (= 404 status)
                          "Contact not found"
                          "Failed to load the contact"))))))

;; ---------------------------------------------------------------------------
;; Search & pagination (URL is synced; a hashchange triggers the load)

(defonce ^:private search-timer (atom nil))

(defn- cancel-search-timer! []
  (when-let [t @search-timer]
    (js/clearTimeout t)
    (reset! search-timer nil)))

(defn search!
  "Update the search box (Google style: debounced, resets to page 1).
  After 300ms of quiet the URL is updated, which triggers the request -
  the search always runs against the full database, not just the loaded
  page."
  [q]
  (cancel-search-timer!)
  (swap! app assoc :search q)
  (reset! search-timer
          (js/setTimeout
            (fn []
              (reset! search-timer nil)
              (let [target   (contacts-hash q 1)
                    current  (or (.-hash js/location) "")]
                (swap! app assoc :page 1)
                (if (= target current)
                  (load-contacts!)           ;; e.g. cleared back to the original URL
                  (set! (.-hash js/location) target)))) ; hashchange -> handle-route! -> load
            300)))

(defn clear-search! []
  (search! ""))

(defn goto-page!
  "Go to a page number (clamped to the valid range), keeping the query."
  [page]
  (cancel-search-timer!)
  (let [{:keys [search page-size total]} @app
        total-pages (max 1 (js/Math.ceil (/ (or total 0) (or page-size 20))))
        target      (min total-pages (max 1 page))
        url         (contacts-hash search target)]
    (swap! app assoc :page target :searching? true)
    (if (= url (or (.-hash js/location) ""))
      (load-contacts!)
      (set! (.-hash js/location) url))))

;; ---------------------------------------------------------------------------
;; Routing

(declare load-contact-into-form!)

(defn- handle-contacts-route [segments query]
  (let [seg2 (second segments)
        seg3 (nth segments 2 nil)]
    (cond
      (nil? seg2)
      (do (swap! app assoc
                 :view :contacts :search (or (:q query) "")
                 :page (safe-page (:page query)) :current nil
                 :form default-form :form-errors {})
          (load-contacts!))

      (= "new" seg2)
      (swap! app assoc
             :view :new :current nil :route-id nil
             :form default-form :form-errors {} :error nil)

      :else
      (let [id (js/parseInt seg2 10)]
        (if (js/isNaN id)
          (navigate! "#/contacts")
          (if (= "edit" seg3)
            (do (swap! app assoc :view :edit :route-id id :current nil)
                (load-contact-into-form! id))
            (do (swap! app assoc :view :detail :route-id id :current nil)
                (load-contact! id))))))))

(defn handle-route!
  "Parse the location hash and switch to the matching view, loading its
  data. Also guards: signed-out users only ever see login/register."
  []
  (let [{:keys [segments]} (parse-hash (.-hash js/location))
        authed? (some? (get-in @app [:auth :user]))]
    (cond
      (not authed?)
      (swap! app assoc :view (if (= "register" (first segments)) :register :login))

      :else
      (case (first segments)
        nil         (navigate! "#/dashboard")
        "dashboard" (do (swap! app assoc :view :dashboard :current nil)
                        (load-recent!))
        "contacts"  (handle-contacts-route segments (:query (parse-hash (.-hash js/location))))
        "login"     (navigate! "#/dashboard")
        "register"  (navigate! "#/dashboard")
        (navigate! "#/dashboard")))))

;; ---------------------------------------------------------------------------
;; Auth

(defn set-auth-form! [k v]
  (swap! app assoc-in [:auth-form k] v))

(defn login! []
  (let [form    (:auth-form @app)
        payload {:email (str/trim (:email form)) :password (:password form)}
        errors  (v/validate-login payload)]
    (if (seq errors)
      (swap! app assoc :auth-errors errors :error nil)
      (do (swap! app assoc
                 :auth-errors {} :error nil
                 :auth (assoc (:auth @app) :busy? true))
          (api/login! payload
            (fn [{:keys [token user]}]
              (api/set-token! token)
              (swap! app assoc
                     :auth       {:user user :busy? false :checking? false}
                     :auth-form  default-auth-form
                     :auth-errors {}
                     :notice     (str "Welcome back, " (:email user) "!"))
              (navigate! "#/dashboard"))
            (fn [payload status]
              (swap! app assoc
                     :auth (assoc (:auth @app) :busy? false)
                     :error (cond
                              (= 401 status) (or (:error payload) "Invalid email or password")
                              (= 0 status)   "Cannot reach the server - is the API running?"
                              :else          (or (:error payload) "Sign in failed")))))))))

(defn register! []
  (let [form    (:auth-form @app)
        trimmed (update form :email str/trim)
        errors  (v/validate-register trimmed)]
    (if (seq errors)
      (swap! app assoc :auth-errors errors :error nil)
      (do (swap! app assoc
                 :auth-errors {} :error nil
                 :auth (assoc (:auth @app) :busy? true))
          (api/register! {:email (:email trimmed) :password (:password trimmed)}
            (fn [{:keys [token user]}]
              (api/set-token! token)
              (swap! app assoc
                     :auth        {:user user :busy? false :checking? false}
                     :auth-form   default-auth-form
                     :auth-errors {}
                     :notice      "Account created - welcome!")
              (navigate! "#/dashboard"))
            (fn [payload status]
              (swap! app assoc
                     :auth (assoc (:auth @app) :busy? false)
                     :error (cond
                              (= 409 status) (or (:error payload) "An account with this email already exists")
                              (= 0 status)   "Cannot reach the server - is the API running?"
                              :else          (or (:error payload) "Registration failed")))))))))

(defn logout!
  "Revoke the server session, clear local state and go to the login page."
  []
  (let [token (api/get-token)]
    (api/set-token! nil)
    (swap! app assoc
           :auth        {:user nil :busy? false :checking? false}
           :auth-form   default-auth-form
           :auth-errors {}
           :contacts    [] :recent [] :total 0 :page 1 :search ""
           :current     nil :route-id nil :form default-form
           :error       nil
           :notice      "You have been signed out.")
    (navigate! "#/login")
    (when token (api/logout! token (fn [])))))

(defn on-unauthorized!
  "Global 401 handler wired by core/init!: an expired or revoked token
  drops the user back to the login screen."
  [_payload]
  (api/set-token! nil)
  (swap! app assoc
         :auth     {:user nil :busy? false :checking? false}
         :view     :login
         :contacts [] :recent [] :current nil
         :error    "Your session has expired - please sign in again.")
  (navigate! "#/login"))

(defn check-session!
  "Validate any stored token against the API, then route."
  []
  (if (str/blank? (api/get-token))
    (do (swap! app assoc :auth {:user nil :busy? false :checking? false})
        (handle-route!))
    (api/me!
      (fn [user]
        (swap! app assoc :auth {:user user :busy? false :checking? false})
        (handle-route!))
      (fn [_payload status]
        ;; non-401 problem (401 is handled globally by on-unauthorized!)
        (api/set-token! nil)
        (swap! app assoc
               :auth  {:user nil :busy? false :checking? false}
               :error (if (= 0 status)
                        "Cannot reach the server - is the API running?"
                        "Your session has expired - please sign in again."))
        (handle-route!)))))

(defonce ^:private route-bound? (atom false))

(defn init!
  "Bind the hash router (once) and validate any stored session."
  []
  (when-not @route-bound?
    (.addEventListener js/window "hashchange" handle-route!)
    (reset! route-bound? true)
    (api/set-unauthorized-handler! on-unauthorized!))
  (check-session!))

;; ---------------------------------------------------------------------------
;; Contacts CRUD

(defn set-form-field! [k v]
  (swap! app assoc-in [:form k] v))

(defn open-contact! [id] (navigate! (str "#/contacts/" id)))
(defn open-create! [] (navigate! "#/contacts/new"))
(defn start-edit! [id] (navigate! (str "#/contacts/" id "/edit")))
(defn cancel-edit! [id] (navigate! (str "#/contacts/" id)))

(defn save!
  "Create (view :new) or update (view :edit) the current form."
  []
  (let [{:keys [form view route-id]} @app
        errors (v/validate-contact form)]
    (if (seq errors)
      (swap! app assoc :form-errors errors :error nil)
      (do (swap! app assoc :form-errors {} :error nil :saving? true)
          (let [payload {:name        (:name form)
                         :phoneNumber (:phoneNumber form)
                         :email       (when-not (str/blank? (:email form)) (:email form))
                         :address     (when-not (str/blank? (:address form)) (:address form))}
                on-ok   (fn [contact]
                          (swap! app assoc
                                 :saving? false :current contact :form-errors {}
                                 :notice "Contact saved")
                          (navigate! (str "#/contacts/" (:id contact))))
                on-err  (fn [payload status]
                          (swap! app assoc
                                 :saving? false
                                 :form-errors (or (:errors payload) {})
                                 :error (cond
                                          (= 409 status) (or (:error payload) "A contact with this phone number or email already exists")
                                          (= 401 status) nil ;; global handler shows the session message
                                          (= 0 status) "Cannot reach the server - is the API running?"
                                          :else (or (:error payload) "Could not save the contact"))))]
            (if (= :edit view)
              (api/update-contact route-id payload on-ok on-err)
              (api/create-contact payload on-ok on-err)))))))

(defn delete!
  "Delete a contact (with confirmation) and return to the list."
  [id]
  (when (js/confirm "Delete this contact? This cannot be undone.")
    (api/delete-contact id
      (fn [_]
        (swap! app assoc :notice "Contact deleted" :current nil)
        (navigate! "#/contacts"))
      (fn [payload status]
        (swap! app assoc :error (cond
                                  (= 404 status) "This contact no longer exists"
                                  (= 0 status) "Cannot reach the server - is the API running?"
                                  :else (or (:error payload) "Could not delete the contact")))))))

(defn retry-load!
  "Re-run the load appropriate for the current view."
  []
  (case (:view @app)
    :dashboard (load-recent!)
    :contacts  (load-contacts!)
    :detail    (when-let [id (:route-id @app)] (load-contact! id))
    :edit      (when-let [id (:route-id @app)] (load-contact-into-form! id))
    nil))
