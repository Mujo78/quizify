"use client";

import React, { useEffect, useState } from "react";
import QuestionScoreLimit from "./QuestionScoreLimit";
import Divider from "../UI/Divider";
import Question from "./Question";
import { CategoryType, DifficultyType, QuestionType } from "@/lib/definitions";
import useModalStore from "@/hooks/useModalStore";
import useScoreStore from "@/hooks/useScoreStore";
import LoadingDots from "../UI/LoadingDots";

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
  const [storageLimit, setStorageLimit] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const { onOpen } = useModalStore();
  const { score, setScore } = useScoreStore();

  const handleNextQuestion = () => {
    if (currentQuestion + 1 === data.length && storageLimit) {
      onOpen("finish", { limit: storageLimit, score });
    } else {
      localStorage.setItem(
        "num",
        `${
          currentQuestion > data.length ? currentQuestion : currentQuestion + 1
        }`
      );
      setCurrentQuestion((prev) => (prev > data.length ? prev : prev + 1));
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storageScore = localStorage.getItem("score");
      if (storageScore) {
        const parsedScore = parseInt(storageScore);
        setScore(parsedScore);
      } else {
        setScore(0);
      }

      const storageLimit = localStorage.getItem("limit");
      if (storageLimit) {
        const parsedSLimit = parseInt(storageLimit);
        setStorageLimit(parsedSLimit);
      } else {
        const parsedLimit = parseInt(limit);
        setStorageLimit(parsedLimit);
      }

      const currentStorage = localStorage.getItem("num");
      if (currentStorage) {
        setCurrentQuestion(parseInt(currentStorage));
      }
    }
  }, []);

  return (
    <div className="h-auto w-full md:w-2/4 flex flex-col justify-between bg-white shadow-2xl rounded-lg p-4 gap-2">
      {storageLimit !== null && score !== null && currentQuestion !== null ? (
        <>
          <QuestionScoreLimit
            categoryData={category}
            limitData={storageLimit}
            currentQuestion={currentQuestion + 1}
            difficulty={difficulty}
          />
          <Divider />
          <Question
            questionData={data[currentQuestion]}
            lastQuestion={currentQuestion + 1 === data.length}
            onNextQuestion={handleNextQuestion}
            limitData={storageLimit ?? 0}
          />
        </>
      ) : (
        <div className="h-[500px] flex justify-center items-center">
          <LoadingDots color="black" />
        </div>
      )}
    </div>
  );
};

export default QuestionMain;
