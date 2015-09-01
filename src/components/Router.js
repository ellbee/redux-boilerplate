import React from 'react';
import { Router, Route } from 'react-router';
import HelloWorld from './HelloWorld';

class AppRouter extends React.Component {
  render() {
    return (
      <Router {...this.props}>
        <Route path="/" component={HelloWorld} />
      </Router>
    );
  }
}

AppRouter.propTypes = {
  history: React.PropTypes.object.isRequired
};

export default AppRouter;
