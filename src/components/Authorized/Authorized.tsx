import React from "react"
import { Result } from "antd"
import { checkPermissions } from "./CheckPermissions"

//
type AuthorizedProps = {
  authority: Array<string> | string // 所有权限
  currentAuthority: Array<string> // 当前权限
}

const Authorized: React.FC<AuthorizedProps> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { authority, currentAuthority = [], children } = props
  console.log("children", children)
  const dom = checkPermissions(
    authority,
    currentAuthority,
    children,
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
    />
  )
  return <>{dom}</>
}

export default Authorized
