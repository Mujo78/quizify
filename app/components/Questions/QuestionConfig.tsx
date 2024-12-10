"use client";

import React, { useState } from "react";
import Button from "../Button";
import Select from "../Select";
import { DifficultyType } from "@/app/lib/definitions";
import { difficultyOptions } from "@/app/utils/data";

const options = [
  { value: "1", name: "Something" },
  { value: "2", name: "Something Else" },
];

const QuestionConfig = () => {
  const [selectValue, setSelectValue] = useState<string>("");
  const [selectDifficulty, setDifficulty] = useState<DifficultyType>("easy");

  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectValue(value);
  };

  const onHandleDifficultyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setDifficulty(value as DifficultyType);
  };

  return (
    <form className="w-full flex flex-col gap-4">
      <Select
        options={options}
        onChange={onHandleChange}
        value={selectValue}
        color="success"
        placeholder="Please choose one category"
        label="Choose Category"
      />

      <Select
        options={difficultyOptions}
        onChange={onHandleDifficultyChange}
        value={selectDifficulty}
        color="success"
        label="Difficulty"
      />

      <Button
        color="warning"
        type="submit"
        onClick={() => console.log("object")}
      >
        Start Quiz
      </Button>
    </form>
  );
};

export default QuestionConfig;
