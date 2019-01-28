import merge from 'lodash/merge';
import {BUILD_PROJECT, REVEAL_PROJECT} from '../actions/project_actions';

const initialState = {
  justBuilt: false
};

const BuildingReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case BUILD_PROJECT:
      return merge({}, oldState, { justBuilt: true });
    case REVEAL_PROJECT:
      return merge({}, oldState, { justBuilt: false });
    default:
      return oldState;
  }
};

export default BuildingReducer;
