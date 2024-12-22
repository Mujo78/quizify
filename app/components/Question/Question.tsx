"use client";

import React, { useEffect, useMemo, useState } from "react";
import AnswerPick from "./AnswerPick";
import Button from "../UI/Button";
import { QuestionType } from "@/lib/definitions";
import useModalStore from "@/hooks/useModalStore";
import useScoreStore from "@/hooks/useScoreStore";

interface Props {
  questionData: QuestionType;
  onNextQuestion: () => void;
  lastQuestion: boolean;
}

const Question: React.FC<Props> = ({
  questionData,
  onNextQuestion,
  lastQuestion,
}) => {
  const [answers, setAnswers] = useState<string[]>([]);
  const { onOpen } = useModalStore();
  const { score } = useScoreStore();

  const { question, incorrectAnswers, correctAnswer } = questionData;

  const randomAnswers = useMemo(() => {
    const allAnswers = [...incorrectAnswers].sort(() => Math.random() - 0.5);
    const correctAnswerIndex = Math.floor(
      Math.random() * (allAnswers.length + 1)
    );
    allAnswers.splice(correctAnswerIndex, 0, correctAnswer);
    return allAnswers;
  }, [incorrectAnswers, correctAnswer]);

  useEffect(() => {
    setAnswers(randomAnswers);
  }, []);

  const handleShowExitModal = () => {
    onOpen("quit", { limit: 2, score });
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-slate-800 text-2xl text-center">{question}</h1>
      <AnswerPick answersData={answers} correctAnswer={correctAnswer} />
      <div className="flex justify-between">
        <Button onClick={handleShowExitModal} color="secondary">
          Exit
        </Button>
        <Button
          color="info"
          onClick={onNextQuestion}
          className="!text-slate-900"
        >
          {lastQuestion ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default Question;
