import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DevTools from './components/DevTools';
import HelloWorld from './containers/HelloWorld';
import configureStore from './store/configureStore';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './css/normalize.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

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
