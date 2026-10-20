(ns phonebook.ui.icons
  "Inline SVG icons (24x24, stroke = currentColor) - zero external
  dependencies. Every icon takes an optional CSS class.")

(defn- svg
  "Shared SVG wrapper. Children are spliced in as static element siblings -
  a bare nested vector child or seq child is not valid reagent hiccup."
  [class & children]
  (into [:svg.icon {:class           class
                    :viewBox         "0 0 24 24"
                    :fill            "none"
                    :stroke          "currentColor"
                    :stroke-width    "2"
                    :stroke-linecap  "round"
                    :stroke-linejoin "round"
                    :aria-hidden     "true"}]
        children))

(defn search [& [class]]
  [svg class
   [:circle {:cx 11 :cy 11 :r 8}]
   [:line {:x1 21 :y1 21 :x2 16.65 :y2 16.65}]])

(defn clear [& [class]]
  [svg class
   [:line {:x1 18 :y1 6 :x2 6 :y2 18}]
   [:line {:x1 6 :y1 6 :x2 18 :y2 18}]])

(defn plus [& [class]]
  [svg class
   [:line {:x1 12 :y1 5 :x2 12 :y2 19}]
   [:line {:x1 5 :y1 12 :x2 19 :y2 12}]])

(defn phone [& [class]]
  [svg class
   [:path {:d "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]])

(defn mail [& [class]]
  [svg class
   [:rect {:x 2 :y 4 :width 20 :height 16 :rx 2}]
   [:path {:d "m22 7-10 5L2 7"}]])

(defn pin [& [class]]
  [svg class
   [:path {:d "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"}]
   [:circle {:cx 12 :cy 10 :r 3}]])

(defn edit [& [class]]
  [svg class
   [:path {:d "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}]
   [:path {:d "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}]])

(defn trash [& [class]]
  [svg class
   [:polyline {:points "3 6 5 6 21 6"}]
   [:path {:d "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]])

(defn logout [& [class]]
  [svg class
   [:path {:d "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]
   [:polyline {:points "16 17 21 12 16 7"}]
   [:line {:x1 21 :y1 12 :x2 9 :y2 12}]])

(defn chevron-left [& [class]]
  [svg class
   [:polyline {:points "15 18 9 12 15 6"}]])

(defn chevron-right [& [class]]
  [svg class
   [:polyline {:points "9 18 15 12 9 6"}]])

(defn book [& [class]]
  [svg class
   [:path {:d "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}]
   [:path {:d "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}]])

(defn grid [& [class]]
  [svg class
   [:rect {:x 3 :y 3 :width 7 :height 7 :rx 1}]
   [:rect {:x 14 :y 3 :width 7 :height 7 :rx 1}]
   [:rect {:x 14 :y 14 :width 7 :height 7 :rx 1}]
   [:rect {:x 3 :y 14 :width 7 :height 7 :rx 1}]])

(defn users [& [class]]
  [svg class
   [:path {:d "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}]
   [:circle {:cx 9 :cy 7 :r 4}]
   [:path {:d "M23 21v-2a4 4 0 0 0-3-3.87"}]
   [:path {:d "M16 3.13a4 4 0 0 1 0 7.75"}]])

(defn user [& [class]]
  [svg class
   [:path {:d "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}]
   [:circle {:cx 12 :cy 7 :r 4}]])

(defn alert [& [class]]
  [svg class
   [:circle {:cx 12 :cy 12 :r 10}]
   [:line {:x1 12 :y1 8 :x2 12 :y2 12}]
   [:line {:x1 12 :y1 16 :x2 12.01 :y2 16}]])

(defn check [& [class]]
  [svg class
   [:path {:d "M22 11.08V12a10 10 0 1 1-5.93-9.14"}]
   [:polyline {:points "22 4 12 14.01 9 11.01"}]])
