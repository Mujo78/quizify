"use client";

import React, { useState } from "react";
import Button from "../Button";
import Select from "../Select";

const options = [
  { value: "1", name: "Something" },
  { value: "2", name: "Something Else" },
];

const QuestionConfig = () => {
  const [selectValue, setSelectValue] = useState<string>("");

  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectValue(value);
  };

  return (
    <div className="w-full">
      <Select
        options={options}
        onChange={onHandleChange}
        value={selectValue}
        placeholder="PLease choose one category"
        label="Choose Category"
      />
      <Button color="primary" onClick={() => console.log("object")}>
        Start Quiz
      </Button>
    </div>
  );
};

export default QuestionConfig;
