import {merge} from 'lodash';
import {RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS, REMOVE_COMMENT} from '../actions/comment_actions';

const CommentsReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
        return merge({}, oldState, { [action.comment.id]: action.comment });
    case REMOVE_COMMENT:
      const newState = Object.assign({}, oldState);
      delete newState[action.comment.id];
      return newState;
    default:
      return oldState;
  }
};

export default CommentsReducer;
