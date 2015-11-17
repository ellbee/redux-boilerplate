import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import { syncReduxAndRouter } from 'redux-simple-router';
import DevTools from './components/DevTools';
import HelloWorld from './components/HelloWorld';
import configureStore from './store/configureStore';

const store = configureStore();
const history = createHistory();
syncReduxAndRouter(history, store);

ReactDOM.render(
  <div>
    <Provider store={store}>
      <div>
        <Router history={history}>
          <Route path="/" component={HelloWorld} />
        </Router>
        {__DEV_TOOLS__ ?
          <DevTools /> : null
        }
      </div>
    </Provider>
  </div>,
  document.getElementById('app')
);
