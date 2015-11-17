import rootReducer from '../reducers/index';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from '../middleware/logger';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import DevTools from '../components/DevTools';

let finalCreateStore;

if (__DEV_TOOLS__) {
  finalCreateStore = compose(
    applyMiddleware(logger, thunk),
    DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  )(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware(logger, thunk),
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
