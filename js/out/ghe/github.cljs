(ns ghe.github
  (:require [ajax.core :refer [GET POST PUT]]))

(def api "https://api.github.com")

(defn get-api [url & params])

(defn get-repo [page owner repo handler]
  (let [url (str api "/repos/" owner "/" repo "/events")]
    (GET url {:params {:page page :per_page 100}
              :handler handler
              :response-format :json})))
