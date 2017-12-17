import React from 'react'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
import Layout from './components/Layout/Layout.jsx'

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose} from 'redux'

import reducers from './store/reducers'

import '../style/index.scss'

// include styles - 3rd party ui kit
import 'antd/dist/antd.css'
// include styles - 3rd party modal component
import 'rodal/lib/rodal.css'

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