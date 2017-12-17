import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchTasks, completeTask } from '../../store/actions/todosActions'

import { Button, Icon } from 'antd'
import TaskList from './TaskList/TaskList'

class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.uploadTasksFromRemoteServer()
  }
  
  onTaskComplete = (e, id) => {
    this.props.completeTask({id, completed: e.target.checked})
  }

  render() {
    return (
      <div>
        <TaskList todos={this.props.todos} onTaskComplete={this.onTaskComplete}/>
        <Button
          style={{marginTop: '10px'}}
          htmlType="button"
          shape="circle"
          size="large"
          type="primary"
          onClick={this.props.onFabClick} >
          <Icon type="plus" />
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    uploadTasksFromRemoteServer: bindActionCreators(fetchTasks, dispatch),
    completeTask: bindActionCreators(completeTask, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)