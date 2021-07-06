/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { Link, withRouter } from "react-router-dom"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import type { BasicLayoutProps } from "@ant-design/pro-layout"
import ProLayout, { getMenuData, PageContainer } from "@ant-design/pro-layout"
import RouteView from "./RouteView"
import { asyncRouterMap } from "../router/router.config"

const BasciLayout = (props) => {
  const { location, routes } = props
  const [pathname, setPathname] = useState(location.pathname)
  const [collapsed, setCollapsed] = useState(false)
  const { menuData } = getMenuData(
    asyncRouterMap,
    { locale: false },
    null,
    (menuData) => {
      return menuData[0].children
    }
  )

  const defaultProps: BasicLayoutProps = {
    location: {
      pathname
    },
    menuDataRender() {
      return menuData
    },
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
        breadcrumbRender={(routers = []) => [
          {
            path: "/",
            breadcrumbName: "首页"
          },
          ...routers
        ]}
        itemRender={(route, params, routes, paths) => {
          const first = routes.indexOf(route) === 0
          return first ? (
            <Link to={paths.join("/")}>{route.breadcrumbName}</Link>
          ) : (
            <span>{route.breadcrumbName}</span>
          )
        }}
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
        <div>
          <PageContainer>
            <RouteView routes={routes} />
          </PageContainer>
        </div>
      </ProLayout>
    </>
  )
}

export default withRouter(BasciLayout)
