import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchTasks } from '../../store/actions/todosActions'

import { Button, Icon } from 'antd'

class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.uploadTasksFromRemoteServer()
  }

  render() {

    let listItems = this.props.todos.map((item, i) => {
      return <li key={i}>{item.body}</li>
    })
    return (
      <div>
        <ul>
          {listItems}
        </ul>
        <Button
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
    uploadTasksFromRemoteServer: bindActionCreators(fetchTasks, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)