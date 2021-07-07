import React from "react"
import { inject, observer } from "mobx-react"
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import { asyncRouterMap } from "./router/router.config"
import RouteView from "./layouts/RouteView"

function App(): JSX.Element {
  return (
    <Router>
      <RouteView routes={asyncRouterMap} />
    </Router>
  )
}

export default inject("store")(observer(App))
