(ns phonebook.ui.pages.detail
  "Contact detail: identity header, field grid and actions."
  (:require [clojure.string :as str]
            [phonebook.ui.icons :as icon]
            [phonebook.ui.state :as state]))

(defn- initials [name]
  (let [parts (remove str/blank? (str/split (str/trim (or name "")) #"\s"))]
    (str (some-> (first parts) (subs 0 1) str/upper-case)
         (some-> (second parts) (subs 0 1) str/upper-case))))

(defn- tel-href [phone]
  (str "tel:" (str/replace (or phone "") #"[\s()\-.]" "")))

(defn- field-row [icon-el label value]
  [:div.detail-row
   [:div.detail-label [icon-el] label]
   [:div.detail-value value]])

(defn- shown [v]
  (if (str/blank? (str v)) [:span.muted "—"] (str v)))

(defn view []
  (let [{:keys [current loading?]} @state/app]
    [:div.page
     [:a.back-link {:href "#/contacts"} [icon/chevron-left] " All contacts"]

     (cond
       loading?
       [:div.card.loading-state [:span.spinner] " Loading contact…"]

       (nil? current)
       [:div.card.empty-state
        [:div.empty-icon [icon/alert]]
        [:h3 "Contact not found"]
        [:p "It may have been deleted."]
        [:a.btn.btn-outline {:href "#/contacts"} "Back to contacts"]]

       :else
       [:div.card.detail-card
        [:div.detail-head
         [:div.avatar (initials (:name current))]
         [:div.detail-title
          [:h1 (:name current)]
          [:p.sub (str "Contact #" (:id current))]]
         [:div.detail-actions
          [:a.btn.btn-outline {:href (str "#/contacts/" (:id current) "/edit")}
           [icon/edit] " Edit"]
          [:button.btn.btn-danger {:type "button"
                                   :on-click #(state/delete! (:id current))}
           [icon/trash] " Delete"]]]

        [:div.detail-grid
         [field-row icon/phone "Phone"
          (if (str/blank? (or (:phoneNumber current) ""))
            [:span.muted "—"]
            [:a {:href (tel-href (:phoneNumber current))} (:phoneNumber current)])]
         [field-row icon/mail "Email"
          (if (str/blank? (or (:email current) ""))
            [:span.muted "—"]
            [:a {:href (str "mailto:" (:email current))} (:email current)])]
         [field-row icon/pin "Address" (shown (:address current))]
         [field-row icon/user "Created" (shown (:createdAt current))]]])]))
