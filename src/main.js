import React from 'react';
import Root from './components/Root';
import { createHistory } from 'history';

const history = createHistory();

React.render(
  <Root history={history}/>,
  document.getElementById('app')
);
