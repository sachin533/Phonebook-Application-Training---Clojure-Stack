(ns phonebook.core
  "Entry point: creates the database schema (idempotent) and starts the
  embedded Jetty server with the Reitit routes."
  (:gen-class)
  (:require [phonebook.config :as config]
            [phonebook.db :as db]
            [phonebook.routes :as routes]
            [ring.adapter.jetty :as jetty]))

(defn -main
  [& _args]
  (let [port (Integer/parseInt (:port config/config))]
    (println "Verifying database connection...")
    (db/create-schema!)
    (println "Database schema ready.")
    (jetty/run-jetty #'routes/app {:port port :join? false})
    (println (str "Phonebook API listening on http://localhost:" port))
    (println "  GET    /api/contacts")
    (println "  POST   /api/contacts")
    (println "  GET    /api/contacts/:id")
    (println "  PUT    /api/contacts/:id")
    (println "  DELETE /api/contacts/:id")))
