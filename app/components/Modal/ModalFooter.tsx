import React from "react";
import Button from "../UI/Button";

interface ModalFooterProps {
  onClose?: () => void;
  onConfirm: () => void;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ onClose, onConfirm }) => {
  return (
    <div className="modal-action flex justify-between">
      {onClose && (
        <Button color="secondary" className="btn" onClick={onClose}>
          Close
        </Button>
      )}
      <Button color="primary" className="btn ml-auto" onClick={onConfirm}>
        Confirm
      </Button>
    </div>
  );
};

export default ModalFooter;
