import React, { useState } from "react";
import ReactModal from "react-modal";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundClolor: "#fff",
  padding: "50px",
  zindex: 1000,
};

const Modal = ({ open, onClose }) => {
  return (
    <ReactModal isOpen={open}>
      Fancy Modal and all model contents
      <button onClick={onClose}>close modal</button>
    </ReactModal>
  );
};
export default Modal;
