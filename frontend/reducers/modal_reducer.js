import {merge} from 'lodash';
import { OPEN_MODAL, CLOSE_MODAL, CARRY_PAYLOAD, CLEAR_PAYLOAD } from '../actions/modal_actions';

const ModalReducer = (oldState = {}, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return merge({}, oldState, {component:action.component});
    case CLOSE_MODAL:
      return merge({}, oldState, {component:null});
    case CARRY_PAYLOAD:
      return merge({}, oldState, {payload:action.payload});
    case CLEAR_PAYLOAD:
      return merge({}, oldState, {payload:null});
    default:
      return oldState;
  }
};

export default ModalReducer;
