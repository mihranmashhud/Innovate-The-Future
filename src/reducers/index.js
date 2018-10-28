import { combineReducers } from "redux"

import auth from "./authReducer"
import application from "./applicationReducer"

export default combineReducers({
  auth,
  application
})
