import * as ApiStepUtil from '../util/step_api_util';

export const RECEIVE_STEP = "RECEIVE_STEP";
export const RECEIVE_ALL_STEPS = "RECEIVE_ALL_STEPS";

export const fetchStep = (id) => dispatch => {
  return ApiStepUtil.fetchStep(id).then((id)=> dispatch(receiveStep(step)));
};

export const fetchAllSteps = (project_id) => dispatch => {
  return ApiStepUtil.fetchAllSteps(project_id).then(steps => dispatch(receiveAllSteps(steps)));
};

export const updateStep  = (step) => dispatch => {
  return ApiStepUtil.updateStep(step).then((step) => dispatch(receiveStep(step)));
};

export const createStep = () => dispatch => {
  return ApiStepUtil.createStep().then((step) => dispatch(receiveStep(step)));
};


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
