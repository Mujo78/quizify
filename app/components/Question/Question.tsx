"use client";

import React, { useMemo } from "react";
import AnswerPick from "./AnswerPick";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";
import { QuestionType } from "@/lib/definitions";

interface Props {
  questionData: QuestionType;
}

const Question: React.FC<Props> = ({ questionData }) => {
  const router = useRouter();
  const handleNavigateBack = () => {
    router.push("/");
  };

  const { question, incorrectAnswers, correctAnswer } = questionData;

  const answers = useMemo(() => {
    return [...incorrectAnswers, correctAnswer];
  }, [incorrectAnswers, correctAnswer]);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-slate-800 text-2xl text-center">{question}</h1>

      <AnswerPick answersData={answers} />

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
