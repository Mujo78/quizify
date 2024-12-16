"use client";

import React, { useState } from "react";
import QuestionRadio from "../UI/QuestionRadio";

const AnswerPick = () => {
  const [radio, setRadio] = useState<string>("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setRadio(value);
  };

  return (
    <div className="h-auto flex flex-col gap-4">
      <QuestionRadio
        value="Bosnia"
        checked={radio === "Bosnia"}
        label="Bosnia"
        onChange={onChange}
      />

      <QuestionRadio
        value="Serbia"
        checked={radio === "Serbia"}
        label="Serbia"
        onChange={onChange}
      />
      <QuestionRadio
        value="Croatia"
        checked={radio === "Croatia"}
        label="Croatia"
        onChange={onChange}
      />
      <QuestionRadio
        value="Montenegro"
        checked={radio === "Montenegro"}
        label="Montenegro"
        onChange={onChange}
      />
    </div>
  );
};

export default AnswerPick;
