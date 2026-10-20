(ns phonebook.smoke
  "DB-independent smoke test for the API wiring:

      clj -M scripts/smoke.clj

  Exercises CORS preflight, health, authentication requirements and
  input validation - none of these touch MySQL (401/400 answers happen
  before any query), so they can run before the database is provisioned.
  DB-backed flows (register/login/CRUD/pagination) are covered by
  scripts/e2e.clj."
  (:require [clojure.string :as str]
            [muuntaja.core :as m]
            [phonebook.routes :as routes])
  (:import [java.io ByteArrayInputStream]))

;; ---------------------------------------------------------------------------

(def failures (atom []))

(defn- check [label expected actual]
  (let [ok? (= expected actual)]
    (println (if ok? "  PASS" "  FAIL") "-" label
             (if ok? (str "(=> " (pr-str expected) ")")
                     (str "(expected " (pr-str expected) ", got " (pr-str actual) ")")))
    (when-not ok? (swap! failures conj label))
    ok?))

(defn- request
  "Build a minimal ring request map."
  [method uri & [{:keys [origin json-body token]}]]
  (cond-> {:request-method method
           :uri            uri
           :headers        (cond-> {}
                             origin    (assoc "origin" origin)
                             token     (assoc "authorization" (str "Bearer " token))
                             json-body (assoc "content-type" "application/json"))
           :query-string   nil}
    json-body (assoc :body (ByteArrayInputStream. (.getBytes ^String json-body "UTF-8")))))

(defn- call [method uri opts]
  (routes/app (request method uri opts)))

(defn- body-str [response]
  (let [body (:body response)]
    (cond
      (string? body) body
      (nil? body) ""
      (instance? java.io.InputStream body) (slurp body)
      :else (pr-str body))))

;; ---------------------------------------------------------------------------

(println)
(println "Phonebook API smoke test (no database required)")
(println (str/join "" (repeat 54 "-")))

;; 1. health check ------------------------------------------------------------
(let [res (call :get "/health" {})]
  (check "GET /health -> 200" 200 (:status res))
  (check "GET /health returns JSON" "application/json; charset=utf-8"
         (get-in res [:headers "Content-Type"]))
  (check "GET /health body" "{\"status\":\"ok\"}" (body-str res))
  (check "GET /health has no CORS headers without Origin" nil
         (get-in res [:headers "Access-Control-Allow-Origin"])))

;; 2. CORS preflight ----------------------------------------------------------
(let [res (call :options "/api/contacts" {:origin "http://localhost:8080"})]
  (check "OPTIONS preflight -> 204" 204 (:status res))
  (check "preflight allows origin" "http://localhost:8080"
         (get-in res [:headers "Access-Control-Allow-Origin"]))
  (check "preflight allows methods" "GET, POST, PUT, DELETE, OPTIONS"
         (get-in res [:headers "Access-Control-Allow-Methods"]))
  (check "preflight allows headers" "Content-Type, Accept, Authorization"
         (get-in res [:headers "Access-Control-Allow-Headers"])))

;; 3. CORS on a normal response ----------------------------------------------
(let [res (call :get "/health" {:origin "http://localhost:8080"})]
  (check "response carries CORS origin for allowed origin" "http://localhost:8080"
         (get-in res [:headers "Access-Control-Allow-Origin"]))
  (check "response varies on Origin" "Origin"
         (get-in res [:headers "Vary"])))

(let [res (call :get "/health" {:origin "http://evil.example"})]
  (check "disallowed origin gets no CORS header" nil
         (get-in res [:headers "Access-Control-Allow-Origin"])))

;; 4. protected endpoints reject unauthenticated requests (no DB access) ------
(doseq [[label method uri expected-status]
        [["GET    /api/contacts w/o token -> 401" :get    "/api/contacts" 401]
         ["POST   /api/contacts w/o token -> 401" :post   "/api/contacts" 401]
         ["GET    /api/contacts/1 w/o token -> 401" :get  "/api/contacts/1" 401]
         ["PUT    /api/contacts/1 w/o token -> 401" :put  "/api/contacts/1" 401]
         ["DELETE /api/contacts/1 w/o token -> 401" :delete "/api/contacts/1" 401]
         ["GET    /api/auth/me w/o token -> 401" :get    "/api/auth/me" 401]
         ["POST   /api/auth/logout w/o token -> 401" :post "/api/auth/logout" 401]]]
  (check label expected-status (:status (call method uri {}))))

(let [res (call :get "/api/contacts" {:token "not-a-real-token"})]
  (check "invalid bearer token -> 401" 401 (:status res))
  (let [payload (m/decode m/instance "application/json" (body-str res))]
    (check "401 has JSON error" "Authentication required" (:error payload))))

;; 5. auth validation (400 before any DB access) ------------------------------
(let [res (call :post "/api/auth/register"
                {:json-body "{\"email\":\"not-an-email\",\"password\":\"short\"}"})
      payload (m/decode m/instance "application/json" (body-str res))]
  (check "POST register invalid -> 400" 400 (:status res))
  (check "register 400 flags email" true (boolean (seq (get-in payload [:errors :email]))))
  (check "register 400 flags password" true (boolean (seq (get-in payload [:errors :password])))))

(let [res (call :post "/api/auth/register"
                {:json-body "{\"email\":\"ok@example.com\",\"password\":\"\"}"})]
  (check "register empty password -> 400" 400 (:status res)))

(let [res (call :post "/api/auth/login"
                {:json-body "{\"email\":\"nope\",\"password\":\"whatever123\"}"})]
  (check "POST login invalid email -> 400" 400 (:status res)))

;; 6. malformed JSON ----------------------------------------------------------
(let [res (call :post "/api/auth/register" {:json-body "not-json-at-all"})]
  (check "POST non-object body -> 400" 400 (:status res)))

;; 7. unknown route -----------------------------------------------------------
(let [res (call :get "/definitely-not-a-route" {})]
  (check "unknown route -> 404" 404 (:status res))
  (check "404 is JSON" "application/json; charset=utf-8"
         (get-in res [:headers "Content-Type"])))

;; ---------------------------------------------------------------------------
(println (str/join "" (repeat 54 "-")))
(if (seq @failures)
  (do (println "FAILURES:" (pr-str @failures))
      (System/exit 1))
  (do (println "All smoke tests passed.")
      (System/exit 0)))
