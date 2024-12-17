"use client";

import React from "react";
import Button from "../UI/Button";

const AnswerPick = () => {
  const handleCheckAnswer = (answer: string) => {};

  return (
    <div className="h-auto flex flex-col gap-4">
      <Button
        fullWidth
        color="ghost"
        className="border border-gray-200 text-slate-600"
        onClick={() => handleCheckAnswer("something")}
      >
        Bosnia
      </Button>
      <Button
        fullWidth
        color="ghost"
        className="border border-gray-200 text-slate-600"
        onClick={() => handleCheckAnswer("something")}
      >
        Serbia
      </Button>
      <Button
        fullWidth
        color="ghost"
        className="border border-gray-200 text-slate-600"
        onClick={() => handleCheckAnswer("something")}
      >
        Croatia
      </Button>
      <Button
        fullWidth
        color="ghost"
        className="border border-gray-200 text-slate-600"
        onClick={() => handleCheckAnswer("something")}
      >
        Montenegro
      </Button>
    </div>
  );
};

export default AnswerPick;
