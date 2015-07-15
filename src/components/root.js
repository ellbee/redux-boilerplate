import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger, thunk } from '../middleware';
import Router from './Router';
import * as reducers from '../reducers';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

let finalCreateStore;
if(__DEV_TOOLS__) {
  finalCreateStore = compose(
    applyMiddleware(logger, thunk),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
  );
} else {
  finalCreateStore = applyMiddleware(logger, thunk)(createStore);
}

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const { history } = this.props;
    return (
      <div>
        <Provider store={store}>
          {() => <Router {...{ history }} />}
        </Provider>
        {__DEV_TOOLS__ ? 
          <DebugPanel top right bottom>
            <DevTools store={store}
              monitor={LogMonitor} />
          </DebugPanel> : null
        }
      </div>
    );
  }
}
