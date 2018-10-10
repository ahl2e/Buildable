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
import CreateStepsFormContainer from './steps/create_steps_form_container';
import SearchFormContainer from './search/search_form_container';
import SearchIndexContainer from'./search/search_index_container';


const App = () => (
  <main className="app-container">
<header className="main-header">
  <a className="icon-button" href="/">
    <div id="icon-text">
      <h2>buildable </h2>
    </div>
  </a>
  <SearchFormContainer/>
    <div className="Greeting-container">
    <GreetingContainer/>
  </div>
</header>

<div className = "nav-bar">
  <div className="nav-left">
    <ul>
      <li><Link to={'/create'}>Build</Link></li>
      <li>Share</li>
      <li>Learn</li>
      <li>Repeat</li>
    </ul>
  </div>
</div>


    <Switch>
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/projects/search" component={SearchIndexContainer} />
    <ProtectedRoute exact path="/create" component={CreateProjectsFormContainer} />
    <ProtectedRoute exact path="/projects/:projectId/edit" component={EditProjectsFormContainer} />
    <Route exact path="/projects/:projectId" component={ProjectsShowContainer} />
    <ProtectedRoute exact path="/projects/:project_Id/steps" component={CreateStepsFormContainer} />
    <Route path="/" component={ProjectsIndexContainer} />

    </Switch>
</main>
);

export default App;
