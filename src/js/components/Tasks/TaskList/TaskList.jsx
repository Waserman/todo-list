import React from 'react'
import { List, Checkbox } from 'antd'

const TaskList = (props) => {
  return (
    <List
      className="task-list"
      bordered
      dataSource={props.todos}
      renderItem={item => (<List.Item><Checkbox style={{marginRight: '4px'}} checked={item.completed} onChange={(e) => props.onTaskComplete(e, item._id)}/>{item.body}</List.Item>)}
    />
  )
}

export default TaskList