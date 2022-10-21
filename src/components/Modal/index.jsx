import React from "react";
const Modal = ({ modalIsOpen, onRequestClose, children }) => {
  const divStyle = {
    display: modalIsOpen ? "block" : "none",
  };

  const closeModal = (e) => {
    e.stopPropagation();
    onRequestClose();
  };

  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      <span className="close" onClick={closeModal}>
        &times;
      </span>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export default Modal;
