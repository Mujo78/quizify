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

const QuestionConfig = () => {
  const router = useRouter();
  const [selectValue, setSelectValue] = useState<CategoryType>(
    "arts_and_literature"
  );
  const [selectDifficulty, setDifficulty] = useState<DifficultyType>("easy");
  const [selectRange, setSelectRange] = useState<number>(1);

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

    if (!categoryOptions.includes(selectValue)) {
      toast.error("Please choose valid category option.");
      return;
    }

    if (!difficultyOptions.some((value) => value.value === selectDifficulty)) {
      toast.error("Please choose valid level option.");
      return;
    }

    if (selectRange < 1 || selectRange > 10) {
      toast.error("Please choose valid range.");
      return;
    }

    router.push("/questions");
  };

  const formattedCategoryOptions = useMemo<Option<CategoryType>[]>(() => {
    return categoryOptions.map((value) => ({
      value,
      name: value
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
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
          color="warning"
        />
      </div>

      <div className="form-control max-w-full">
        <Label htmlFor="difficulty" text="Difficulty" />
        <Select
          options={difficultyOptions}
          onChange={onHandleDifficultyChange}
          value={selectDifficulty}
          color="warning"
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

      <Button color="warning" type="submit">
        Start Quiz
      </Button>
    </form>
  );
};

export default QuestionConfig;
