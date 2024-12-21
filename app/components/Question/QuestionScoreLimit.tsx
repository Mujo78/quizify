"use client";

import React from "react";
import Progress from "../UI/Progress";
import { formatCategory } from "@/utils/helpers";
import useScoreStore from "@/hooks/useScoreStore";

interface Props {
  limitData: string;
  categoryData: string;
}

const QuestionScoreLimit: React.FC<Props> = ({ categoryData, limitData }) => {
  const { score } = useScoreStore();
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
      </div>
      <Progress progressValue={limitData} />
    </div>
  );
};

export default QuestionScoreLimit;
