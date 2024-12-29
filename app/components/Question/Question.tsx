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
  limitData: number;
}

const Question: React.FC<Props> = ({
  questionData,
  onNextQuestion,
  lastQuestion,
  limitData: limit,
}) => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");
  const { onOpen } = useModalStore();
  const { score, counter, resetCounter, setIsSelected } = useScoreStore();

  const { question, incorrectAnswers, correctAnswer, id } = questionData;

  const randomAnswers = useMemo(() => {
    const allAnswers = [...incorrectAnswers].sort(() => Math.random() - 0.5);
    const correctAnswerIndex = Math.floor(
      Math.random() * (allAnswers.length + 1)
    );
    allAnswers.splice(correctAnswerIndex, 0, correctAnswer);
    return allAnswers;
  }, [correctAnswer]);

  useEffect(() => {
    setAnswers(randomAnswers);
  }, [id]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storageSelected = localStorage.getItem("selected");
      if (counter === 0 && storageSelected === "none") {
        setSelected("");
      }
      if (storageSelected !== "none" && storageSelected && counter !== 0) {
        setSelected(storageSelected);
        setIsSelected();
      }
    }
  }, []);

  const handleShowExitModal = () => {
    onOpen("quit", { limit, score });
  };

  const handleOnNextQuestion = () => {
    onNextQuestion();
    setSelected("");
    resetCounter();
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-slate-800 text-2xl text-center">{question}</h1>
      <AnswerPick
        answersData={answers}
        correctAnswer={correctAnswer}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="flex justify-between">
        <Button onClick={handleShowExitModal} color="secondary">
          Exit
        </Button>
        <Button
          color="info"
          onClick={handleOnNextQuestion}
          disabled={selected === "" && counter !== 0}
          className="!text-slate-900"
        >
          {lastQuestion ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default Question;
