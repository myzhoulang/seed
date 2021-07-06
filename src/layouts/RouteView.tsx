import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

type RouteViewProps = {
  routes: Array<any>
}

function RouteView(props: RouteViewProps) {
  const { routes } = props
  return (
    <Switch>
      {routes?.map((route, i) => {
        const { exact } = route
        const props = { exact }
        const Rs = []
        if (route.redirect) {
          Rs.push(
            <Redirect key={i} from={route.path} exact to={route.redirect} />
          )
        }
        const { component, ...other } = route
        Rs.push(
          <Route
            {...other}
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
export default RouteView
