/* eslint-disable react/display-name */
import React from "react"
import { Result, Button } from "antd"
import { SmileOutlined } from "@ant-design/icons"
import Welcome from "../pages/Welcome"
import Dashboard from "../pages/Dashboard"
import TableList from "../pages/list/TableList"
import Detail from "../pages/list/TableList/Detail"
import ListIndex from "../pages/list"
import BasicLayout from "../layouts/BasicLayout"
import SearchIndex from "../pages/list/search"
import Article from "../pages/list/search/Article"
import Test from "../pages/Test"

import BlankLayout from "../layouts/BlankLayout"
import UserLayout from "../layouts/UserLayout"
import Login from "../pages/user/Login"
import RouteView from "../layouts/RouteView"

// {
//   path: "/user",
//   component: "UserLayout",
//   exact: true,
//   routes: [
//     {
//       path: "/user/login",
//       component: Login
//     }
//   ]
// },

const asyncRouterMap = [
  {
    path: "/",
    component: RouteView,
    redirect: "/dashboard/welcome",
    flatMenu: true,
    routes: [
      {
        path: "/account",
        component: UserLayout,
        redirect: "/accout/login",
        routes: [
          {
            path: "/account/login",
            component: Login,
            exact: true,
            name: "登录"
          }
        ]
      },
      {
        path: "/",
        component: BasicLayout,
        redirect: "/dashboard/welcome",
        name: "首页",
        routes: [
          {
            path: "/test",
            name: "Test",
            component: Test
          },
          {
            path: "/dashboard",
            component: RouteView,
            name: "Dashboard",
            routes: [
              {
                path: "/dashboard/welcome",
                name: "欢迎",
                icon: <SmileOutlined />,
                component: Welcome
              },
              {
                path: "/dashboard/monitor",
                name: "monitor",
                icon: <SmileOutlined />,
                component: Dashboard
              }
            ]
          },
          {
            path: "/list",
            name: "列表",
            icon: <SmileOutlined />,
            component: ListIndex,
            redirect: "/list/table/",
            routes: [
              {
                path: "/list/table/",
                name: "表格列表",
                exact: true,
                component: TableList
              },
              {
                path: "/list/table/:id",
                name: "详情",
                exact: true,
                hideInMenu: true,
                component: Detail
              },
              {
                path: "/list/search",
                name: "搜索列表",
                component: SearchIndex,
                routes: [
                  {
                    path: "/list/search/article",
                    name: "搜索文章列表",
                    component: Article
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
