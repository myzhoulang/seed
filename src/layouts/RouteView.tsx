/* eslint-disable react/prop-types */
import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import { asyncRouterMap } from "../router/router.config"

function findRoute(routers, pathname) {
  for (const router of routers) {
    if (router.path === pathname) {
      return router
    }
    if (Array.isArray(router.routes)) {
      return findRoute(router.routes, pathname)
    }
  }
}
function RouteView(props) {
  const { routes, location } = props
  console.log("pros", props)

  const children = routes
    ? routes
    : findRoute(asyncRouterMap, location.pathname)?.routes || []
  return (
    <Switch>
      {children?.map((route, i) => {
        return (
          <Route
            path={route.path}
            key={i}
            render={(props) => {
              return <route.component {...props} {...route} />
            }}
          />
        )
      })}
    </Switch>
  )
}
export default withRouter(RouteView)
