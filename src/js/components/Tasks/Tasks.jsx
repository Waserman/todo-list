import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchTasks, completeTask } from '../../store/actions/todosActions'
import { applyFilter } from '../../store/actions/filterActions'

import { getVisibleTodos }  from '../../store/selectors/index'

import { Button, Icon, Select } from 'antd'
import TaskList from './TaskList/TaskList'

const Option = Select.Option

const filterEnum = {
  showAll: 'SHOW_ALL',
  showCompleted: 'SHOW_COMPLETED',
  showOpen: 'SHOW_OPEN'
}

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

  handleFilterSelectChange = (selectedfilter) => {
    this.props.setFilter(selectedfilter)
  }

  render() {
    return (
      <div>
        <Select
          defaultValue={filterEnum.showAll}
          onChange={this.handleFilterSelectChange}
          style={{marginBottom: '20px', width: '200px'}}
        >
          <Option value={filterEnum.showAll}>show all</Option>
          <Option value={filterEnum.showCompleted}>show completed</Option>
          <Option value={filterEnum.showOpen}>show open</Option>
        </Select>
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
    todos: getVisibleTodos(state),
    filter: state.filter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    uploadTasksFromRemoteServer: bindActionCreators(fetchTasks, dispatch),
    completeTask: bindActionCreators(completeTask, dispatch),
    setFilter: filter => dispatch(applyFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)