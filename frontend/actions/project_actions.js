import * as ApiProjectUtil from '../util/project_api_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";


export const fetchProject = (id) => {
  return ApiProjectUtil.fetchProject(id).then(project => dispatch(
    receiveProject(projects)));
};

export const fetchProjects = () => {
  return ApiProjectUtil.fetchProjects().then(projects => dispatch(
    receiveProjects(project)));
};


const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});
