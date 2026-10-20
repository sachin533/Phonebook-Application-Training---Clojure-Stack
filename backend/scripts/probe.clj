(ns phonebook.probe
  "Diagnostic script. Run: clj -M scripts/probe.clj"
  (:require [muuntaja.core :as m]
            [phonebook.routes :as r]))

(defn- slurp-body [b]
  (cond
    (string? b) b
    (instance? java.io.InputStream b) (slurp b)
    (nil? b) ""
    :else (pr-str b)))

(defn- call [req]
  (let [resp (r/app req)]
    {:status (:status resp)
     :ctype  (get-in resp [:headers "Content-Type"])
     :body   (slurp-body (:body resp))}))

(println "GET  /health          :" (pr-str (call {:request-method :get :uri "/health" :headers {}})))
(println "GET  /api/contacts    :" (pr-str (call {:request-method :get :uri "/api/contacts" :headers {}})))
(println "GET  /api/contacts?q= :" (pr-str (call {:request-method :get :uri "/api/contacts"
                                                  :query-string "q=ada" :headers {}})))
(println "POST /api/contacts    :" (pr-str
                                     (call {:request-method :post
                                            :uri "/api/contacts"
                                            :headers {"content-type" "application/json"}
                                            :body (java.io.ByteArrayInputStream.
                                                    (.getBytes "{\"name\":\"\",\"phoneNumber\":\"nope\"}" "UTF-8"))})))
(println "POST /api/contacts ok :" (pr-str
                                     (call {:request-method :post
                                            :uri "/api/contacts"
                                            :headers {"content-type" "application/json"}
                                            :body (java.io.ByteArrayInputStream.
                                                    (.getBytes "{\"name\":\"Probe User\",\"phoneNumber\":\"+1 555 777 8888\"}" "UTF-8"))})))
(println "GET  /api/contacts/abc:" (pr-str (call {:request-method :get :uri "/api/contacts/abc" :headers {}})))
(println "GET  /api/contacts/1  :" (pr-str (call {:request-method :get :uri "/api/contacts/1" :headers {}})))
(println "GET  /nope            :" (pr-str (call {:request-method :get :uri "/nope" :headers {}})))

;; --- muuntaja 0.6 decode: formats keyed by MIME string ----------------------
(doseq [[label f] [["[m ct s]"   #(m/decode m/instance "application/json" "{\"a\":1}")]
                   ["[ct s]"     #(m/decode "application/json" "{\"a\":1}")]
                   ["[m ct enc]" #(m/decode m/instance "application/json"
                                             (m/encode m/instance "application/json" {:a 1}))]]]
  (println (format "%-14s :" label)
           (pr-str (try (f) (catch Exception e (str "ERR " (.getMessage e)))))))
(System/exit 0)
