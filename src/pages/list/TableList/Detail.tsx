/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation
} from "react-router-dom"
import { Card } from "antd"

function getSearachParams() {
  const search = new URLSearchParams(useLocation().search)
  const searchParams = {}
  console.log(search.entries())
  for (const [key, value] of search.entries()) {
    console.log(key)
    if (searchParams[key]) {
      if (Array.isArray(searchParams[key])) {
        searchParams[key].push(value)
      } else {
        searchParams[key] = [searchParams[key], value]
      }
    } else {
      searchParams[key] = value
    }
  }
  return searchParams
}
const Detail = (props) => {
  console.log(props.routes)
  const search = getSearachParams()
  console.log(search)
  const { id } = useParams<{ id: string }>()
  return (
    <div>
      <Card>
        <h3>
          详情 - params: {id}
          <hr />
          query - {JSON.stringify(search)}
        </h3>
      </Card>
    </div>
  )
}

export default Detail
