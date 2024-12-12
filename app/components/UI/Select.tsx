"use client";

import React from "react";
import { getDaisyColor, sizeVariants } from "@/utils/helpers";
import { ColorsType, SizeType } from "../../lib/definitions";

interface Option {
  value: string;
  name: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  placeholder?: string;
  options: Option[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  bordered?: boolean;
  selectSize?: SizeType;
  color?: ColorsType;
}

const Select: React.FC<SelectProps> = ({
  placeholder,
  onChange,
  value,
  options,
  label,
  bordered,
  selectSize = "md",
  color = "primary",
  ...props
}) => {
  const sizeProp = sizeVariants["select"][selectSize] ?? "";
  const fullClass = `select bg-white text-slate-800 ${getDaisyColor(
    color,
    "select"
  )} ${sizeProp}`;
  return (
    <label className="form-control w-full max-w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select
        id={`select-${label}`}
        {...props}
        onChange={onChange}
        value={value}
        className={fullClass}
      >
        {placeholder && (
          <option value="" className="select-disabled bg-inherit">
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
