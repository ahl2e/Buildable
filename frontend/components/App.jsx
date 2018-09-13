import React from 'react';
import{ Route, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import AuthRoute from '../util/route_util';

const App = () => (
  <div>
    <header className="Greeting-container">
    <h1>Buildable</h1>
    <GreetingContainer/>
  </header>
  <div className="session-links">
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
  </div>
);

export default App;
