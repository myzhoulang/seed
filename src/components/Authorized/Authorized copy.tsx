import React from "react"
import { Result } from "antd"

//
type AuthorizedProps = {
  authority: Array<string> // 所有权限
  currentAuthority: Array<string> // 当前权限
}

const Authorized: React.FC<AuthorizedProps> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { authority = [], currentAuthority = [], children } = props
  const isPermissions = currentAuthority.some((item) =>
    authority.includes(item)
  )
  if (isPermissions || !currentAuthority.length) {
    return <>{children}</>
  }
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
    />
  )
}

export default Authorized
