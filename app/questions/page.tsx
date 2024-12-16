import AnswerPick from "@/components/Question/AnswerPick";
import Button from "@/components/UI/Button";
import React from "react";

const Questions = () => {
  return (
    <div className="bg-blue-300 flex flex-grow w-full p-1 justify-center items-center">
      <div className="h-auto w-full md:w-2/4 flex flex-col justify-between bg-white shadow-2xl rounded-lg p-4 gap-5">
        <h1 className="text-slate-800 text-2xl text-center">
          What is the largest Balkan country?
        </h1>

        <AnswerPick />

        <div className="flex justify-between">
          <Button color="secondary">Exit</Button>
          <Button color="primary">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
