(ns ghe.graph
  (:require cljsjs.d3 cljsjs.c3))

  (defn dangerous
    ([comp content]
       (dangerous comp nil content))
    ([comp props content]
       [comp (assoc props :dangerouslySetInnerHTML {:__html content})]))

(defn get-graph [data]
  (dangerous :div
    (-> (merge data {:size {:width 600 :height 320}})
        (clj->js)
        (js/c3.generate)
        (.-element)
        (.-outerHTML))))

(defn create-graph [target data]
  (-> (merge data {:bindto target})
      (clj->js)
      (js/c3.generate)))
