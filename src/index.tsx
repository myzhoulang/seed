import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "mobx-react"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import accountStore from "./store/app"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={accountStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
