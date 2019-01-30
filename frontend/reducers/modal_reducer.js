import { OPEN_MODAL, CLOSE_MODAL, CARRY_PAYLOAD, CLEAR_PAYLOAD } from '../actions/modal_actions';

const ModalReducer = (state = { component: null, payload: null }, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return { component: action.component };
    case CLOSE_MODAL:
      return { component: null };
    case CARRY_PAYLOAD:
    debugger
      return { payload: action.payload };
    case CLEAR_PAYLOAD:
      return { payload: null };
    default:
      return state;
  }
};

export default ModalReducer;
