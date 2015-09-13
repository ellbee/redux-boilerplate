import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { changeName } from '../actions/helloWorld';
import { upperHelloSelector } from '../selectors/helloWorld';
import { pushState } from 'redux-react-router';

class HelloWorld extends React.Component {

  onChangeName() {
    this.props.changeName(this.props.helloWorld.get('name'));
  }

  render() {
    return (
      <div>
        <div>{this.props.helloWorld.get('name')} says "Hello, World!"</div>
        <div>{this.props.upper} says "Hello, World!"</div>
        <button onClick={this.onChangeName.bind(this)}>Click</button>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  helloWorld: PropTypes.instanceOf(Immutable.Map).isRequired,
  changeName: PropTypes.func.isRequired,
  upper: PropTypes.string.isRequired
};

export default connect(
  upperHelloSelector,
  dispatch => ({
    changeName: name => dispatch(changeName(name))
  })
)(HelloWorld);
