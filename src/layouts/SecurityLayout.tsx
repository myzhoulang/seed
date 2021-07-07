import React, { useState } from "react"
import { inject, observer } from "mobx-react"
import { Redirect } from "react-router-dom"
// import { PageLoading } from "@ant-design/pro-layout"
// import type { ConnectProps } from "umi"
// import { Redirect, connect } from "umi"
// import { stringify } from "querystring"
// import type { ConnectState } from "@/models/connect"
// import type { CurrentUser } from "@/models/user"
import RouteView from "@/layouts/RouteView"
import type { IRouteComponentProps } from "@/layouts/RouteView"

// type SecurityLayoutProps1 = {
//   loading?: boolean
//   currentUser?: CurrentUser
// } & ConnectProps

// type SecurityLayoutState1 = {
//   isReady: boolean
// }

// class SecurityLayout1 extends React.Component<
//   SecurityLayoutProps1,
//   SecurityLayoutState1
// > {
//   state: SecurityLayoutState = {
//     isReady: false
//   }

//   componentDidMount() {
//     this.setState({
//       isReady: true
//     })
//     const { dispatch } = this.props
//     if (dispatch) {
//       dispatch({
//         type: "user/fetchCurrent"
//       })
//     }
//   }

//   render() {
//     const { isReady } = this.state
//     const { children, loading, currentUser } = this.props
//     // You can replace it to your authentication rule (such as check token exists)
//     // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）
//     const isLogin = currentUser && currentUser.userid
//     const queryString = stringify({
//       redirect: window.location.href
//     })

//     if ((!isLogin && loading) || !isReady) {
//       return <PageLoading />
//     }
//     if (!isLogin && window.location.pathname !== "/user/login") {
//       return <Redirect to={`/user/login?${queryString}`} />
//     }
//     return children
//   }
// }

// export default connect(({ user, loading }: ConnectState) => ({
//   currentUser: user.currentUser,
//   loading: loading.models.user
// }))(SecurityLayout1)

// type SecurityLayoutProps = {
//   loading?: boolean
//   currentUser?: CurrentUser
// } & ConnectProps

const SecurityLayout: React.FC<IRouteComponentProps> = (props) => {
  const { store, routes } = props
  if (store.isAuthenticated) {
    return (
      <>
        <RouteView routes={[routes[1]]} />
        <Redirect to={`/dashboard/welcome`} />
      </>
    )
  } else {
    return (
      <>
        <RouteView routes={[routes[0]]} />
        <Redirect to={`/user/login`} />
      </>
    )
  }
}

export default inject("store")(observer(SecurityLayout))
