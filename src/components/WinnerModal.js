import React from "react";
import Modal from "react-modal";

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    fontSize: "50px",
    color: "green",
  },
};

export default function WinnerModal({ isOpen, winner, onClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyle}>
      {`Player ${winner} Won!`}
    </Modal>
  );
}
