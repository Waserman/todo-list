import * as actionTypes from './actionTypes'

export const applyFilter = (filter) => {
  return {type: actionTypes.SET_FILTER, payload: {filter}}
}