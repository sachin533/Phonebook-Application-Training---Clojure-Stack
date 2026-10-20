(ns phonebook.routes
  "REST API routes (Reitit) and request handlers.

  Endpoints:

    POST   /api/auth/register  - create an account, returns {token, user}
    POST   /api/auth/login     - sign in, returns {token, user}
    POST   /api/auth/logout    - revoke the current session (auth)
    GET    /api/auth/me        - current user (auth)

    GET    /api/contacts       - list (auth; ?q= search across name,
                                 phone number and email, ?page=&pageSize=
                                 LIMIT/OFFSET pagination, ?sort=recent)
    POST   /api/contacts       - create (auth)
    GET    /api/contacts/:id   - fetch one (auth, own contacts only)
    PUT    /api/contacts/:id   - replace one (auth, own contacts only)
    DELETE /api/contacts/:id   - delete one (auth, own contacts only)

    GET    /health             - liveness probe (public)

  All responses are JSON with conventional status codes
  (200/201/204, 400 validation, 401 unauthenticated, 404 not found or
  not yours, 409 conflict)."
  (:require [clojure.string :as str]
            [muuntaja.core :as m]
            [phonebook.auth :as auth]
            [phonebook.config :as config]
            [phonebook.db :as db]
            [phonebook.validation :as v]
            [reitit.ring :as ring]
            [reitit.ring.middleware.exception :as exception]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [reitit.ring.middleware.parameters :as parameters])
  (:import [java.sql SQLException]))

;; ---------------------------------------------------------------------------
;; Mapping between DB rows (snake_case) and API payloads (camelCase)

(defn row->api [row]
  (when row
    {:id          (:id row)
     :name        (:name row)
     :phoneNumber (:phone_number row)
     :email       (:email row)
     :address     (:address row)
     :createdAt   (some-> (:created_at row) str)}))

(defn user->api [row]
  (when row
    {:id        (:id row)
     :email     (:email row)
     :createdAt (some-> (:created_at row) str)}))

(defn- body->db [body]
  {:name        (:name body)
   :phone_number (:phoneNumber body)
   :email       (:email body)
   :address     (:address body)})

;; ---------------------------------------------------------------------------
;; Helpers

(defn- keywordize-keys
  "Top-level keywordization, so handlers work whether the body decoder
  returns keyword or string keys."
  [m]
  (if (map? m)
    (into {} (map (fn [[k v]] [(if (keyword? k) k (keyword (name k))) v])) m)
    m))

(defn- qp
  "Query param lookup that tolerates keyword or string keys."
  [request k]
  (let [params (:query-params request)]
    (or (get params k)
        (get params (name k)))))

(defn- parse-int [s]
  (try (Long/parseLong (str s))
       (catch Exception _ nil)))

(def ^:private max-page-size 100)

(defn- pagination
  "Parse page/pageSize query params into limit/offset. Defaults to
  page 1 of 20, pageSize capped at 100 - the server never loads the
  whole table."
  [request]
  (let [page      (max 1 (or (some-> (qp request :page) parse-int) 1))
        page-size (min max-page-size (max 1 (or (some-> (qp request :pageSize) parse-int) 20)))]
    {:page      page
     :page-size page-size
     :limit     page-size
     :offset    (* page-size (dec page))}))

(defn- user-id
  "Id of the authenticated user (set by auth/wrap-auth)."
  [request]
  (get-in request [:auth-user :id]))

(defn- not-json []
  {:status 400 :body {:errors {:form ["Request body must be a JSON object"]}}})

;; ---------------------------------------------------------------------------
;; Auth handlers

(defn register [request]
  (let [body (v/normalize-auth (keywordize-keys (:body-params request)))]
    (if-not (map? body)
      (not-json)
      (if-let [errors (v/validate v/Register body)]
        {:status 400 :body errors}
        (let [email (:email body)]
          (if (db/find-user-by-email! email)
            {:status 409 :body {:error "An account with this email already exists"}}
            (try
              (let [user  (db/insert-user! email (auth/hash-password (:password body)))
                    token (auth/create-session! (:id user))]
                {:status 201 :body {:token token :user (user->api user)}})
              (catch SQLException e
                (if (db/duplicate-key? e)
                  {:status 409 :body {:error "An account with this email already exists"}}
                  (throw e))))))))))

