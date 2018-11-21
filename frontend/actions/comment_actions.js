import * as ApiCommentUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';



const receiveComment = (comment) => {
  return{
    type: RECEIVE_COMMENT,
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

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const fetchComment = (id) => dispatch => {
  return ApiCommentUtil.fetchComment(id).then((id)=> dispatch(receiveComment(step)));
};

export const fetchAllComments = (project_id) => dispatch => {
  return ApiCommentUtil.fetchAllComments(project_id).then(comments => dispatch(receiveAllComments(comments)));
};

export const updateComment  = (comment) => dispatch => {
  return ApiCommentUtil.updateComment(comment).then((comment) => dispatch(receiveComment(comment)));
};

export const createComment = (comment) => dispatch => {
  return ApiCommentUtil.createComment(comment).then((comment) => dispatch(receiveComment(comment)),
  errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const deleteComment = (comment) => dispatch => {
  return ApiCommentUtil.deleteComment(comment).then(comment => dispatch(removeComment(comment)));
};
