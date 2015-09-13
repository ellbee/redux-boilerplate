import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { ReduxRouter } from 'redux-react-router';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import configureStore from './store/configureStore';
import HelloWorld from './components/HelloWorld';

const store = configureStore();

ReactDOM.render(
  <div>
    <Provider store={store}>
      <ReduxRouter />
    </Provider>
    {__DEV_TOOLS__ ?
      <DebugPanel top right bottom>
        <DevTools store={store}
          monitor={LogMonitor} />
      </DebugPanel> : null
    }
  </div>,
  document.getElementById('app')
);
