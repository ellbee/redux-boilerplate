import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { changeName as changeNameActionCreator } from '../actions/helloWorld';
import { upperHelloSelector } from '../selectors/helloWorld';

class HelloWorld extends React.Component {

  changeName() {
    const { props: { changeName, dispatch } } = this;
    dispatch(changeNameActionCreator(this.props.helloWorld.get('name')));
  }

  render() {
    return (
      <div>
        <div>{this.props.helloWorld.get('name')} says "Hello, World!"</div>
        <div>{this.props.upper} says "Hello, World!"</div>
        <button onClick={this.changeName.bind(this)}>Click</button>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  dispatch: PropTypes.func.isRequired,
  helloWorld: PropTypes.instanceOf(Immutable.Map).isRequired,
  upper: PropTypes.string.isRequired
};

export default connect(upperHelloSelector)(HelloWorld);
