(ns phonebook.ui.pages.login
  "Login screen: centered card with email + password."
  (:require [phonebook.ui.icons :as icon]
            [phonebook.ui.state :as state]))

(defn- field
  "One labelled input of the auth form, with validation error display."
  [{:keys [label key type placeholder autocomplete errors]}]
  (let [value (get-in @state/app [:auth-form key] "")
        err   (get errors key)]
    [:div.field {:class (when err "has-error")}
     [:label {:for (name key)} label]
     [:input {:id         (name key)
              :type       type
              :value      value
              :placeholder placeholder
              :autoComplete autocomplete
              :on-change  #(state/set-auth-form! key (.. % -target -value))}]
     (when err [:div.error-message err])]))

(defn view []
  (let [{:keys [auth auth-form auth-errors]} @state/app
        busy? (:busy? auth)]
    [:div.auth-screen
     [:div.auth-card
      [:div.brand-mark [icon/book]]
      [:h1 "Sign in to Phonebook"]
      [:p.sub "Your contacts, safely organized"]
      [:form {:on-submit (fn [e]
                           (.preventDefault e)
                           (state/login!))}
       [field {:label "Email" :key :email :type "email"
               :placeholder "you@example.com" :autocomplete "email"
               :errors auth-errors}]
       [field {:label "Password" :key :password :type "password"
               :placeholder "Your password" :autocomplete "current-password"
               :errors auth-errors}]
       [:button.btn.btn-primary.btn-block {:type "submit" :disabled busy?}
        (if busy?
          [:<> [:span.spinner] " Signing in…"]
          "Sign in")]]
      [:p.auth-switch "New to Phonebook? "
       [:a {:href "#/register"} "Create an account"]]
      [:p.auth-hint "Demo account: demo@phonebook.local / Demo1234!"]]]))
