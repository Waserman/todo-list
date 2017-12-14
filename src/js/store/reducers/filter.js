import * as actionTypes from '../actions/actionTypes'
const reducer = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case actionTypes.SET_FILTER:
      return action.paylod.filter  
    default:
      return state
  }
}