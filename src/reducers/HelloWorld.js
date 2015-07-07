import Immutable from 'immutable';
import ActionTypes from '../constants/ActionTypes';
import createReducer from '../util/createReducer';

const initialState = Immutable.Map({name: 'Turtle'});

export default createReducer(initialState, {
  [ActionTypes.Test.something](state, action) {
    let name = action.name;
    switch(name) {
    case 'Turtle':
      name = 'E';
      break;
    case 'E':
      name = 'Drama';
      break;
    case 'Drama':
      name = 'Vince';
      break;
    case 'Vince':
      name = 'Turtle';
      break;
    default:
      name = 'Turtle';
    }
    return state.set('name', name);
  }
});
