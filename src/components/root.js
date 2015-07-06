import React, { PropTypes } from 'react'
import { Provider } from 'redux/react'
import { createStore, composeReducers } from 'redux'
import { loggerMiddleware, thunkMiddleware } from '../middleware'
import Router from './Router';
import History from 'react-router/lib/BrowserHistory';
import * as reducers from '../reducers'


const store = createStore(
  composeReducers(reducers),
  {},
  getState => [ thunkMiddleware(getState), loggerMiddleware ]
)

export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const { history } = this.props
    return (
      <Provider store={store}>
        {() => <Router {...{ history }} />}
      </Provider>
    );
  }
}
