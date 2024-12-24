"use client";

import React, { useState } from "react";
import Button from "../UI/Button";
import LoadingDots from "../UI/LoadingDots";
import useScoreStore from "@/hooks/useScoreStore";

interface Props {
  answersData: string[];
  correctAnswer: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const AnswerPick: React.FC<Props> = ({
  answersData,
  correctAnswer,
  selected,
  setSelected,
}) => {
  const [correct, setCorrect] = useState<boolean>();
  const { incrementScore, counter } = useScoreStore();

  const handleCheckAnswer = (answer: string) => {
    setSelected(answer);
    setCorrect(correctAnswer === answer);
    if (correctAnswer === answer) {
      incrementScore();
    }
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
            className={`border border-gray-200 ${
              selected === value ? "!text-white" : "!text-slate-600"
            }`}
            disabled={
              (selected !== "" && selected !== value) ||
              (counter === 0 && selected !== value)
            }
            onClick={() => {
              if (selected === "") {
                handleCheckAnswer(value);
              }
            }}
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
