(ns ghe.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [ajax.core :refer [GET POST]]
              [secretary.core :as secretary :include-macros true]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [ghe.github :as gh])
    (:import goog.History))

;; -------------------------
;; Logic?

(def state (atom {:doc {} :saved? false}))

(defn set-value! [id value]
  (swap! state assoc :saved? false)
  (swap! state assoc-in [:doc id] value))

(defn get-value [id]
  (get-in @state [:doc id]))

;; -------------------------
;; Components

(defn row [label & body]
  [:div.row
   [:div.col-md-2 {:key 1} [:span label]]
   [:div.col-md-3 {:key 2} body]])

(defn text-input [id label]
 [row label
  [:input
    {:key id
     :type "text"
     :class "form-control"
     :value (get-value id)
     :on-change #(set-value! id (-> % .-target .-value))}]])

(defn activity-history [events]
  (for [event events]
    [:div {:key (get event "id")}
     [:div
      [:h3 (get event "type")]
      [:p (get event "id")]]]))

;; -------------------------
;; Views

(defn home-page []
  [:div
    [:div.page-header [:h1 "Github Explorer"]]

    ; [text-input :first-name "First name"]
    ; [text-input :last-name "Second name"]

    [:div.row
     [:div.col-sm-6
      ; [:button {:type "submit"
      ;           :class "btn btn-default"
      ;           :onClick #(.log js/console (clj->js @state))}
      ; "Submit"]
      [:button {:type "submit"
                :class "btn btn-default"
                :onClick #(gh/get-repo
                          1 "facebook" "react" (fn [response]
                            (set-value! :events response)))}
       "History"]]]
    [:div (activity-history (get-value :events))]])


(defn about-page []
  [:div [:h2 "About ghe"]
   [:div [:a {:href "#/"} "go to the home page"]]])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (hook-browser-navigation!)
  (mount-root))
