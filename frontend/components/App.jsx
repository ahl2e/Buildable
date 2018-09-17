import React from 'react';
import{ Route, Link, HashRouter, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import ProjectsIndexContainer from './projects/projects_index_container';
import CreateProjectsFormContainer from './projects/create_projects_form_container';
import EditProjectsFormContainer from './projects/edit_projects_form_container';
import {AuthRoute} from '../util/route_util';
import {ProtectedRoute} from '../util/route_util';
import ProjectsShowContainer from './projects/projects_show/projects_show_container';


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
      <li><Link to={'/create'}>Create</Link></li>
      <li>Commenting</li>
      <li>Add Photos</li>
      <li>Search</li>
    </ul>
  </div>
</div>


    <Switch>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    <Route path="/create" component={CreateProjectsFormContainer} />
    <Route path="/projects/:projectId/edit" component={EditProjectsFormContainer} />
    <Route path="/projects/:projectId" component={ProjectsShowContainer} />
    <Route path="/" component={ProjectsIndexContainer} />

    </Switch>
</main>
);

export default App;
