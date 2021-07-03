/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react"
import RouteView from "../../layouts/RouteView"

const ListIndex = (props) => {
  console.log(props.routes)
  return (
    <div>
      <h2>列表页面</h2>
      <div>
        <RouteView routes={props.routes} />
      </div>
    </div>
  )
}

export default ListIndex
