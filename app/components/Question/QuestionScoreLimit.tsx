"use client";

import React, { useEffect } from "react";
import Progress from "../UI/Progress";
import { formatCategory, formatDifficulty } from "@/utils/helpers";
import useScoreStore from "@/hooks/useScoreStore";
import { CategoryType, DifficultyType } from "@/lib/definitions";
import Countdown from "../UI/Countdown";

interface Props {
  limitData: string;
  categoryData: CategoryType;
  difficulty: DifficultyType;
  currentQuestion: number;
}

const QuestionScoreLimit: React.FC<Props> = ({
  categoryData,
  limitData,
  currentQuestion,
  difficulty,
}) => {
  const { score, counter, setCounter } = useScoreStore();

  const progress = (currentQuestion / parseInt(limitData)) * 100;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-2 text-slate-800">
        <p>{formatCategory(categoryData)}</p>
        <p>
          Score:{" "}
          <strong>
            {score}/{limitData}
          </strong>
        </p>
        <p>{formatDifficulty(difficulty)}</p>
      </div>
      <Countdown counter={counter} />
      <Progress progressValue={progress} />
    </div>
  );
};

export default QuestionScoreLimit;
