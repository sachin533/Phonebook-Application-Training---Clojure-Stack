(ns phonebook.ui.core
  "Root component: navbar, banners, view dispatch, mounting and the
  :init-fn entry point."
  (:require [reagent.core :as r]
            [reagent.dom.client :as rdom]
            [phonebook.ui.icons :as icon]
            [phonebook.ui.pages.dashboard :as dashboard-page]
            [phonebook.ui.pages.detail :as detail-page]
            [phonebook.ui.pages.form :as form-page]
            [phonebook.ui.pages.list :as list-page]
            [phonebook.ui.pages.login :as login-page]
            [phonebook.ui.pages.register :as register-page]
            [phonebook.ui.state :as state]))

(defn- banners []
  (let [{:keys [notice error]} @state/app]
    (when (or notice error)
      [:div.banners
       (when notice
         [:div.banner.success {:role "status"}
          [icon/check]
          [:span notice]
          [:button.dismiss {:type "button" :aria-label "Dismiss"
                            :on-click state/dismiss-notices!} "×"]])
       (when error
         [:div.banner.error {:role "alert"}
          [icon/alert]
          [:span error]
          [:button.dismiss {:type "button" :aria-label "Dismiss"
                            :on-click state/dismiss-notices!} "×"]])])))

(defn- navbar []
  (let [{:keys [view auth]} @state/app
        user (:user auth)
        contacts-active? (contains? #{:contacts :detail :new :edit} view)]
    [:header.navbar
     [:div.nav-inner
      [:a.brand {:href "#/dashboard"}
       [:span.brand-mark [icon/book]]
       [:span.brand-name "Phonebook"]]
      [:nav.nav-links {:aria-label "Main"}
       [:a.nav-link {:href "#/dashboard" :class (when (= view :dashboard) "active")}
        [icon/grid] " Dashboard"]
       [:a.nav-link {:href "#/contacts" :class (when contacts-active? "active")}
        [icon/users] " Contacts"]]
      [:div.nav-user
       [:span.nav-email {:title (or (:email user) "")} (or (:email user) "")]
       [:button.btn.btn-ghost {:type "button" :on-click state/logout!
                               :title "Sign out"}
        [icon/logout] " Logout"]]]]))

(defn- page []
  (let [{:keys [view auth]} @state/app]
    (cond
      (:checking? auth)
      [:div.splash [:span.spinner] " Checking your session…"]

      (= :login view)    [login-page/view]
      (= :register view) [register-page/view]

      :else
      (case view
        :dashboard [dashboard-page/view]
        :contacts  [list-page/view]
        :new       [form-page/create-view]
        :edit      [form-page/edit-view]
        :detail    [detail-page/view]
        [dashboard-page/view]))))

(defn app-shell []
  (let [{:keys [auth]} @state/app
        authed? (some? (:user auth))]
    [:div.app {:class (when-not authed? "auth-mode")}
     (when authed? [navbar])
     [banners]
     [:main (page)]
     [:footer
      "Phonebook — Clojure (Ring · Reitit · next.jdbc · MySQL) + ClojureScript (Reagent · shadow-cljs)"]]))

(defonce ^:private root (atom nil))

(defn ^:dev/after-load mount!
  "Render (or re-render) the app. Called on load and on hot reload."
  []
  (when-let [node (.getElementById js/document "app")]
    (when-not @root
      (reset! root (rdom/create-root node)))
    (rdom/render @root (r/as-element [app-shell]))))

(defn init
  "Entry point: bind routing/session handling, then render."
  []
  (state/init!)
  (mount!))
