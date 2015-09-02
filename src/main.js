import React from 'react';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import configureStore from './store/configureStore';
import HelloWorld from './components/HelloWorld';

const history = createHistory();
const store = configureStore();

React.render(
  <div>
    <Provider store={store}>
      {() =>
        <Router history={history}>
          <Route path="/" component={HelloWorld} />
        </Router>
      }
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
