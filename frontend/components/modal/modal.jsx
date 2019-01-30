
import React from 'react';

const Modal = props => {
  if (!props.component) return null;

  return (
    <div className='modal-background'>
      <div className='modal-child' onClick={ e => e.stopPropagation() }>
        { props.component }
      </div>
    </div>
  );
};

export default Modal;
