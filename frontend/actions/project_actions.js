import * as ApiProjectUtil from '../util/project_api_util';
import * as ApiSearchUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';



export const fetchProject = (id)=> dispatch => {
  return ApiProjectUtil.fetchProject(id).then(project => dispatch(
    receiveProject(project)));
};

export const fetchProjects = () => dispatch => {
  return ApiProjectUtil.fetchAllProjects().then(projects => dispatch(receiveAllProjects(projects)));
};

export const fetchSearchResults = (query) => dispatch => {
  return ApiSearchUtil.search(query).then( results => dispatch(receiveSearchResults(results)));
};

export const createProject = (project) => dispatch => {
  return ApiProjectUtil.createProject(project).then((project) => dispatch(receiveProject(project)),
errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const updateProject = (project) => dispatch => {
  return ApiProjectUtil.updateProject(project).then((project) => dispatch(receiveProject(project)));
};

export const deleteProject = (project) => dispatch => {
  return ApiProjectUtil.deleteProject(project).then(project => dispatch(removeProject(project)));
};


const receiveProject = (project) => {
  return{
  type: RECEIVE_PROJECT,
  project: project
};
};

const receiveAllProjects = (projects) => {
  return{
  type: RECEIVE_ALL_PROJECTS,
  projects: projects
  };
};

const receiveSearchResults = (results) => {
  return{
    type: RECEIVE_SEARCH_RESULTS,
    results
  };
};

const removeProject = (project) => {
  return{
    type: REMOVE_PROJECT,
    project: project
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
