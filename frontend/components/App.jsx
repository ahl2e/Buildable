import React from 'react';
import{ Route, Link, HashRouter, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import AuthRoute from '../util/route_util';


const App = () => (
  <main>
<header className="main-header">
    <h3>buildable</h3>
    <div className="Greeting-container">
    <GreetingContainer/>
  </div>
</header>
<div className = "nav-bar"></div>
    <Switch>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    </Switch>
</main>
);

export default App;
