import React from 'react';
import{ Route, Link, HashRouter, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import AuthRoute from '../util/route_util';

const App = () => (
  <main>
<header className="main-header">
    <h1>Buildable</h1>
    <div className="Greeting-container">
    <GreetingContainer/>
  </div>
</header>
  <div className="session-links">
    <Switch>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
</main>
);

export default App;
