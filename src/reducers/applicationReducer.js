import actionType from "../actions/types"

let initialState = {}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case actionType.LOAD_APPLICATIONS_SUCCESS:
      newState = action.payload
      return newState
    default:
      return state
  }
}