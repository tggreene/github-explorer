(ns ghe.time
  (:require cljsjs.moment))

(defn human-time [time]
  (.fromNow (js/moment time)))
