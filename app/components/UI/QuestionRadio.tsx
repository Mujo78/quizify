"use client";
import React from "react";
import Input from "./Input";
import Label from "./Label";

interface RadioType extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

const QuestionRadio = ({ onChange, value, label, ...props }: RadioType) => {
  return (
    <div className="flex border rounded-2xl items-center gap-4 p-3 cursor-pointer hover:border-slate-800 transition-all duration-500">
      <Input
        componentType="radio"
        className="radio checked:bg-slate-200 text-slate-500"
        name={label}
        id={label}
        value={value}
        inputColor="primary"
        onChange={onChange}
        {...props}
      />

      <Label htmlFor={label} text={label} className="text-slate-800" />
    </div>
  );
};

export default QuestionRadio;
