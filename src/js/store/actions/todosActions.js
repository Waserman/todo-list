import * as actionTypes from './actionTypes'
import axios from 'axios'
import qs from 'qs'

const uploadTodosFromRemote = data => {
  return { type: actionTypes.UPLOAD_TODOS_FROM_REMOTE,  data: data  }
}

export const fetchTasks = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get('/api/tasks/')
      dispatch(uploadTodosFromRemote(data))
    } catch (err) {
      throw new Error(err)
    }
  }
}

export const saveTask = (body) => {
  return async (dispatch) => {
    try {
      const { status } = await axios.post('/api/tasks', qs.stringify({'body': body}))

      if (status == 200) {
        dispatch({type: actionTypes.ADD_TODO, payload: {body}})
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const completeTask = ({id, completed}) => {
  return async (dispatch, getState) => {
    const {todos} = getState()

    let task = todos.find(item => {
      return item._id === id
    })


    try {
      const {data} = axios.put('/api/tasks/'+id, qs.stringify({'completed': completed, 'body': task.body}))
      dispatch({type: actionTypes.COMPLETE_TODO, payload: {id, completed}})
    } catch (err) {
      console.log(err)
    }
  }
}