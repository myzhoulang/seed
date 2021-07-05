/* eslint-disable react/prop-types */
import React from "react"
import { Route, Switch, withRouter, Redirect } from "react-router-dom"
import { asyncRouterMap } from "../router/router.config"

function findRoute(routers, pathname) {
  if (!Array.isArray(routers)) return null
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
  const children = routes
    ? routes
    : findRoute(asyncRouterMap, location.pathname)?.routes || []
  console.log("routes", routes)
  return (
    <Switch>
      {children?.map((route, i) => {
        console.log(route, "=")
        const { exact } = route
        const props = { exact }
        const Rs = []
        if (route.redirect) {
          console.log(route.redirect)
          Rs.push(
            <Redirect from={route.path} exact key={i} to={route.redirect} />
          )
        }
        Rs.push(
          <Route
            path={route.path}
            key={i}
            render={(props) => {
              return <route.component {...props} {...route} />
            }}
            {...props}
          />
        )
        return Rs
      })}
    </Switch>
  )
}
export default withRouter(RouteView)
