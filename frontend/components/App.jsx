import React from 'react';
import{ Route, Link, HashRouter, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import ProjectsIndexContainer from './projects/projects_index_container';

import FurnitureProjectsContainer from './projects/furniture_projects_container';
import WoodworkingProjectsContainer from './projects/woodworking_projects_container';
import TechnologyProjectsContainer from './projects/technology_projects_container';
import PotteryProjectsContainer from './projects/pottery_projects_container';
import HomeImprovementProjectsContainer from './projects/home_improvement_projects_container';
import LightingProjectsContainer from './projects/lighting_projects_container';
import MetalProjectsContainer from './projects/metal_projects_container';
import MyProjectsContainer from './projects/my_projects_container';

import CreateProjectsFormContainer from './projects/create_projects_form_container';
import EditProjectsFormContainer from './projects/edit_projects_form_container';
import {AuthRoute} from '../util/route_util';
import {ProtectedRoute} from '../util/route_util';
import ProjectsShowContainer from './projects/projects_show/projects_show_container';
import CreateStepsFormContainer from './steps/create_steps_form_container';
import EditStepsFormContainer from './steps/edit_steps_form_container';
import SearchFormContainer from './search/search_form_container';
import SearchIndexContainer from'./search/search_index_container';
import CreateCommentsFormContainer from './comments/create_comments_form_container';
import CommentsIndexContainer from './comments/comments_index_container';
import Footer from './footer/footer';

const App = () => (
  <main className="app-container">
<header className="main-header">
  <div className="greeting-left">
    <a className="icon-button" href="/">

    </a>
    <SearchFormContainer/>
    <Link to="/create" id="heading-build-link">Build a Project</Link>
</div>
    <div className="Greeting-container">
      <GreetingContainer/>
  </div>
</header>

<div className = "nav-bar">
  <div className="nav-left">

  </div>
</div>


    <Switch>
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/projects/search" component={SearchIndexContainer} />
    <ProtectedRoute exact path="/create" component={CreateProjectsFormContainer} />
    <ProtectedRoute exact path="/projects/:projectId/edit" component={EditProjectsFormContainer} />
    <Route exact path="/projects/:projectId" component={ProjectsShowContainer} />
    <Route exact path="/my_projects/" component={MyProjectsContainer} />
    <ProtectedRoute exact path="/projects/:project_Id/steps" component={CreateStepsFormContainer} />
    <ProtectedRoute exact path="/projects/:project_Id/:step/edit" component={EditStepsFormContainer} />
    <ProtectedRoute exact path="/projects/:project_Id/:comment" component={CreateCommentsFormContainer} />
    <Route exact path="/categories/furniture" component={FurnitureProjectsContainer} />
    <Route exact path="/categories/woodworking" component={WoodworkingProjectsContainer} />
    <Route exact path="/categories/technology" component={TechnologyProjectsContainer} />
    <Route exact path="/categories/pottery" component={PotteryProjectsContainer} />
    <Route exact path="/categories/home_improvement" component={HomeImprovementProjectsContainer} />
    <Route exact path="/categories/lighting" component={LightingProjectsContainer} />
    <Route exact path="/categories/metal" component={MetalProjectsContainer} />
    <Route path="/" component={ProjectsIndexContainer} />

    </Switch>
  <Footer/>
</main>
);

export default App;
