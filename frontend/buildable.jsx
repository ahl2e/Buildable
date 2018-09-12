import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiSessionUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.login = ApiSessionUtil.login;
  window.logout = ApiSessionUtil.logout;
  window.signup = ApiSessionUtil.signup;
  ReactDOM.render(<h1>Let's Get Building</h1>, root);
})
