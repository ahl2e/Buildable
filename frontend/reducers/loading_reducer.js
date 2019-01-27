import {merge} from 'lodash';
import {RECEIVE_PROJECT, START_LOADING_PROJECT} from '../actions/project_actions';
import {RECEIVE_ALL_COMMENTS, START_LOADING_COMMENTS} from '../actions/comment_actions';
import {START_LOADING_STEPS} from '../actions/step_actions';

const initialState = {
  detailLoading: false
};

const LoadingReducer = (oldState = initialState ,action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case START_LOADING_PROJECT:
      return merge({}, oldState, { detailLoading: true });
    // case START_LOADING_COMMENTS:
    // debugger
    //   return merge({}, oldState, { detailLoading: true });
    case RECEIVE_PROJECT:
      return merge({}, oldState, { detailLoading: false});
    // case START_LOADING_STEPS:
    //   return merge({},oldState, { detailLoading: true});
    case RECEIVE_ALL_COMMENTS:
    return merge({}, oldState, { detailLoading: false});
    default:
    return oldState;
  }
};

export default LoadingReducer;
