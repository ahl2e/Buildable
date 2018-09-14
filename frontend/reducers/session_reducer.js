import {merge} from 'lodash/merge';
import {RECEIVE_CURRENT_USER,LOGOUT_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';

const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        return {id: action.currentUser.id};
      case LOGOUT_CURRENT_USER:
        return {};
      case RECEIVE_ERRORS:
        return oldState;
      default:
        return oldState;
    }
};

export default sessionReducer;
