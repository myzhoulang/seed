import React, { Suspense } from "react"
import type { ProviderProps } from "mobx-react"
import { inject, observer } from "mobx-react"
import { Route, Switch, Redirect } from "react-router-dom"
import type { RouteComponentProps } from "react-router-dom"
import { Spin } from "antd"
import Authorized from "../components/Authorized/Authorized"
import type { IRouteConfigProps } from "../router/router.config"

export interface IRouteComponentProps extends RouteComponentProps {
  routes?: Array<IRouteConfigProps>
  // FIXME: 类型怎么定义
  store?: ProviderProps
}
function render(route, props) {
  const { component: Component } = route
  if (typeof Component === "string") {
    console.log("Component", Component)
    // FIXME: 扩展
    const PromiseComponent = React.lazy(
      () => import(`@/${Component}`)
      // .then((component) => {
      //   return new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       resolve(component)
      //     }, 1000000)
      //   })
      // })
    )
    return (
      <Suspense fallback={<Spin tip="Loading..." />}>
        <PromiseComponent {...props} {...route} />
      </Suspense>
    )
  }
  console.log("path", route.path)
  return <Component {...props} {...route} />
}

function RouteView(props: Pick<IRouteComponentProps, "routes">) {
  const { routes } = props
  return (
    <Switch>
      {routes?.map((route, i) => {
        console.log("route", route)
        const { path } = route
        const child = []
        if (route.redirect) {
          child.push(<Redirect exact from={path} key={i} to={route.redirect} />)
        }
        child.push(
          <Route
            path={path}
            key={i + 1}
            render={(props) => {
              return (
                <Authorized
                  currentAuthority={["1", "2", "3"]}
                  authority={route.authority}
                >
                  {render(route, props)}
                </Authorized>
              )
            }}
          />
        )

        return child
      })}
    </Switch>
  )
}
export default RouteView
