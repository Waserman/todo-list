import * as actioTypes from '../actions/actionTypes'

const reducer = (todos = [], action) => {
  switch (action.type) {
    case actioTypes.ADD_TODO:
      return [...todos, {body: action.payload.body}]
    case actioTypes.REMOVE_TODO:
      return todos.filter((item) => item.id !== action.payload.id)
    case actioTypes.UPDATE_TODO:
      return todos.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            body: action.payload.body
          }
        } else {
          return item
        }
      })
    case actioTypes.UPLOAD_TODOS_FROM_REMOTE:
        return [...action.data]
    default:
      return todos
  }
}

export default reducer