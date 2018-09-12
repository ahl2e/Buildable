import React from 'react';
import * as ApiSessionUtil from './util/session_api_util';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login, logout, signup} from './actions/session_actions'


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // TESTING_START
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  // window.logout = ApiSessionUtil.logout;
  // window.signup = ApiSessionUtil.signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING_END


  ReactDOM.render(<Root store={store} />, root);
});
