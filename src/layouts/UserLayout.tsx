/* eslint-disable react/prop-types */
import React from "react"
import RouteView from "../layouts/RouteView"
import styles from "./index.module.less"

const UserLayout = (props) => {
  console.log("UserLayout")
  return (
    <div className={styles.login}>
      <h2 className={styles.header}>User Layout</h2>
      <RouteView routes={props.routes} />
    </div>
  )
}

export default UserLayout
