(ns phonebook.seed
  "Repeatable seed script (idempotent - safe to run any number of times):

    - creates the demo account (demo@phonebook.local / Demo1234!)
    - adopts any contacts created before multi-user support
    - generates N realistic, purely fictional contacts (default 550)
      with unique phone numbers and emails, inserted with INSERT IGNORE
      so reruns never duplicate and never delete existing data

      clj -M:seed [count]"
  (:require [clojure.string :as str]
            [phonebook.auth :as auth]
            [phonebook.db :as db]))

(def demo-email "demo@phonebook.local")
(def demo-password "Demo1234!") ; training app - documented in README

(def first-names
  ["James" "Mary" "Robert" "Patricia" "John" "Jennifer" "Michael" "Linda"
   "David" "Elizabeth" "William" "Barbara" "Richard" "Susan" "Joseph" "Jessica"
   "Thomas" "Sarah" "Christopher" "Karen" "Charles" "Lisa" "Daniel" "Nancy"
   "Matthew" "Betty" "Anthony" "Margaret" "Mark" "Sandra"])

(def last-names
  ["Smith" "Johnson" "Williams" "Brown" "Jones" "Garcia" "Miller" "Davis"
   "Rodriguez" "Martinez" "Hernandez" "Lopez" "Gonzalez" "Wilson" "Anderson"
   "Thomas" "Taylor" "Moore" "Jackson" "Martin" "Lee" "Perez" "Thompson"
   "White" "Harris"])

(def streets
  ["Elm Street" "Oak Avenue" "Maple Drive" "Cedar Lane" "Pine Road"
   "Willow Court" "Birch Way" "Juniper Circle" "Chestnut Boulevard"
   "Aspen Terrace" "Magnolia Place" "Hickory Path" "Poplar Grove"
   "Sycamore Row" "Laurel Hill" "Dogwood Trail" "Cypress Point"
   "Sequoia Vista" "Redwood Bend" "Spruce Hollow"])

(def cities
  ["Springfield" "Riverton" "Mapleton" "Brookfield" "Fairview"
   "Georgetown" "Salem" "Ashford" "Clearwater" "Middleton"
   "Newport" "Kingston" "Milford" "Auburn" "Clayton"
   "Oxford" "Bristol" "Cedar Falls" "Lakeview" "Ashland"])

(defn- contact-at
  "Deterministic fictional contact for index i: name from cross product
  of the name lists, phone/email derived from i (always unique)."
  [i]
  (let [n        (inc i)
        first-n  (nth first-names (mod n (count first-names)))
        last-n   (nth last-names (mod (quot n (count first-names)) (count last-names)))]
    {:name        (str first-n " " last-n)
     ;; +1 555 xxx is the reserved fictional range
     :phone_number (str "+1 555 " (format "%03d" (mod n 1000)) " " (format "%04d" n))
     :email       (str (str/lower-case first-n) "." (str/lower-case last-n)
                       n "@example.com")
     :address     (str (nth streets (mod (* n 7) (count streets))) ", "
                       (nth cities (mod (* n 11) (count cities))))}))

(defn -main [& args]
  (let [target (or (some-> (first args) Integer/parseInt) 550)]
    (println (str "Seeding phonebook_db (target: " target " demo contacts) ..."))
    (let [demo (or (db/find-user-by-email! demo-email)
                   (db/insert-user! demo-email (auth/hash-password demo-password)))]
      (println (str "  demo user: " (:email demo) " (password: " demo-password ")"))
      (let [adopted (db/backfill-contact-owners! (:id demo))]
        (when (pos? adopted)
          (println (str "  adopted " adopted " pre-existing contact(s)"))))
      (let [before  (db/count-contacts! (:id demo))
            ;; deterministic candidates: INSERT IGNORE keeps reruns duplicate-free
            inserted (db/insert-contacts-batch! (:id demo) (mapv contact-at (range target)))
            after   (db/count-contacts! (:id demo))]
        (println (str "  inserted " inserted " new contact(s), "
                      (- target inserted) " already present"))
        (println (str "  contacts owned by demo user: " before " -> " after)))
      (println "Done.")))
  (System/exit 0))
