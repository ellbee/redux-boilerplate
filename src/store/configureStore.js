import rootReducer from '../reducers/index';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from '../middleware/logger';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import DevTools from '../components/DevTools';
import { browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';

const reduxRouterMiddleware = syncHistory(browserHistory);

let middleware;

if (__DEV_TOOLS__) {
  middleware = compose(
    applyMiddleware(logger, thunk, reduxRouterMiddleware),
    DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  );
} else {
  middleware = compose(
    applyMiddleware(logger, thunk),
  );
}

const configureStore = () => {
  const store = createStore(rootReducer, middleware);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  
  if (__DEV_TOOLS__) {
    reduxRouterMiddleware.listenForReplays(store);
  }
  
  return store;
};

export default configureStore;
