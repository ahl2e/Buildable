import merge from 'lodash/merge';
import {RECEIVE_CATEGORY_PROJECTS} from '../actions/project_actions';

const CategoriesReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORY_PROJECTS:
      return action.results;
    default:
      return oldState;
  }
};

export default CategoriesReducer;
