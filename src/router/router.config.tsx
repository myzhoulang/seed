/* eslint-disable react/display-name */
import React from "react"
import { Result, Button } from "antd"
import { SmileOutlined } from "@ant-design/icons"
import Welcome from "../pages/Welcome"
import Dashboard from "../pages/Dashboard"
import TableList from "../pages/list/TableList"
import ListIndex from "../pages/list"
import BasicLayout from "../layouts/BasicLayout"
import BlankLayout from "../layouts/BlankLayout"
import UserLayout from "../layouts/UserLayout"
import Login from "../pages/user/Login"

// {
//   path: "/user",
//   component: UserLayout,
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
    component: BasicLayout,
    expect: true,
    routes: [
      {
        path: "/welcome",
        name: "欢迎",
        icon: <SmileOutlined />,
        component: Welcome
      },
      {
        path: "/dashboard",
        name: "dashboard",
        icon: <SmileOutlined />,
        component: Dashboard
      },
      {
        path: "/list",
        name: "列表",
        icon: <SmileOutlined />,
        component: ListIndex,
        redirect: "/list/table",
        routes: [
          {
            path: "/list/table",
            name: "表格列表",
            component: TableList
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

export { asyncRouterMap }
