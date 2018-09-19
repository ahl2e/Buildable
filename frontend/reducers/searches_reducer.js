import merge from 'lodash/merge';
import {RECEIVE_SEARCH_RESULTS} from '../actions/project_actions';

const SearchesReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.results;
    default:
      return oldState;
  }
};

export default SearchesReducer;
