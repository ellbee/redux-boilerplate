'use strict';

import React from 'react';
import { Router, Route } from 'react-router';
import HelloWorld from './HelloWorld';

class AppRouter extends React.Component {

  static propTypes = {
    history: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <Router {...this.props}>
        <Route path="/" component={HelloWorld} />
      </Router>
    );
  }
}

export default AppRouter;
