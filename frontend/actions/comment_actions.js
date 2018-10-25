import * as ApiCommentUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


const receiveComment = (comment) => {
  return{
    type: RECEIVE_STEP,
    comment: comment
  };
};

const receiveAllComments = (comments) => {
  return{
    type: RECEIVE_ALL_COMMENTS,
    comments
  };
};

const removeComment = (comment) => {
  return{
    type: REMOVE_COMMENT,
    comment
  };
};

export const fetchComment = (id) => dispatch => {
  return ApiStepUtil.fetchComment(id).then((id)=> dispatch(receiveComment(step)));
};

export const fetchAllComments = (project_id) => dispatch => {
  return ApiStepUtil.fetchAllComments(project_id).then(comments => dispatch(receiveAllComments(comments)));
};

export const updateComment  = (comment) => dispatch => {
  return ApiStepUtil.updateComment(comment).then((comment) => dispatch(receiveComment(comment)));
};

export const createComment = (comment) => dispatch => {
  return ApiStepUtil.createComment(comment).then((comment) => dispatch(receiveComment(comment)));
};

export const deleteComment = (comment) => dispatch => {
  return ApiStepUtil.deleteComment(comment).then(comment => dispatch(removeComment(comment)));
};
