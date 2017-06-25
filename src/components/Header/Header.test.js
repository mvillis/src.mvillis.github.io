import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from '../../store';
import { Provider } from 'react-redux';

import Header from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Header />
      </ConnectedRouter>
    </Provider>, div);
});
