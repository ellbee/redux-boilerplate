import { combineReducers } from 'redux';
import helloWorld from './helloWorld';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  routing,
  helloWorld,
});

export const test = { a: 100 };
export const x = 1000;
export const y = { ...test };

export default rootReducer;
