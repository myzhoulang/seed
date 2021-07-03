import React from "react"
import { inject, observer } from "mobx-react"
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import { asyncRouterMap } from "./router/router.config"
import RouteView from "./layouts/RouteView"

function App(props: any): JSX.Element {
  const appState = props.store
  appState.setUser({ name: "111" })
  return (
    <Router>
      <RouteView routes={asyncRouterMap} />
    </Router>
  )
}

export default inject("store")(observer(App))
