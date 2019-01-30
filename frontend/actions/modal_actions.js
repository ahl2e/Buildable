export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CARRY_PAYLOAD = 'CARRY_PAYLOAD';
export const CLEAR_PAYLOAD = 'CLEAR_PAYLOAD';

export const openModal = component => {
  return {
    type: OPEN_MODAL,
    component
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const carryPayload = payload => {
  return {
    type: CARRY_PAYLOAD,
    payload
  };
};

export const clearPayload = () => {
  return {
    type: CLEAR_PAYLOAD
  };
};
