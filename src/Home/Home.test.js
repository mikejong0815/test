import React from 'react';
import ReactDOM from 'react-dom';

import Auth from '../Auth/Auth';
import Home from './Home';

const auth = new Auth();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home auth={auth} />, div);
});
