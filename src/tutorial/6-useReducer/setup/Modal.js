import React, { useEffect } from 'react';

const Modal = ({modalTimer,modalContent}) => {
  setTimeout(()=>{
    modalTimer()
  },3000)
  return (
  <div className="modal">{modalContent}</div>
  );
};

export default Modal;
