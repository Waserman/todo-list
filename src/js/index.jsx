import React from 'react'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
import Layout from './components/Layout/Layout.jsx'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose} from 'redux'

import reducers from './store/reducers'

const rootReducer = combineReducers({
  todos: reducers.todosReducer,
  filter: reducers.filterReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

class App extends React.Component {
  render () {
    return <Layout />
  }
}

render(<Provider store={store}><App /></Provider>, document.getElementById('app'));