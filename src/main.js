import React from 'react';
import Root from './components/Root';
import History from 'react-router/lib/BrowserHistory';

const history = new History;

React.render(
  <Root history={history}/>,
  document.body
);
