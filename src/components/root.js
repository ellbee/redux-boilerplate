import React, { PropTypes } from 'react'
import { Provider } from 'redux/react'
import { createDispatcher, createRedux, composeStores } from 'redux'
import { loggerMiddleware, thunkMiddleware } from '../middleware'
import Router from './Router';
import History from 'react-router/lib/BrowserHistory';
import * as reducers from '../reducers'


const dispatcher = createDispatcher(
  composeStores(reducers),
  getState => [ thunkMiddleware(getState), loggerMiddleware ]
)

const redux = createRedux(dispatcher)

export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const { history } = this.props
    return (
      <Provider redux={redux}>
        {() => <Router {...{ history }} />}
      </Provider>
    );
  }
}
