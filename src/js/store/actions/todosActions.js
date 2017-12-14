import * as actionTypes from './actionTypes'
import axios from 'axios'

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