(ns phonebook.ui.api
  "Thin Fetch API client for the phonebook REST API, including bearer
  token storage and a global 401 handler (expired/revoked sessions)."
  (:require [clojure.string :as str]))

;; Same-origin relative paths: requests hit whatever origin serves the UI
;; (shadow-cljs dev-http proxies /api/* to the Clojure server), so the app
;; works locally AND behind a shareable tunnel URL.
(def base-url "")

;; ---------------------------------------------------------------------------
;; Bearer token (sessionStorage - cleared when the tab closes)

(def ^:private token-key "phonebook.token")

(defn get-token []
  (.getItem js/sessionStorage token-key))

(defn set-token!
  "Store (or clear, when nil) the session token."
  [token]
  (if token
    (.setItem js/sessionStorage token-key token)
    (.removeItem js/sessionStorage token-key))
  token)

(defonce ^:private unauthorized-handler (atom nil))

(defn set-unauthorized-handler!
  "Called with the failing payload whenever the API answers 401, so the
  UI can drop the user back to the login screen."
  [f]
  (reset! unauthorized-handler f))

;; ---------------------------------------------------------------------------

(defn- parse-body
  "204 responses have no body - resolve nil instead of calling .json."
  [res]
  (if (= 204 (.-status res))
    (js/Promise. (fn [resolve _reject] (resolve nil)))
    (.json res)))

(defn- request!
  "Perform a fetch request. `on-success` receives the parsed payload
  (Clojure data), `on-error` receives [payload status] where status 0
  means a network failure. 401 goes to the global handler unless
  :ignore-401? is set; :token overrides the stored session token."
  [{:keys [method path body on-success on-error ignore-401? token]}]
  (let [token   (or token (get-token))
        headers (cond-> {"Content-Type" "application/json"
                         "Accept"       "application/json"}
                  token (assoc "Authorization" (str "Bearer " token)))
        opts    (clj->js
                  (cond-> {:method  (name method)
                           :headers headers}
                    body (assoc :body (js/JSON.stringify (clj->js body)))))]
    (-> (js/fetch (str base-url path) opts)
        (.then (fn [res]
                 (-> (parse-body res)
                     (.then (fn [data]
                              (let [payload (when (some? data)
                                              (js->clj data :keywordize-keys true))]
                                (cond
                                  (.-ok res)
                                  (when on-success (on-success payload))

                                  (= 401 (.-status res))
                                  (if ignore-401?
                                    (when on-error (on-error (or payload {}) 401))
                                    (when-let [handler @unauthorized-handler]
                                      (handler (or payload {}))))

                                  :else
                                  (when on-error
                                    (on-error (or payload {}) (.-status res))))))))))
        (.catch (fn [err]
                  (when on-error
                    (on-error {:error (str "Network error: " err)} 0)))))))

(defn- query-string [params]
  (->> params
       (remove (fn [[_ v]] (or (nil? v) (and (string? v) (str/blank? v)))))
       (map (fn [[k v]] (str (name k) "=" (js/encodeURIComponent (str v)))))
       (str/join "&")))

;; ---------------------------------------------------------------------------
;; Auth

(defn login!
  "POST /api/auth/login -> {:token .. :user {..}}. A 401 here means bad
  credentials (a form error), not an expired session - never route it to
  the global unauthorized handler."
  [credentials on-success on-error]
  (request! {:method :post :path "/api/auth/login" :body credentials
             :ignore-401? true
             :on-success on-success :on-error on-error}))

(defn register!
  "POST /api/auth/register -> {:token .. :user {..}}"
  [payload on-success on-error]
  (request! {:method :post :path "/api/auth/register" :body payload
             :ignore-401? true
             :on-success on-success :on-error on-error}))

(defn logout!
  "POST /api/auth/logout with an explicit token -> 204 (best effort; a
  dead session still resolves so the UI can finish signing out)."
  [token on-done]
  (request! {:method :post :path "/api/auth/logout" :token token
             :ignore-401? true
             :on-success (fn [_] (when on-done (on-done)))
             :on-error   (fn [_ _] (when on-done (on-done)))}))

(defn me!
  "GET /api/auth/me -> current user."
  [on-success on-error]
  (request! {:method :get :path "/api/auth/me"
             :on-success on-success :on-error on-error}))

;; ---------------------------------------------------------------------------
;; Contacts

(defn fetch-contacts
  "GET /api/contacts with q / page / pageSize / sort params."
  [{:keys [q page pageSize sort] :as params} on-success on-error]
  (let [qs (query-string (select-keys params [:q :page :pageSize :sort]))]
    (request! {:method      :get
               :path        (if (str/blank? qs) "/api/contacts" (str "/api/contacts?" qs))
               :on-success  on-success
               :on-error    on-error})))

(defn get-contact
  "GET /api/contacts/:id"
  [id on-success on-error]
  (request! {:method :get :path (str "/api/contacts/" id)
             :on-success on-success :on-error on-error}))

(defn create-contact
  "POST /api/contacts"
  [payload on-success on-error]
  (request! {:method :post :path "/api/contacts" :body payload
             :on-success on-success :on-error on-error}))

(defn update-contact
  "PUT /api/contacts/:id"
  [id payload on-success on-error]
  (request! {:method :put :path (str "/api/contacts/" id) :body payload
             :on-success on-success :on-error on-error}))

(defn delete-contact
  "DELETE /api/contacts/:id"
  [id on-success on-error]
  (request! {:method :delete :path (str "/api/contacts/" id)
             :on-success on-success :on-error on-error}))
