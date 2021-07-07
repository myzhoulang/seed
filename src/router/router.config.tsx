/* eslint-disable react/display-name */
import React from "react"
import { Result, Button } from "antd"
import type { RouteComponentProps } from "react-router-dom"
import { SmileOutlined } from "@ant-design/icons"
import SecurityLayout from "@/layouts/SecurityLayout"
import BasicLayout from "@/layouts/BasicLayout"
import UserLayout from "@/layouts/UserLayout"
import RouteView from "@/layouts/RouteView"

export interface IRouteConfigProps {
  path: string
  name?: string
  icon?: React.Component | JSX.Element
  redirect?: string
  from?: string
  exact?: boolean
  flatMenu?: boolean
  routes?: Array<IRouteConfigProps>
  authority?: string | Array<string>
  component:
    | string
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
}

const asyncRouterMap = [
  {
    path: "/",
    component: SecurityLayout,
    flatMenu: true,
    routes: [
      {
        path: "/user",
        component: UserLayout,
        name: "user",
        redirect: "/user/login",
        exact: true,
        routes: [
          {
            path: "/user/login",
            component: "pages/user/Login",
            name: "登录",
            authority: ["1"]
          }
        ]
      },
      {
        path: "/",
        component: BasicLayout,
        exact: true,
        redirect: "/dashboard/welcome",
        name: "首页",
        routes: [
          {
            path: "/noAuth",
            name: "noAuth",
            component: "pages/Test",
            authority: ["4"]
          },
          {
            path: "/dashboard",
            component: RouteView,
            name: "Dashboard",
            redirect: "/dashboard/welcome",
            routes: [
              {
                path: "/dashboard/welcome",
                name: "欢迎",
                icon: <SmileOutlined />,
                component: "pages/Welcome"
              },
              {
                path: "/dashboard/monitor",
                name: "monitor",
                icon: <SmileOutlined />,
                component: "pages/Dashboard"
              }
            ]
          },
          {
            path: "/list",
            name: "列表",
            icon: <SmileOutlined />,
            component: "pages/list",
            redirect: "/list/table/",
            routes: [
              {
                path: "/list/table/",
                name: "表格列表",
                exact: true,
                component: "pages/list/TableList"
              },
              {
                path: "/list/table/:id",
                name: "详情",
                exact: true,
                hideInMenu: true,
                component: "pages/list/TableList/Detail"
              },
              {
                path: "/list/search",
                name: "搜索列表",
                component: "pages/list/search",
                routes: [
                  {
                    path: "/list/search/article",
                    name: "搜索文章列表",
                    component: "pages/list/search/Article"
                  }
                ]
              }
            ]
          },
          {
            path: "*",
            component: () => (
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
              />
            )
          }
        ]
      }
    ]
  }
]

export { asyncRouterMap }
