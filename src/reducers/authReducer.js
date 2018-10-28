import actionType from "../actions/types"

export default (state = {}, action) => {
  switch (action.type) {
    case actionType.FETCH_USER:
      return action.payload || null
    default:
      return state
  }
}
