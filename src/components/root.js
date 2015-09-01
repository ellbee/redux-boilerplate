import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from '../middleware/logger';
import thunk from 'redux-thunk';
import Router from './Router';
import configureStore from '../store/configureStore';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const store = configureStore();

class Root extends React.Component {
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

Root.propTypes = {
  history: PropTypes.object.isRequired
};

export default Root;
