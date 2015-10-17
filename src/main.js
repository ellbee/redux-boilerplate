import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './store/configureStore';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import DevTools from './components/DevTools';

const store = configureStore();

ReactDOM.render(
  <div>
    <Provider store={store}>
      <div>
        <ReduxRouter />
        {__DEV_TOOLS__ ?
          <DevTools /> : null
        }
      </div>
    </Provider>
  </div>,
  document.getElementById('app')
);
