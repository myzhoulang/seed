/* eslint-disable react/prop-types */
import React from "react"
import { PageContainer } from "@ant-design/pro-layout"
import RouteView from "../../layouts/RouteView"

const ListIndex = (props) => {
  return (
    <PageContainer>
      <h2>列表页面</h2>
      <div>
        <RouteView routes={props.routes} />
      </div>
    </PageContainer>
  )
}

export default ListIndex
