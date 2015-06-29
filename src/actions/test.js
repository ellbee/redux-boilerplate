import ActionTypes from '../constants/ActionTypes';

export function something(name) {
  return {
    type: ActionTypes.Test.something,
    name
  }
}
