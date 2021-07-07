import React from "react"
import { useParams, useLocation } from "react-router-dom"
import { Card } from "antd"
import { getSearchQuery } from "../../../utils"
import { IRouteComponentProps } from "../../../layouts/RouteView"

const Detail = (props: IRouteComponentProps) => {
  const location = useLocation()
  const search = getSearchQuery(location.search)
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
