"use client";

import React, { useState } from "react";
import Button from "../UI/Button";
import LoadingDots from "../UI/LoadingDots";

interface Props {
  answersData: string[];
  correctAnswer: string;
}

const AnswerPick: React.FC<Props> = ({ answersData, correctAnswer }) => {
  const [selected, setSelected] = useState<string>("");
  const [correct, setCorrect] = useState<boolean>();

  const handleCheckAnswer = (answer: string) => {
    setSelected(answer);
    setCorrect(correctAnswer === answer);
  };

  return (
    <div className="h-auto flex flex-col gap-4">
      {answersData.length ? (
        answersData.map((value) => (
          <Button
            key={value}
            fullWidth
            color={
              selected === value ? (correct ? "success" : "error") : "ghost"
            }
            className="border border-gray-200 text-slate-600"
            onClick={() => handleCheckAnswer(value)}
          >
            {value}
          </Button>
        ))
      ) : (
        <div className="h-[250px] w-full flex justify-center">
          <LoadingDots color="black" />
        </div>
      )}
    </div>
  );
};

export default AnswerPick;
