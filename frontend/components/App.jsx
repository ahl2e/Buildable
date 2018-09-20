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
  </a>
  <SearchFormContainer/>
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
    <ProtectedRoute path="/create" component={CreateProjectsFormContainer} />
    <ProtectedRoute path="/projects/:projectId/edit" component={EditProjectsFormContainer} />
    <Route path="/projects/:projectId" component={ProjectsShowContainer} />
    <ProtectedRoute path="/api/projects/:project_Id/steps" component={CreateStepsFormContainer} />
    <Route path="/api/projects/search" component={SearchIndexContainer} />
    <Route path="/" component={ProjectsIndexContainer} />

    </Switch>
</main>
);

export default App;
