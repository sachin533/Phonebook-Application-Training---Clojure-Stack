(ns phonebook.ui.pages.form
  "Add/edit contact form (create-view for #/contacts/new, edit-view for
  #/contacts/:id/edit)."
  (:require [phonebook.ui.icons :as icon]
            [phonebook.ui.state :as state]))

(defn- field
  "One labelled input (or textarea) with validation error display."
  [{:keys [label key type placeholder required? textarea? errors]}]
  (let [value (get-in @state/app [:form key] "")
        err   (get errors key)]
    [:div.field {:class (when err "has-error")}
     [:label {:for (name key)}
      label (when required? [:span.req " *"])]
     (if textarea?
       [:textarea {:id          (name key)
                   :value       value
                   :placeholder placeholder
                   :rows        3
                   :on-change   #(state/set-form-field! key (.. % -target -value))}]
       [:input   {:id          (name key)
                  :type        type
                  :value       value
                  :placeholder placeholder
                  :on-change   #(state/set-form-field! key (.. % -target -value))}])
     (when err
       [:div.error-message err])]))

(defn contact-form []
  (let [{:keys [form-errors saving?]} @state/app]
    [:form.contact-form
     {:on-submit (fn [e]
                   (.preventDefault e)
                   (state/save!))}
     [field {:label "Name" :key :name :type "text"
             :placeholder "e.g. Jane Doe" :required? true :errors form-errors}]
     [field {:label "Phone number" :key :phoneNumber :type "tel"
             :placeholder "+1 555 123 4567" :required? true :errors form-errors}]
     [field {:label "Email" :key :email :type "email"
             :placeholder "jane@example.com (optional)" :errors form-errors}]
     [field {:label "Address" :key :address :type "text"
             :placeholder "Street, city (optional)"
             :textarea? true :errors form-errors}]
     [:div.form-actions
      [:button.btn.btn-primary {:type "submit" :disabled saving?}
       (if saving?
         [:<> [:span.spinner] " Saving…"]
         "Save contact")]
      [:span.form-hint (str "Fields marked with * are required")]]]))

(defn create-view []
  (let [{:keys [loading?]} @state/app]
    [:div.page.page-narrow
     [:div.page-header
      [:div
       [:h1 "Add contact"]
       [:p.sub "A new entry in your phonebook"]]
      [:a.btn.btn-ghost {:href "#/contacts"} "Cancel"]]
     [:div.card
      (if loading?
        [:div.loading-state [:span.spinner] " Loading…"]
        [contact-form])]]))

(defn edit-view []
  (let [{:keys [loading? current route-id]} @state/app]
    [:div.page.page-narrow
     [:div.page-header
      [:div
       [:h1 (if current (str "Edit " (:name current)) "Edit contact")]
       [:p.sub (str "Contact #" route-id)]]
      [:a.btn.btn-ghost {:href (str "#/contacts/" route-id)} "Cancel"]]
     [:div.card
      (if loading?
        [:div.loading-state [:span.spinner] " Loading contact…"]
        [contact-form])]]))
