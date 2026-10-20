(ns phonebook.e2e
  "End-to-end REST tests against a RUNNING server and seeded database.

      clj -M:run                 # terminal 1
      clj -M:seed                # once, to create the demo user + 500+ contacts
      clj -M scripts/e2e.clj     # terminal 2

  Covers registration, login, logout, session invalidation, authorization
  (users cannot see each other's contacts), full CRUD, cross-field search,
  first/middle/last/out-of-range pagination, filtering + pagination,
  conflicts and CORS. Uses unique emails/phones per run - safe to repeat."
  (:require [clojure.string :as str]
            [muuntaja.core :as m])
  (:import [java.net URI]
           [java.net.http HttpClient HttpRequest HttpRequest$BodyPublishers
                          HttpResponse$BodyHandlers]
           [java.time Duration]))

(def base (or (System/getenv "API_BASE") "http://localhost:3000"))

(def ^HttpClient client
  (-> (HttpClient/newBuilder)
      (.connectTimeout (Duration/ofSeconds 5))
      (.build)))

(def failures (atom []))

(defn- check [label expected actual]
  (let [ok? (= expected actual)]
    (println (if ok? "  PASS" "  FAIL") "-" label
             (if ok? (str "(=> " (pr-str expected) ")")
                     (str "(expected " (pr-str expected) ", got " (pr-str actual) ")")))
    (when-not ok? (swap! failures conj label))
    ok?))

(defn- call
  "HTTP request -> {:status :headers :body-string}."
  ([method path] (call method path nil nil))
  ([method path body] (call method path body nil))
  ([method path body headers]
   (let [builder (HttpRequest/newBuilder (URI/create (str base path)))]
     (.timeout builder (Duration/ofSeconds 10))
     (.header builder "Accept" "application/json")
     (doseq [[k v] headers] (.header builder ^String k ^String v))
     (let [publisher (if body
                       (HttpRequest$BodyPublishers/ofString ^String body)
                       (HttpRequest$BodyPublishers/noBody))
           request (-> builder
                       (.method (str/upper-case (name method)) publisher)
                       (.build))
           response (.send client request (HttpResponse$BodyHandlers/ofString))]
       {:status  (.statusCode response)
        :headers (into {} (for [[k vs] (.map (.headers response))]
                            [k (str/join "," vs)]))
        :body    (.body response)}))))

(defn- auth [token]
  (when token {"Authorization" (str "Bearer " token)}))

(defn- json-body [data]
  (slurp (m/encode m/instance "application/json" data)))

(defn- parse [resp]
  (when-not (str/blank? (:body resp))
    (m/decode m/instance "application/json" (:body resp))))

;; ---------------------------------------------------------------------------

(def suffix (str (System/currentTimeMillis)))
(def user-a-email (str "e2e-a-" suffix "@example.com"))
(def user-b-email (str "e2e-b-" suffix "@example.com"))
(def pw "Sup3rSecret!pw")

(println)
(println "Phonebook end-to-end API tests")
(println (str "server: " base))
(println (str/join "" (repeat 54 "-")))

;; 1. health ------------------------------------------------------------------
(let [r (call :get "/health")]
  (check "health -> 200" 200 (:status r))
  (check "health body" "ok" (:status (parse r))))

;; 2. registration ------------------------------------------------------------
(def token-a
  (let [r (call :post "/api/auth/register"
                (json-body {:email user-a-email :password pw})
                {"Content-Type" "application/json"})
        p (parse r)]
    (check "register -> 201" 201 (:status r))
    (check "register returns token" true (string? (:token p)))
    (check "register returns user email" user-a-email (get-in p [:user :email]))
    (check "register never returns password_hash" nil (:passwordHash p))
    (:token p)))

(let [r (call :post "/api/auth/register"
              (json-body {:email user-a-email :password pw})
              {"Content-Type" "application/json"})]
  (check "duplicate register -> 409" 409 (:status r))
  (check "409 has error message" true (some? (:error (parse r)))))

(let [r (call :post "/api/auth/register"
              (json-body {:email "weak@example.com" :password "short"})
              {"Content-Type" "application/json"})]
  (check "register weak password -> 400" 400 (:status r))
  (check "400 flags password" true (boolean (seq (get-in (parse r) [:errors :password])))))

;; 3. login -------------------------------------------------------------------
(def token-a2
  (let [r (call :post "/api/auth/login"
                (json-body {:email user-a-email :password pw})
                {"Content-Type" "application/json"})
        p (parse r)]
    (check "login valid -> 200" 200 (:status r))
    (check "login returns token" true (string? (:token p)))
    (check "login returns same user" user-a-email (get-in p [:user :email]))
    (:token p)))

(let [r (call :post "/api/auth/login"
              (json-body {:email user-a-email :password "wrong-password-1"})
              {"Content-Type" "application/json"})]
  (check "login wrong password -> 401" 401 (:status r))
  (check "generic login error" "Invalid email or password" (:error (parse r))))

(let [r (call :post "/api/auth/login"
              (json-body {:email (str "nobody-" suffix "@example.com") :password pw})
              {"Content-Type" "application/json"})]
  (check "login unknown email -> 401" 401 (:status r)))

;; 4. sessions ----------------------------------------------------------------
(let [r (call :get "/api/auth/me" nil (auth token-a2))]
  (check "me with token -> 200" 200 (:status r))
  (check "me email" user-a-email (:email (parse r))))

(check "me without token -> 401" 401 (:status (call :get "/api/auth/me")))
(check "contacts without token -> 401" 401 (:status (call :get "/api/contacts")))
(check "invalid token -> 401" 401 (:status (call :get "/api/contacts" nil (auth "deadbeef"))))

;; 5. contact CRUD ------------------------------------------------------------
(def contact
  (let [phone (str "+1 555 908 " (subs suffix (- (count suffix) 4)))
        r (call :post "/api/contacts"
                (json-body {:name "Zephyr Quillson"
                            :phoneNumber phone
                            :email (str "zephyr.quillson." suffix "@example.com")
                            :address "42 Nimbus Lane, Cloudville"})
                (merge {"Content-Type" "application/json"} (auth token-a2)))
        p (parse r)]
    (check "POST contact -> 201" 201 (:status r))
    (check "created name" "Zephyr Quillson" (:name p))
    (check "created phone" phone (:phoneNumber p))
    (check "created id" true (int? (:id p)))
    (check "created createdAt" true (some? (:createdAt p)))
    p))

(def contact-id (:id contact))

(let [r (call :post "/api/contacts"
              (json-body {:name "Impostor" :phoneNumber (:phoneNumber contact)})
              (merge {"Content-Type" "application/json"} (auth token-a2)))]
  (check "duplicate phone -> 409" 409 (:status r)))

(let [r (call :post "/api/contacts"
              (json-body {:name "" :phoneNumber "not-a-phone"})
              (merge {"Content-Type" "application/json"} (auth token-a2)))]
  (check "invalid contact -> 400" 400 (:status r))
  (check "400 flags name" true (boolean (seq (get-in (parse r) [:errors :name]))))
  (check "400 flags phone" true (boolean (seq (get-in (parse r) [:errors :phoneNumber])))))

(let [r (call :post "/api/contacts" "not-json-at-all"
              (merge {"Content-Type" "application/json"} (auth token-a2)))]
  (check "malformed JSON -> 400" 400 (:status r)))

(let [r (call :get (str "/api/contacts/" contact-id) nil (auth token-a2))]
  (check "GET by id -> 200" 200 (:status r))
  (check "GET by id returns our phone" (:phoneNumber contact) (:phoneNumber (parse r))))

(check "GET invalid id -> 400" 400 (:status (call :get "/api/contacts/xyz" nil (auth token-a2))))

(def updated
  (let [r (call :put (str "/api/contacts/" contact-id)
                (json-body {:name "Zephyr Quillson III"
                            :phoneNumber (:phoneNumber contact)
                            :email (str "zephyr.quillson." suffix "@example.com")
                            :address "43 Stratus Avenue, Cloudville"})
                (merge {"Content-Type" "application/json"} (auth token-a2)))]
    (check "PUT -> 200" 200 (:status r))
    (check "PUT name updated" "Zephyr Quillson III" (:name (parse r)))
    (:name (parse r))))

;; update to an email that already exists elsewhere -> 409 (database rule)
(def email-holder
  (let [r (call :post "/api/contacts"
                (json-body {:name "Email Holder"
                            :phoneNumber (str "+1 555 909 " (subs suffix (- (count suffix) 4)))
                            :email (str "email.holder." suffix "@example.com")})
                (merge {"Content-Type" "application/json"} (auth token-a2)))]
    (check "second contact for A -> 201" 201 (:status r))
    (parse r)))

(let [r (call :put (str "/api/contacts/" contact-id)
              (json-body {:name "Zephyr Quillson III"
                          :phoneNumber (:phoneNumber contact)
                          :email (:email email-holder)})
              (merge {"Content-Type" "application/json"} (auth token-a2)))]
  (check "duplicate email on update -> 409" 409 (:status r)))

;; 6. search (across the full database, partial + case-insensitive) -----------
(let [r (call :get "/api/contacts?q=zephyr" nil (auth token-a2))
      p (parse r)]
  (check "search by partial name -> 200" 200 (:status r))
  (check "search by name finds contact" true
         (boolean (some #(= contact-id (:id %)) (:contacts p)))))

(let [r (call :get (str "/api/contacts?q="
                        (java.net.URLEncoder/encode (subs (:phoneNumber contact) 7) "UTF-8"))
              nil (auth token-a2))
      p (parse r)]
  (check "search by partial phone -> 200" 200 (:status r))
  (check "search by phone finds contact" true
         (boolean (some #(= contact-id (:id %)) (:contacts p)))))

(let [r (call :get "/api/contacts?q=quillson" nil (auth token-a2))
      p (parse r)]
  (check "search by partial email -> 200" 200 (:status r))
  (check "search by email finds contact" true
         (boolean (some #(= contact-id (:id %)) (:contacts p)))))

(let [r (call :get "/api/contacts?q=ZEPHYR" nil (auth token-a2))]
  (check "search is case-insensitive" true
         (boolean (some #(= contact-id (:id %)) (:contacts (parse r))))))

(let [r (call :get "/api/contacts?q=zzzqqqxyzzy-no-such-contact" nil (auth token-a2))
      p (parse r)]
  (check "empty search -> 200" 200 (:status r))
  (check "empty search returns no rows" [] (:contacts p))
  (check "empty search total 0" 0 (:total p)))

;; 7. pagination + full-database search (seeded demo account) -----------------
;; The 550+ seeded contacts belong to demo@phonebook.local (clj -M:seed),
;; so pagination across many pages is verified with that account.

(def demo-email "demo@phonebook.local")
(def demo-pw "Demo1234!") ; created by clj -M:seed, documented in README

(def token-demo
  (:token (parse (call :post "/api/auth/login"
                       (json-body {:email demo-email :password demo-pw})
                       {"Content-Type" "application/json"}))))

(when (nil? token-demo)
  (println "  NOTE - demo account missing: run `clj -M:seed` first (the checks below will fail)"))

(def total-demo
  (if token-demo
    (or (:total (parse (call :get "/api/contacts?page=1&pageSize=1" nil (auth token-demo)))) 0)
    0))

(println (str "       (contacts visible to demo user: " total-demo ")"))
(check "seed produced at least 500 contacts" true (>= total-demo 500))

(def page-size 20)
(def last-page (max 1 (int (Math/ceil (double (/ (max total-demo 1) page-size))))))
(def middle-page (max 2 (min last-page (quot last-page 2))))

(let [r (call :get "/api/contacts?page=1&pageSize=20" nil (auth token-demo))
      p (parse r)]
  (check "first page -> 200" 200 (:status r))
  (check "first page is full (>= 500 contacts total)" 20 (count (:contacts p)))
  (check "page echo" 1 (:page p))
  (check "pageSize echo" 20 (:pageSize p)))

(let [p (parse (call :get (str "/api/contacts?page=" middle-page "&pageSize=20") nil (auth token-demo)))]
  (check (str "middle page " middle-page " has rows") true (pos? (count (:contacts p))))
  (check "middle page echo" middle-page (:page p)))

(let [p (parse (call :get (str "/api/contacts?page=" last-page "&pageSize=20") nil (auth token-demo)))
      expected-last (- (:total p) (* page-size (dec last-page)))]
  (check (str "last page " last-page " has rows") true (pos? (count (:contacts p))))
  (check "last page size matches remainder" expected-last (count (:contacts p))))

(let [r (call :get "/api/contacts?page=99999&pageSize=20" nil (auth token-demo))
      p (parse r)]
  (check "out-of-range page -> 200" 200 (:status r))
  (check "out-of-range page returns no rows" [] (:contacts p))
  (check "out-of-range page keeps total" true (>= (:total p) 500)))

;; search must run against the whole table, not just an already-loaded page:
;; take a contact from a deep page and find it again through ?q=
(let [sample (:contacts (parse (call :get (str "/api/contacts?page=" middle-page "&pageSize=20")
                                    nil (auth token-demo))))
      deep   (first sample)]
  (if (nil? deep)
    (println "  SKIP - deep search (no contact on the middle page)")
    (let [by-name  (parse (call :get (str "/api/contacts?q="
                                          (java.net.URLEncoder/encode (:name deep) "UTF-8"))
                                nil (auth token-demo)))
          by-phone (parse (call :get (str "/api/contacts?q="
                                          (java.net.URLEncoder/encode (subs (:phoneNumber deep) 7) "UTF-8"))
                                nil (auth token-demo)))]
      (check "deep search by name finds a non-page-1 contact" true
             (boolean (some #(= (:id deep) (:id %)) (:contacts by-name))))
      (check "deep search by phone finds a non-page-1 contact" true
             (boolean (some #(= (:id deep) (:id %)) (:contacts by-phone)))))))

;; pagination after filtering
(let [p (parse (call :get "/api/contacts?q=zephyr&page=1&pageSize=2" nil (auth token-a2)))]
  (check "pagination after filter -> 200" 200 (:status (call :get "/api/contacts?q=zephyr&page=1&pageSize=2" nil (auth token-a2))))
  (check "filtered pagination count <= pageSize" true (<= (count (:contacts p)) 2))
  (check "filtered total is small" true (<= (:total p) 5)))

(let [p (parse (call :get "/api/contacts?page=1&pageSize=500" nil (auth token-demo)))]
  (check "pageSize is capped at 100" 100 (:pageSize p)))

(let [r (call :get "/api/contacts?sort=recent&page=1&pageSize=5" nil (auth token-demo))
      p (parse r)]
  (check "sort=recent -> 200" 200 (:status r))
  (check "sort=recent returns rows with createdAt" true
         (every? :createdAt (:contacts p))))

;; 8. authorization between users --------------------------------------------
(def token-b
  (:token (parse (call :post "/api/auth/register"
                       (json-body {:email user-b-email :password pw})
                       {"Content-Type" "application/json"}))))

(def b-contact-id
  (:id (parse (call :post "/api/contacts"
                    (json-body {:name "Bob Only" :phoneNumber "+1 555 000 0001"})
                    (merge {"Content-Type" "application/json"} (auth token-b))))))

(check "B sees only own contact -> 200" 200
       (:status (call :get "/api/contacts" nil (auth token-b))))
(check "B total is 1" 1 (:total (parse (call :get "/api/contacts" nil (auth token-b)))))
(check "B cannot GET A's contact -> 404" 404
       (:status (call :get (str "/api/contacts/" contact-id) nil (auth token-b))))
(check "B cannot PUT A's contact -> 404" 404
       (:status (call :put (str "/api/contacts/" contact-id)
                      (json-body {:name "Hax" :phoneNumber "+1 555 111 2222"})
                      (merge {"Content-Type" "application/json"} (auth token-b)))))
(check "B cannot DELETE A's contact -> 404" 404
       (:status (call :delete (str "/api/contacts/" contact-id) nil (auth token-b))))
(check "A's contact still intact" 200
       (:status (call :get (str "/api/contacts/" contact-id) nil (auth token-a2))))

;; 9. CORS --------------------------------------------------------------------
(let [origin "http://localhost:8080"
      pre (call :options "/api/contacts" nil {"Origin" origin})
      get (call :get "/api/contacts" nil (merge {"Origin" origin} (auth token-a2)))
      bad (call :get "/api/contacts" nil {"Origin" "http://evil.example"})]
  (check "preflight -> 204" 204 (:status pre))
  (check "preflight CORS origin" origin (get-in pre [:headers "access-control-allow-origin"]))
  (check "authenticated GET CORS origin" origin (get-in get [:headers "access-control-allow-origin"]))
  (check "disallowed origin omitted" nil (get-in bad [:headers "access-control-allow-origin"])))

;; 10. logout invalidates the session -----------------------------------------
(check "logout -> 204" 204 (:status (call :post "/api/auth/logout" nil (auth token-a))))
(check "revoked token: me -> 401" 401 (:status (call :get "/api/auth/me" nil (auth token-a))))
(check "revoked token: contacts -> 401" 401 (:status (call :get "/api/contacts" nil (auth token-a))))

;; 11. cleanup ----------------------------------------------------------------
(let [token-a3 (:token (parse (call :post "/api/auth/login"
                                    (json-body {:email user-a-email :password pw})
                                    {"Content-Type" "application/json"})))]
  (check "A can log in again" 200
         (:status (call :post "/api/auth/login"
                        (json-body {:email user-a-email :password pw})
                        {"Content-Type" "application/json"})))
  (check "delete A's contact -> 204" 204
         (:status (call :delete (str "/api/contacts/" contact-id) nil (auth token-a3))))
  (check "deleted contact -> 404" 404
         (:status (call :get (str "/api/contacts/" contact-id) nil (auth token-a3))))
  (check "delete A's second contact -> 204" 204
         (:status (call :delete (str "/api/contacts/" (:id email-holder)) nil (auth token-a3)))))
(check "delete B's contact -> 204" 204
       (:status (call :delete (str "/api/contacts/" b-contact-id) nil (auth token-b))))
(call :post "/api/auth/logout" nil (auth token-b))

;; ---------------------------------------------------------------------------
(println (str/join "" (repeat 54 "-")))
(if (seq @failures)
  (do (println "FAILURES:" (pr-str @failures))
      (System/exit 1))
  (do (println "All end-to-end tests passed.")
      (System/exit 0)))
