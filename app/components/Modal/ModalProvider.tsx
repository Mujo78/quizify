"use client";
import useModalStore from "@/hooks/useModalStore";
import React from "react";
import Modal from "./Modal";

const ModalProvider = () => {
  const { data, isOpen, onClose, type } = useModalStore();

  if (!isOpen) return null;

  const { limit, score } = data;
  const title =
    type === "quit"
      ? "Are you sure you want to quit the quiz?"
      : "Successfully finished the quiz";

  return (
    <Modal onClose={onClose} title={title}>
      <p>{score}</p>
      <p>{limit}</p>
    </Modal>
  );
};

export default ModalProvider;
