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
