import * as ApiSessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const login = (user) => dispatch => {
  return ApiSessionUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
  error => dispatch(receiveErrors(error.responseJSON)));
};

export const signup = (user) => dispatch => (
  ApiSessionUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
  errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => {
  return ApiSessionUtil.logout().then(userId => dispatch(logoutCurrentUser()));
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: user
  };
};

export const logoutCurrentUser = ()=> {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};
