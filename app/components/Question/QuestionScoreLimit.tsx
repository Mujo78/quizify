"use client";

import React from "react";
import Progress from "../UI/Progress";
import { formatCategory, formatDifficulty } from "@/utils/helpers";
import useScoreStore from "@/hooks/useScoreStore";
import { CategoryType, DifficultyType } from "@/lib/definitions";

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
  const { score } = useScoreStore();

  const progress = (currentQuestion / parseInt(limitData)) * 100;

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
      <Progress progressValue={progress} />
    </div>
  );
};

export default QuestionScoreLimit;
