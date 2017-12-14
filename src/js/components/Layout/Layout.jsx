import React, { Component } from 'react'
import { Button, Icon } from 'antd'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { fetchTasks } from '../../store/actions/todosActions'

class Layout extends Component {

  constructor(props) {
    super(props)
    this.onButtonClicked = this.onButtonClicked.bind(this)
  }

  onButtonClicked () {
       console.log(JSON.stringify(this.props.todos))
  }

  componentDidMount () {
    this.props.uploadTasksFromRemoteServer()
    
  }

  render() {
    return (
      <React.Fragment >
        <main>
          <h1>React + Redux Todo list application</h1>
          <Button 
            htmlType="button" 
            shape="circle" 
            size="large" 
            type="primaty" 
            onClick={this.onButtonClicked} > 
              <Icon type="plus" />
            </Button>
        </main>
      </ React.Fragment>
    )
  }
}

const mapStateToProps = state =>  {
  return {
    todos : state.todos,
    filter: state.filter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    uploadTasksFromRemoteServer: bindActionCreators(fetchTasks, dispatch)    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)