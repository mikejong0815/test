import React from 'react';
import ReactDOM from 'react-dom';

import Auth from './Auth/Auth';
import App from './App';

const auth = new Auth();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App auth={auth} />, div);
});
