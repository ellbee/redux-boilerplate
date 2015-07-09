import ActionTypes from '../constants/ActionTypes';

export function changeName(name) {
  return {
    type: ActionTypes.HelloWorld.changeName,
    name
  }
}
