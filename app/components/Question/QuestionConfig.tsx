"use client";

import React, { useMemo, useState } from "react";
import Button from "../UI/Button";
import Select from "../UI/Select";
import { DifficultyType, CategoryType, Option } from "@/lib/definitions";
import { categoryOptions, difficultyOptions } from "@/utils/data";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Label from "../UI/Label";
import Input from "../UI/Input";
import {
  formatCategory,
  validateCategory,
  validateDifficulty,
  validateLimit,
} from "@/utils/helpers";

const QuestionConfig = () => {
  const router = useRouter();
  const [selectValue, setSelectValue] = useState<CategoryType>(
    "arts_and_literature"
  );
  const [selectDifficulty, setDifficulty] = useState<DifficultyType>("easy");
  const [selectRange, setSelectRange] = useState<number>(10);

  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectValue(value as CategoryType);
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

  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateCategory(selectValue)) {
      toast.error("Please choose valid category option.");
      return;
    }

    if (!validateDifficulty(selectDifficulty)) {
      toast.error("Please choose valid level option.");
      return;
    }

    if (!validateLimit(selectRange)) {
      toast.error("Please choose valid range.");
      return;
    }

    router.push(
      `/questions?limit=${selectRange}&difficulty=${selectDifficulty}&category=${selectValue}`
    );
  };

  const formattedCategoryOptions = useMemo<Option<CategoryType>[]>(() => {
    return categoryOptions.map((value) => ({
      value: value as CategoryType,
      name: formatCategory(value),
    }));
  }, [categoryOptions]);

  return (
    <form onSubmit={onHandleSubmit} className="w-full flex flex-col gap-4">
      <div className="form-control max-w-full">
        <Label htmlFor="category" text="Category" />
        <Select
          id="category"
          options={formattedCategoryOptions}
          onChange={onHandleChange}
          value={selectValue}
          color="neutral"
        />
      </div>

      <div className="form-control max-w-full">
        <Label htmlFor="difficulty" text="Difficulty" />
        <Select
          options={difficultyOptions}
          onChange={onHandleDifficultyChange}
          value={selectDifficulty}
          color="neutral"
          id="difficulty"
        />
      </div>

      <div className="text-center form-control max-w-full">
        <Label htmlFor="numberOfQuestions" text="Choose number of questions" />
        <Input
          id="numberOfQuestions"
          inputColor="info"
          componentType="range"
          min={0}
          max={10}
          value={selectRange}
          onChange={onHandleChangeRange}
        />

        <span className="text-slate-800">{selectRange}</span>
      </div>

      <Button color="info" type="submit">
        Start Quiz
      </Button>
    </form>
  );
};

export default QuestionConfig;
