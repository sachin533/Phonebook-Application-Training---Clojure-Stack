(ns phonebook.ui.pages.dashboard
  "Dashboard: greeting, stat cards and the most recently added contacts."
  (:require [clojure.string :as str]
            [phonebook.ui.icons :as icon]
            [phonebook.ui.state :as state]))

(defn- stat-card [{:keys [label value hint href icon]}]
  (if href
    [:a.card.stat-card {:href href}
     [:div.stat-icon icon]
     [:div.stat-body
      [:div.stat-value value]
      [:div.stat-label label]
      [:div.stat-hint hint]]]
    [:div.card.stat-card
     [:div.stat-icon icon]
     [:div.stat-body
      [:div.stat-value value]
      [:div.stat-label label]
      [:div.stat-hint hint]]]))

(defn- initials [name]
  (let [parts (remove str/blank? (str/split (str/trim (or name "")) #"\s"))]
    (str (some-> (first parts) (subs 0 1) str/upper-case)
         (some-> (second parts) (subs 0 1) str/upper-case))))

(defn- recent-item [{:keys [id name phoneNumber email]}]
  [:li.recent-item {:key id}
   [:div.avatar.avatar-sm (initials name)]
   [:div.recent-main
    [:a.recent-name {:href (str "#/contacts/" id)} (or name "Unnamed")]
    [:span.recent-detail (or email phoneNumber "—")]]
   [:a.btn.btn-ghost.btn-sm {:href (str "#/contacts/" id)} "View"]])

(defn view []
  (let [{:keys [recent total loading?]} @state/app
        user (get-in @state/app [:auth :user])]
    [:div.page
     [:div.page-header
      [:div
       [:h1 "Dashboard"]
       [:p.sub (str "Signed in as " (or (:email user) ""))]]
      [:div.header-actions
       [:a.btn.btn-outline {:href "#/contacts"} [icon/users] " Browse contacts"]
       [:a.btn.btn-primary {:href "#/contacts/new"} [icon/plus] " Add contact"]]]

     (if loading?
       [:div.card.loading-state [:span.spinner] " Loading…"]
       [:<>
        [:div.stat-grid
         [stat-card {:label "Total contacts" :value total
                     :hint "Stored in your phonebook" :href "#/contacts"
                     :icon [icon/users]}]
         [stat-card {:label "Recently added" :value (count recent)
                     :hint "Newest entries" :href "#/contacts"
                     :icon [icon/check]}]
         [stat-card {:label "Quick search" :value "Find"
                     :hint "Search name, phone or email" :href "#/contacts"
                     :icon [icon/search]}]]

        [:div.card
         [:div.card-header
          [:h2 "Recently added"]
          [:a.link {:href "#/contacts"} "View all →"]]
         (if (seq recent)
           [:ul.recent-list (for [c recent] ^{:key (:id c)} [recent-item c])]
           [:div.empty-state.compact
            [:h3 "No contacts yet"]
            [:p "Add your first contact to get started."]
            [:a.btn.btn-primary {:href "#/contacts/new"} [icon/plus] " Add contact"]])]])]))
