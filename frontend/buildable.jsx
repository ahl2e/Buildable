import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiSessionUtil from './util/session_api_util';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.login = ApiSessionUtil.login;
  window.logout = ApiSessionUtil.logout;
  window.signup = ApiSessionUtil.signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Let's Get Building</h1>, root);
})
