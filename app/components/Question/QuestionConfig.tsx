"use client";

import React, { useMemo, useState } from "react";
import Button from "../UI/Button";
import Select from "../UI/Select";
import { DifficultyType, CategoryType, Option } from "@/lib/definitions";
import { categoryOptions, difficultyOptions } from "@/utils/data";
import Range from "../UI/Range";
import { useRouter } from "next/navigation";

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
      console.log("Please choose valid category option.");
    }

    if (!difficultyOptions.some((value) => value.value === selectDifficulty)) {
      console.log("Please choose valid level option.");
    }

    if (selectRange < 0 || selectRange > 10) {
      console.log("Please choose valid range.");
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
      <Select
        options={formattedCategoryOptions}
        onChange={onHandleChange}
        value={selectValue}
        color="warning"
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

      <Button color="warning" type="submit">
        Start Quiz
      </Button>
    </form>
  );
};

export default QuestionConfig;
