import { combineReducers } from 'redux';
import helloWorld from './helloWorld';
import { routerStateReducer as router } from 'redux-react-router';

const rootReducer = combineReducers({
  router,
  helloWorld
});

export default rootReducer;
