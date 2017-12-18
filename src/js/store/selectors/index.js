import { createSelector } from 'reselect'

const getVisibilityFilter = (state) => state.filter
const getTodos = (state) => state.todos

export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_OPEN':
        return todos.filter(t => !t.completed)
    }
  }
)