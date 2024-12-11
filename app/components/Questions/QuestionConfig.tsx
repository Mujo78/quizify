"use client";

import React, { useState } from "react";
import Button from "../UI/Button";
import Select from "../UI/Select";
import { DifficultyType } from "@/app/lib/definitions";
import { difficultyOptions } from "@/app/utils/data";
import Range from "../UI/Range";

const options = [
  { value: "1", name: "Something" },
  { value: "2", name: "Something Else" },
];

const QuestionConfig = () => {
  const [selectValue, setSelectValue] = useState<string>("");
  const [selectDifficulty, setDifficulty] = useState<DifficultyType>("easy");
  const [selectRange, setSelectRange] = useState<number>(1);

  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectValue(value);
  };

  const onHandleChangeRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectRange(parseInt(value));
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
        color="warning"
        placeholder="Please choose one category"
        label="Choose Category"
      />

      <Select
        options={difficultyOptions}
        onChange={onHandleDifficultyChange}
        value={selectDifficulty}
        color="warning"
        label="Difficulty"
      />

      <div className="text-center w-auto">
        <Range
          rangeColor="ghost"
          value={selectRange}
          onChange={onHandleChangeRange}
          label="Number of questions"
        />
        <span>{selectRange}</span>
      </div>

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
