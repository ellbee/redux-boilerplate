import { combineReducers } from 'redux';
import helloWorld from './helloWorld';
import { routeReducer as routing} from 'redux-simple-router';

const rootReducer = combineReducers({
  routing,
  helloWorld
});

export default rootReducer;
