(ns ghe.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [ajax.core :refer [GET POST]]
              [secretary.core :as secretary :include-macros true]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [ghe.time :refer [human-time]]
              [ghe.graph :refer [create-graph]]
              [ghe.github :as gh])
    (:import goog.History))

;; -------------------------
;; Constants

(def sample-data
  {:data
    {:columns [["commits" 10 20 23 20 19 40 4  1  0  0  2  3]
               ["watches" 0  0  0  3  4  20 40 44 56 21 3  0]]}
   :axis {:x {:type "category"
              :categories ["Jan" "Feb" "Mar" "Apr"
                           "May" "Jun" "Jul" "Aug"
                           "Sep" "Oct" "Nov" "Dec"]}}})
;; -------------------------
;; Logic

(defonce state (atom {:doc {} :saved? false}))

(defonce timer (atom (js/Date.)))

(defonce time-updater (js/setInterval
                       #(reset! timer (js/Date.)) 1000))

(defn set-value! [id value]
  (swap! state assoc :saved? false)
  (swap! state assoc-in [:doc id] value))

(defn get-value [id]
  (get-in @state [:doc id]))

;; -------------------------
;; Components

(defn activity-history [events]
  (for [event events]
    [:div {:key (get event "id")}
     [:div
      [:h3 (get event "type")]
      [:p  (human-time (get event "created_at"))]]]))

(defn plot-activity-history [events]
  (create-graph ".graph" {:data {:columns [["a" 1 2 3] ["b" 2 3 5]]}}))

;; -------------------------
;; Views

; (def load (with-meta identity {:component-did-mount #(println "reach")} [:div ]))
;{:component-did-mount #(create-graph ".graph" sample-data)})

(defn search-repo []
  (gh/get-repo 1 (get-value :repo)
   (fn [response]
     (set-value! :events response))))

(def show-graph
  ^{:component-did-mount #(create-graph ".graph" sample-data)}
  (fn [] [:div.graph]))

(defn home-page []
  [:div
   [:div.page-header [:h1 "Github Explorer"]]
   [:div.row
    [:div.col-md-6
     [:input {:key :repo
              :type "text"
              :class "form-control"
              :value (get-value :repo)
              :placeholder "Repo..."
              :on-key-down #(if (= 13 (.-keyCode %)) (search-repo))
              :on-change (fn [event]
                          (set-value! :repo (-> event .-target .-value)))}]]]
   [show-graph]
   [:div (activity-history (take 5 (get-value :events)))]])

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
