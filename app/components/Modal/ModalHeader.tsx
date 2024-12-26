import React from "react";

const ModalHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-start items-center border-b p-4">
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
  );
};

export default ModalHeader;
