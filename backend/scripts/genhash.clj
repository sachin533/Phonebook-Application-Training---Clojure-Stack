(ns phonebook.genhash
  "One-off helper: verify buddy-hashers works and print a hash for the
  demo seed user. Run: clj -M scripts/genhash.clj [password]"
  (:require [buddy.hashers :as hashers]))

(let [pw   (or (first *command-line-args*) "Demo1234!")
      hash (hashers/derive pw)]
  (println "HASH:" hash)
  (println "check correct pw:" (hashers/check pw hash))
  (println "check wrong pw  :" (hashers/check "definitely-wrong" hash))
  (println "verify          :" (hashers/verify pw hash)))
