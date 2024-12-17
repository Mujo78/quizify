"use client";

import React from "react";
import AnswerPick from "./AnswerPick";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";

const Question = () => {
  const router = useRouter();
  const handleNavigateBack = () => {
    router.push("/");
  };

  return (
    <>
      <h1 className="text-slate-800 text-2xl text-center">
        What is the largest Balkan country?
      </h1>

      <AnswerPick />

      <div className="flex justify-between">
        <Button onClick={handleNavigateBack} color="secondary">
          Exit
        </Button>
        <Button color="info">Next</Button>
      </div>
    </>
  );
};

export default Question;
