import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { logger, thunk } from '../middleware'
import Router from './Router';
import History from 'react-router/lib/BrowserHistory';
import * as reducers from '../reducers'

const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);
const store = createStoreWithMiddleware(combineReducers(reducers));

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
