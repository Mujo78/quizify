"use client";

import React from "react";
import Button from "../UI/Button";

interface Props {
  answersData: string[];
}

const AnswerPick: React.FC<Props> = ({ answersData }) => {
  const handleCheckAnswer = (answer: string) => {
    console.log(answer);
  };

  return (
    <div className="h-auto flex flex-col gap-4">
      {answersData.map((value) => (
        <Button
          key={value}
          fullWidth
          color="ghost"
          className="border border-gray-200 text-slate-600"
          onClick={() => handleCheckAnswer(value)}
        >
          {value}
        </Button>
      ))}
    </div>
  );
};

export default AnswerPick;
