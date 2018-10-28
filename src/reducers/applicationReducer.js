import actionType from "../actions/types"

let initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_APPLICATION_SUCCESS:
      return action.payload
    default:
      return state
  }
}
