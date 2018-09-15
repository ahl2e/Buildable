import React from 'react';
import{ Route, Link, HashRouter, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import ProjectsIndexContainer from './projects/projects_index_container';
import AuthRoute from '../util/route_util';


const App = () => (
  <main className="app-container">
<header className="main-header">
  <a className="icon-button" href="/">
  </a>
    <div className="Greeting-container">
    <GreetingContainer/>
  </div>
</header>

<div className = "nav-bar">
  <div className="nav-left">
    <ul>
      <li>Projects</li>
      <li>Commenting</li>
      <li>Add Photos</li>
      <li>Search</li>
    </ul>
  </div>
</div>


    <Switch>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    <Route path="/" component={ProjectsIndexContainer} />

    </Switch>
</main>
);

export default App;
