import { merge } from 'lodash';
import {RECEIVE_STEP, RECEIVE_ALL_STEPS} from '../actions/step_actions';

const StepsReducer = (oldState ={}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_STEPS:
      return action.steps;
    case RECEIVE_STEP:
      return merge({}, oldState, { [action.step.id]: action.step });
    default:
      return oldState;
  }
};

export default StepsReducer;
