import * as ApiStepUtil from '../util/step_api_util';

export const RECEIVE_STEP = "RECEIVE_STEP";
export const RECEIVE_ALL_STEPS = "RECEIVE_ALL_STEPS";
export const REMOVE_STEP = "REMOVE_STEP";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveStep = (step) => {
  return{
    type: RECEIVE_STEP,
    step: step
  };
};

const receiveAllSteps = (steps) => {
  return{
    type: RECEIVE_ALL_STEPS,
    steps
  };
};

const removeStep = (step) => {
  return{
    type: REMOVE_STEP,
    step
  };
};
export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const fetchStep = (id) => dispatch => {
  return ApiStepUtil.fetchStep(id).then((id)=> dispatch(receiveStep(step)));
};

export const fetchAllSteps = (project_id) => dispatch => {
  return ApiStepUtil.fetchAllSteps(project_id).then(steps => dispatch(receiveAllSteps(steps)));
};

export const updateStep  = (step) => dispatch => {
  return ApiStepUtil.updateStep(step).then((step) => dispatch(receiveStep(step)));
};

export const createStep = (step) => dispatch => {
  return ApiStepUtil.createStep(step).then((step) => dispatch(receiveStep(step)),
  errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const deleteStep = (step) => dispatch => {
  return ApiStepUtil.deleteStep(step).then(step => dispatch(removeStep(step)));
};
