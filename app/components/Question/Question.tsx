"use client";

import React, { useEffect, useMemo, useState } from "react";
import AnswerPick from "./AnswerPick";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";
import { QuestionType } from "@/lib/definitions";
import LoadingDots from "../UI/LoadingDots";

interface Props {
  questionData: QuestionType;
}

const Question: React.FC<Props> = ({ questionData }) => {
  const [answers, setAnswers] = useState<string[]>([]);

  const router = useRouter();
  const handleNavigateBack = () => {
    router.push("/");
  };

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

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-slate-800 text-2xl text-center">{question}</h1>
      <AnswerPick answersData={answers} correctAnswer={correctAnswer} />
      <div className="flex justify-between">
        <Button onClick={handleNavigateBack} color="secondary">
          Exit
        </Button>
        <Button color="info">Next</Button>
      </div>
    </div>
  );
};

export default Question;
