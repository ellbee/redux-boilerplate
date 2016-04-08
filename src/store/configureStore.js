import { applyMiddleware, createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import DevTools from '../components/DevTools';
import logger from '../middleware/logger';

let middleware;

if (__DEV_TOOLS__) {
  middleware = compose(
    applyMiddleware(logger, thunk),
    DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  );
} else {
  middleware = compose(
    applyMiddleware(logger, thunk)
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

  return store;
};

export default configureStore;
