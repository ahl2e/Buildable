import { merge } from 'lodash/merge';
import {RECEIVE_COMMENT, RECEIVE_ERRORS} from '../actions/comment_actions';

const CommentsErrorsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
  return action.errors;
    default:
  return oldState;
  }
};

export default CommentsErrorsReducer;
