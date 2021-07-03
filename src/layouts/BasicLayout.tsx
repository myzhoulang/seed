/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { Switch, Link, withRouter, Route } from "react-router-dom"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import type { BasicLayoutProps } from "@ant-design/pro-layout"
import ProLayout from "@ant-design/pro-layout"
import RouteView from "./RouteView"
import { asyncRouterMap } from "../router/router.config"

const BasciLayout = (props) => {
  const { location, routes } = props
  const [pathname, setPathname] = useState(location.pathname)
  const [collapsed, setCollapsed] = useState(false)

  const defaultProps: BasicLayoutProps = {
    location: {
      pathname
    },
    route: asyncRouterMap[0],
    collapsed,
    fixSiderbar: true,
    collapsedButtonRender: false,
    menuItemRender(item, dom) {
      return (
        <Link
          to={item.path || "/welcome"}
          onClick={() => {
            setPathname(item.path || "/welcome")
          }}
        >
          {dom}
        </Link>
      )
    }
  }

  return (
    <>
      <ProLayout
        {...defaultProps}
        onCollapse={setCollapsed}
        headerContentRender={() => {
          return (
            <div
              onClick={() => setCollapsed(!collapsed)}
              style={{
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
          )
        }}
      >
        <div
          style={{
            height: "90vh"
          }}
        >
          <RouteView routes={routes} />
        </div>
      </ProLayout>
    </>
  )
}

export default withRouter(BasciLayout)
