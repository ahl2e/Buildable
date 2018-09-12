import {merge} from 'lodash-merge';
import {RECEIVE_CURRENT_USER,LOGOUT_CURRENT_USER} from '../action/session_actions';

const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        return {id: action.currentUser.id};
      case LOGOUT_CURRENT_USER:
        return {};
      default:
        return oldState;
    }
};
