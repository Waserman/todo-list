import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Tasks from '../Tasks/Tasks'
import Rodal from 'rodal'
import FormLogin from '../Tasks/Form/Form'

import {saveTask} from '../../store/actions/todosActions'

class Layout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  show = () => {
    this.setState({
      ...this.state,
      visible: true
    })
  }

  hide = () => {
    this.setState({
      ...this.state,
      visible: false
    })
  }

  saveTask = (body) => {
    this.props.saveTask(body)
    this.hide()
  }

  render() {
    return (
      <React.Fragment >
        <main>
          <Tasks onFabClick={this.show}/>
        </main>
        <Rodal visible={this.state.visible} onClose={this.hide}>
          <div style={{margin: '1.5rem'}}>
            <FormLogin afterSubmit={this.saveTask}/>
          </div>
        </Rodal>
      </ React.Fragment>
    )
  }
}

const mapDisptachToProps = (dispatch) => {
  return {
    saveTask: bindActionCreators(saveTask, dispatch)
  }
}

export default connect(null, mapDisptachToProps)(Layout) 