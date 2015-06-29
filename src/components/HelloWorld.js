import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import * as TestActionCreators from '../actions/test';
import Immutable from 'immutable';

@connect(state => { 
  return { state };
})
class HelloWorld extends React.Component {
  
  //static propTypes = {
    //state.test: PropTypes.instanceOf(Immutable.Map).isRequired
  //}
  
  changeName() {
    const { props: { dispatch } } = this;
    dispatch(TestActionCreators.something(this.props.state.test.get('name')));
  }
  
  render() {
    return (
      <div>
        <div>{this.props.state.test.get('name')} says "Hello, World!"</div>
        <button onClick={::this.changeName}>Click</button>
      </div>
    )
  }
}

export default HelloWorld;
