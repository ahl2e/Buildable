import merge from 'lodash/merge';
import {RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS, REMOVE_PROJECT} from '../actions/project_actions';

const ProjectsReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      return merge({}, oldState, {[action.project.id]: action.project});
    // case REMOVE_PROJECT:
    // const newState = Object.assign({}, oldState);
    // delete newState[action.project.id];
    // return newState;
    default:
      return oldState;
  }
};

export default ProjectsReducer;
