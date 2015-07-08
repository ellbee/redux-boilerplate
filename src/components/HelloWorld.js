import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import * as TestActionCreators from '../actions/test';
import Immutable from 'immutable';
import { helloSelector } from '../selectors/helloWorld';

@connect(helloSelector)
class HelloWorld {

  static propTypes = {
    helloWorld: PropTypes.instanceOf(Immutable.Map).isRequired
  }

  changeName() {
    const { props: { dispatch } } = this;
    dispatch(TestActionCreators.something(this.props.helloWorld.get('name')));
  }

  render() {
    return (
      <div>
        <div>{this.props.helloWorld.get('name')} says "Hello, World!"</div>
        <button onClick={::this.changeName}>Click</button>
      </div>
    )
  }
}

export default HelloWorld;