(defn login [request]
  (let [body (v/normalize-auth (keywordize-keys (:body-params request)))]
    (if-not (map? body)
      (not-json)
      (if-let [errors (v/validate v/Login body)]
        {:status 400 :body errors}
        (let [user (db/find-user-by-email! (:email body))]
          (if (and user (auth/verify-password (:password body) (:password_hash user)))
            {:status 200
             :body   {:token (auth/create-session! (:id user))
                      :user  (user->api user)}}
            ;; same message for unknown email and wrong password, so the
            ;; response does not reveal which accounts exist
            {:status 401 :body {:error "Invalid email or password"}}))))))

(defn logout [request]
  (auth/revoke-token! (auth/bearer-token request))
  {:status 204 :body ""})

(defn me [request]
  {:status 200 :body (user->api (:auth-user request))})

;; ---------------------------------------------------------------------------
;; Contact handlers (all authenticated - wrap-auth sets :auth-user)

(defn list-contacts [request]
  (let [uid     (user-id request)
        q       (some-> (qp request :q) str/trim)
        q       (when-not (str/blank? q) q)
        paging  (pagination request)
        sort    (when (= "recent" (qp request :sort)) :recent)
        rows    (db/list-contacts!
                  (cond-> {:user-id uid}
                    q     (assoc :q q)
                    sort  (assoc :sort sort)
                    true  (merge (select-keys paging [:limit :offset]))))
        total   (db/count-contacts! uid q)]
    {:status 200
     :body   {:contacts (mapv row->api rows)
              :total    total
              :page     (:page paging)
              :pageSize (:page-size paging)}}))

(defn create-contact [request]
  (let [uid  (user-id request)
        body (v/normalize (keywordize-keys (:body-params request)))]
    (if-not (map? body)
      (not-json)
      (if-let [errors (v/validate v/Contact body)]
        {:status 400 :body errors}
        (try
          {:status 201 :body (row->api (db/insert-contact! uid (body->db body)))}
          (catch SQLException e
            (if (db/duplicate-key? e)
              {:status 409
               :body  {:error "A contact with this phone number or email already exists"}}
              (throw e))))))))

(defn get-contact [request]
  (let [uid (user-id request)
        id  (get-in request [:path-params :id])]
    (if-not (v/valid-id? id)
      {:status 400 :body {:error "Invalid contact id"}}
      (if-let [row (db/find-contact! uid (parse-int id))]
        {:status 200 :body (row->api row)}
        ;; not found and "belongs to someone else" are deliberately the
        ;; same answer - other users' rows must not be discoverable
        {:status 404 :body {:error "Contact not found"}}))))

(defn update-contact [request]
  (let [uid  (user-id request)
        id   (get-in request [:path-params :id])
        body (v/normalize (keywordize-keys (:body-params request)))]
    (cond
      (not (v/valid-id? id))
      {:status 400 :body {:error "Invalid contact id"}}

      (not (map? body))
      (not-json)

      :else
      (if-let [errors (v/validate v/ContactUpdate body)]
        {:status 400 :body errors}
        (try
          (if-let [row (db/update-contact! uid (parse-int id) (body->db body))]
            {:status 200 :body (row->api row)}
            {:status 404 :body {:error "Contact not found"}})
          (catch SQLException e
            (if (db/duplicate-key? e)
              {:status 409
               :body  {:error "A contact with this phone number or email already exists"}}
              (throw e))))))))

(defn delete-contact [request]
  (let [uid (user-id request)
        id  (get-in request [:path-params :id])]
    (if-not (v/valid-id? id)
      {:status 400 :body {:error "Invalid contact id"}}
      (if (db/delete-contact! uid (parse-int id))
        {:status 204 :body ""}
        {:status 404 :body {:error "Contact not found"}}))))

