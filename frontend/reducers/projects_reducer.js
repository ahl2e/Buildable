import merge from 'lodash/merge';
import {RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS} from '../actions/project_actions';

const ProjectsReducer = (oldState = {}, action) => {
  debugger
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      return merge({}, oldState, {[action.project.id]: action.project});
    default:
      return oldState;
  }
};

export default ProjectsReducer;
