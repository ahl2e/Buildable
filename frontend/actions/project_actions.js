import * as ApiProjectUtil from '../util/project_api_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";


export const fetchProject = (id)=> dispatch => {
  return ApiProjectUtil.fetchProject(id).then(project => dispatch(
    receiveProject(project)));
};

export const fetchProjects = () => dispatch => {
  return ApiProjectUtil.fetchAllProjects().then(projects => dispatch(receiveAllProjects(projects)));
};

export const createProject = (project) => dispatch => {
  return ApiProjectUtil.createProject(project).then(project => dispatch(receiveProject(project)));
};

export const updateProject = (project) => dispatch => {
  return ApiProjectUtil.updateProject(project).then(project => dispatch(receiveProject(project)));
};



const receiveProject = (project) => {
  return{
  type: RECEIVE_PROJECT,
  project
};
};

const receiveAllProjects = (projects) => {
  return{
  type: RECEIVE_ALL_PROJECTS,
  projects: projects
};
};
