(ns phonebook.ui.pages.list
  "Contact list: Google-style debounced search (name/phone/email),
  responsive table (cards on mobile, via CSS) and numbered pagination
  backed by SQL LIMIT/OFFSET - only the current page is ever loaded."
  (:require [clojure.string :as str]
            [phonebook.ui.icons :as icon]
            [phonebook.ui.state :as state]))

(defn- tel-href [phone]
  (str "tel:" (str/replace (or phone "") #"[\s()\-.]" "")))

;; ---------------------------------------------------------------------------
;; Rows

(defn- contact-row [{:keys [id name phoneNumber email address]}]
  [:tr
   [:td {:data-label "Name"}
    [:a.name-link {:href (str "#/contacts/" id)} (or name "—")]]
   [:td {:data-label "Phone"}
    (if (str/blank? (or phoneNumber ""))
      [:span.muted "—"]
      [:a {:href (tel-href phoneNumber)} phoneNumber])]
   [:td {:data-label "Email"}
    (if (str/blank? (or email ""))
      [:span.muted "—"]
      [:a {:href (str "mailto:" email)} email])]
   [:td {:data-label "Address"}
    (if (str/blank? (or address ""))
      [:span.muted "—"]
      address)]
   [:td.cell-actions {:data-label "Actions"}
    [:a.row-action {:href (str "#/contacts/" id)} "View"]
    [:a.row-action {:href (str "#/contacts/" id "/edit")} "Edit"]
    [:button.row-action.danger {:type "button"
                                :on-click #(state/delete! id)} "Delete"]]])

;; ---------------------------------------------------------------------------
;; Search box (Google style: big pill, icon, spinner, clear button)

(defn- search-box [{:keys [search searching?]}]
  [:div.google-search {:role "search"}
   [icon/search "search-icon"]
   [:input.search-input {:type        "search"
                         :placeholder "Search by name, phone or email…"
                         :aria-label  "Search contacts"
                         :value       search
                         :on-change   #(state/search! (.. % -target -value))}]
   (when searching?
     [:span.search-spinner {:aria-hidden "true"}])
   (when (and (not (str/blank? search)) (not searching?))
     [:button.search-clear {:type        "button"
                            :aria-label  "Clear search"
                            :title       "Clear search"
                            :on-click    state/clear-search!}
      [icon/clear]])])

;; ---------------------------------------------------------------------------
;; Result summary: "Showing 1-20 of 565 contacts"

(defn- result-meta [{:keys [total page page-size shown search]}]
  (let [start (inc (* page-size (dec page)))
        end   (+ (* page-size (dec page)) shown)
        range (str "Showing " start "–" end)]
    (cond
      (str/blank? search)
      (if (zero? total)
        [:p.result-meta "No contacts yet"]
        [:p.result-meta (str range " of " total " contacts")])

      (zero? total)
      [:p.result-meta (str "No results for “" search "”")]

      :else
      [:p.result-meta
       (str range " of " total " results for “" search "”")])))

;; ---------------------------------------------------------------------------
;; Pagination: Previous | 1 … 4 5 6 … 29 | Next

(defn- page-window
  "Pages around the current one, e.g. (1 nil 4 5 6 nil 29); nil = gap."
  [current total-pages]
  (when (> total-pages 1)
    (let [candidates (->> [(dec current) current (inc current) 1 total-pages]
                          (filter #(and (>= % 1) (<= % total-pages)))
                          distinct
                          sort)]
      (loop [[p & more] candidates
             prev nil
             acc []]
        (cond
          (nil? p) acc
          (and prev (> (- p prev) 1)) (recur more p (conj acc nil p))
          :else (recur more p (conj acc p)))))))

(defn- pagination [{:keys [page total page-size]}]
  (let [total-pages (max 1 (js/Math.ceil (/ (or total 0) (or page-size 20))))]
    (when (> total-pages 1)
      [:nav.pagination {:aria-label "Pagination"}
       [:button.page-btn {:type     "button"
                          :disabled (<= page 1)
                          :on-click #(state/goto-page! (dec page))}
        [icon/chevron-left] " Previous"]
       (for [[i p] (map-indexed vector (page-window page total-pages))]
         (if (nil? p)
           [:span.page-gap {:key (str "gap-" i)} "…"]
           [:button.page-btn
            {:key        (str "page-" p)
             :class      (when (= p page) "active")
             :aria-label (str "Page " p)
             :aria-current (when (= p page) "page")
             :on-click   #(state/goto-page! p)}
            (str p)]))
       [:button.page-btn {:type     "button"
                          :disabled (>= page total-pages)
                          :on-click #(state/goto-page! (inc page))}
        " Next " [icon/chevron-right]]])))

;; ---------------------------------------------------------------------------
;; Page

(defn view []
  (let [{:keys [contacts total page page-size search loading? error]} @state/app
        filtered? (not (str/blank? search))]
    [:div.page
     [:div.page-header
      [:div
       [:h1 "Contacts"]
       [:p.sub (if filtered?
                 "Search results"
                 "Everyone in your phonebook")]]
      [:div.header-actions
       [:a.btn.btn-primary {:href "#/contacts/new"} [icon/plus] " Add contact"]]]

     [search-box {:search search :searching? (:searching? @state/app)}]

     [:div.list-meta
      [result-meta {:total total :page page :page-size page-size
                    :shown (count contacts) :search search}]
      (when filtered?
        [:button.link {:type "button" :on-click state/clear-search!}
         "Clear search"])]

     (cond
       loading?
       [:div.card.loading-state [:span.spinner] " Loading contacts…"]

       error
       [:div.card.empty-state
        [:div.empty-icon [icon/alert]]
        [:h3 "Could not load contacts"]
        [:p error]
        [:button.btn.btn-outline {:type "button" :on-click state/retry-load!}
         "Try again"]]

       (and (zero? total) filtered?)
       [:div.card.empty-state
        [:div.empty-icon [icon/search]]
        [:h3 "No results"]
        [:p (str "Nothing matches “" search "”. Check the spelling or try a part of the name, phone number or email.")]
        [:button.btn.btn-outline {:type "button" :on-click state/clear-search!}
         "Clear search"]]

       (zero? total)
       [:div.card.empty-state
        [:div.empty-icon [icon/users]]
        [:h3 "No contacts yet"]
        [:p "Add your first contact - it takes a few seconds."]
        [:a.btn.btn-primary {:href "#/contacts/new"} [icon/plus] " Add contact"]]

       :else
       [:<>
        [:div.card.table-card
         [:table.contacts-table
          [:thead
           [:tr
            [:th "Name"] [:th "Phone"] [:th "Email"] [:th "Address"]
            [:th.cell-actions "Actions"]]]
          [:tbody
           (for [{:keys [id] :as c} contacts]
             ^{:key id} [contact-row c])]]]
        [pagination {:page page :total total :page-size page-size}]])]))
