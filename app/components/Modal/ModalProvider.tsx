"use client";
import useModalStore from "@/hooks/useModalStore";
import React from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";

const ModalProvider = () => {
  const router = useRouter();
  const { data, isOpen, onClose, type } = useModalStore();

  if (!isOpen) return null;

  const { limit, score } = data;

  const onConfirm = () => {
    onClose();
    router.replace("/");
  };

  if (type === "quit") {
    return (
      <Modal
        onClose={onClose}
        onConfirm={onConfirm}
        title="Are you sure you want to quit?"
      >
        <div className="flex flex-col gap-4">
          <p>
            - You currently have a score of{" "}
            <strong>{`${score}/${limit}`}</strong>
          </p>
          <p>
            - If you quit now, all your progress will be lost, and your score
            will reset to 0.
          </p>
          <p>- Do you still wish to continue?</p>
        </div>
      </Modal>
    );
  }
  return (
    <Modal onConfirm={onConfirm} title="Successfully finished the quiz">
      <div className="flex flex-col gap-4">
        <p>
          - You've finished the quiz with a score of{" "}
          <strong>{`${score}/${limit}`}</strong>
        </p>
        <p>
          - Fantastic effort! Would you like to try again and improve your
          score?
        </p>
      </div>
    </Modal>
  );
};

export default ModalProvider;
