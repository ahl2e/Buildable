import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiSessionUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.login = ApiSessionUtil.login(user);
  window.logout = ApiSessionUtil.logout();
  window.signup = ApiSessionUtil.signup(user);
  ReactDOM.render(<h1>Lets get Building</h1>, root);
});
