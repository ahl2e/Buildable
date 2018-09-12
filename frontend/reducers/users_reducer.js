import { merge } from 'lodash-merge';
import { RECEIVE_CURRENT_USER } from '../action/session_actions';

const usersReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {[action.currentUser.id]: action.currentUser});
    default:
      return oldState;
  }
};

export default usersReducer;
