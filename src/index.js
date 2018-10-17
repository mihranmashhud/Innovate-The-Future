import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import reducers from "./reducers"
import { BrowserRouter } from "react-router-dom"
import * as serviceWorker from "./serviceWorker"
import "./index.css"
import "typeface-roboto"

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
