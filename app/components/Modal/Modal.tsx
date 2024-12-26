import React from "react";
import Backdrop from "./Backdrop";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

interface ModalProps {
  onClose?: () => void;
  onConfirm: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  children,
  onConfirm,
  onClose,
  title,
}) => {
  return (
    <>
      <Backdrop />
      <div id="my_modal_1" className="modal modal-open">
        <div className="modal-box max-w-102">
          <ModalHeader title={title} />
          <ModalBody>{children}</ModalBody>
          <ModalFooter onClose={onClose} onConfirm={onConfirm} />
        </div>
      </div>
    </>
  );
};

export default Modal;