;; ---------------------------------------------------------------------------
;; CORS

(defn- cors-headers [origin]
  {"Access-Control-Allow-Origin"  origin
   "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS"
   "Access-Control-Allow-Headers" "Content-Type, Accept, Authorization"
   "Access-Control-Max-Age"       "3600"
   "Vary"                         "Origin"})

(defn wrap-cors
  "Answer CORS preflight requests and attach CORS headers to every
  response when the request comes from an allowed origin."
  [handler]
  (fn [request]
    (let [origin     (get-in request [:headers "origin"])
          allowed    (when (config/cors-allowed? origin) origin)
          preflight? (= :options (:request-method request))
          response   (if preflight?
                       {:status 204 :headers {} :body ""}
                       (handler request))]
      (if allowed
        (update response :headers merge (cors-headers allowed))
        response))))

;; ---------------------------------------------------------------------------
;; Router

(def router
  (ring/router
    [["/health"
      {:get (fn [_] {:status 200 :body {:status "ok"}})}]

     ["/api/auth/register"
      {:post register}]

     ["/api/auth/login"
      {:post login}]

     ["/api/auth/logout"
      {:post       logout
       :middleware [auth/wrap-auth]}]

     ["/api/auth/me"
      {:get        me
       :middleware [auth/wrap-auth]}]

     ;; NOTE: written as flat routes on purpose - in reitit 0.11 a parent
     ;; route that also has nested children does not serve its own handlers.
     ["/api/contacts"
      {:get        list-contacts
       :post       create-contact
       :middleware [auth/wrap-auth]}]

     ["/api/contacts/:id"
      {:get        get-contact
       :put        update-contact
       :delete     delete-contact
       :middleware [auth/wrap-auth]}]]
    {:data {:muuntaja   m/instance
            :middleware [parameters/parameters-middleware
                         muuntaja/format-middleware
                         exception/exception-middleware]}}))

(def handler
  (ring/ring-handler
    router
    (ring/create-default-handler
      {:not-found
       (fn [_]
         {:status 404
          :headers {"Content-Type" "application/json; charset=utf-8"}
          ;; static JSON body - this handler sits outside the muuntaja
          ;; middleware chain, so it encodes nothing itself
          :body "{\"error\":\"Not found\"}"})})))

(defn wrap-failsafe
  "Last-resort fence OUTSIDE the router. Reitit's exception middleware sits
  inside the muuntaja middleware, so exceptions raised while *decoding* the
  request (e.g. malformed JSON) would otherwise escape the whole ring stack.
  Turn them into proper JSON responses instead."
  [handler]
  (fn [request]
    (try
      (handler request)
      (catch com.fasterxml.jackson.core.JsonParseException _
        {:status 400
         :headers {"Content-Type" "application/json; charset=utf-8"}
         :body "{\"error\":\"Request body is not valid JSON\"}"})
      (catch clojure.lang.ExceptionInfo e
        ;; muuntaja/reitit wrap decode failures as
        ;; "Malformed <content-type> request."
        (if (re-find #"(?i)malformed.*request" (or (.getMessage e) ""))
          {:status 400
           :headers {"Content-Type" "application/json; charset=utf-8"}
           :body "{\"error\":\"Request body is not valid JSON\"}"}
          (do
            (println "Unhandled error:" (or (.getMessage e) (str (class e))))
            {:status 500
             :headers {"Content-Type" "application/json; charset=utf-8"}
             :body "{\"error\":\"Internal server error\"}"})))
      (catch Exception e
        (println "Unhandled error:" (or (.getMessage e) (str (class e))))
        {:status 500
         :headers {"Content-Type" "application/json; charset=utf-8"}
         :body "{\"error\":\"Internal server error\"}"}))))

(def app
  (-> handler wrap-failsafe wrap-cors))
