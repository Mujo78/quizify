"use client";

import React, { useEffect, useState } from "react";
import QuestionScoreLimit from "./QuestionScoreLimit";
import Divider from "../UI/Divider";
import Question from "./Question";
import { CategoryType, DifficultyType, QuestionType } from "@/lib/definitions";
import useModalStore from "@/hooks/useModalStore";
import useScoreStore from "@/hooks/useScoreStore";

interface QuestionsProps {
  data: QuestionType[];
  limit: string;
  category: CategoryType;
  difficulty: DifficultyType;
}

const QuestionMain: React.FC<QuestionsProps> = ({
  category,
  data,
  difficulty,
  limit,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const { onOpen } = useModalStore();
  const { score } = useScoreStore();

  const handleNextQuestion = () => {
    if (currentQuestion + 1 === data.length) {
      onOpen("finish", { limit: parseInt(limit), score });
    } else {
      setCurrentQuestion((prev) => (prev > data.length ? prev : prev + 1));
    }
  };

  return (
    <div className="h-auto w-full md:w-2/4 flex flex-col justify-between bg-white shadow-2xl rounded-lg p-4 gap-2">
      <QuestionScoreLimit
        categoryData={category}
        limitData={limit}
        currentQuestion={currentQuestion + 1}
        difficulty={difficulty}
      />
      <Divider />
      <Question
        questionData={data[currentQuestion]}
        lastQuestion={currentQuestion + 1 === data.length}
        onNextQuestion={handleNextQuestion}
      />
    </div>
  );
};

export default QuestionMain;
