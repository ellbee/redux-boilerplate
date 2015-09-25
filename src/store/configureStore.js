import rootReducer from '../reducers';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from '../middleware/logger';
import thunk from 'redux-thunk';
import { devTools, persistState } from 'redux-devtools';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import React from 'react';
import { Route } from 'react-router';
import HelloWorld from '../components/HelloWorld';

const routes = (
  <Route path="/" component={HelloWorld} />
);

let finalCreateStore;

if (__DEV_TOOLS__) {
  finalCreateStore = compose(
    applyMiddleware(logger, thunk),
    reduxReactRouter({routes, createHistory}),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  )(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware(logger, thunk),
    reduxReactRouter({routes, createHistory})
  )(createStore);
}

const configureStore = () => {
  const store = finalCreateStore(rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
