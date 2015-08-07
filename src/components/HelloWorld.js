import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { changeName } from '../actions/helloWorld';
import { upperHelloSelector } from '../selectors/helloWorld';

class HelloWorld extends React.Component {

  onChangeName() {
    const { props: { changeName, helloWorld } } = this;
    changeName(helloWorld.get('name'));
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
  upper: PropTypes.string.isRequired
};

export default connect(
  upperHelloSelector,
  dispatch => ({
    changeName: name => dispatch(changeName(name))
  })
)(HelloWorld);
