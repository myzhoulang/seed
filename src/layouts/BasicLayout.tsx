/* eslint-disable react/prop-types */
import React, { useState, useMemo } from "react"
import { Link, withRouter } from "react-router-dom"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import type { BasicLayoutProps } from "@ant-design/pro-layout"
import ProLayout, { getMenuData } from "@ant-design/pro-layout"
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
      return menuData[1].children
    }
  )

  const menus = useMemo(() => {
    console.log(menuData)
    // children
    return menuData.map((item) => {
      if (!Array.isArray(item.authority) || item.authority.length === 0) {
        return item
      }
    })
  }, [menuData])

  const defaultProps: BasicLayoutProps = {
    location: {
      pathname
    },
    menuDataRender() {
      // 对没有权限的菜单进行过滤
      // console.log("menuData", menuData)
      return menus
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
        <RouteView routes={routes} />
      </ProLayout>
    </>
  )
}

export default withRouter(BasciLayout)
