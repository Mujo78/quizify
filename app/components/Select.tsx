"use client";

import React from "react";
import { ColorsType, SizeType } from "../lib/definitions";

interface Option {
  value: string;
  name: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  placeholder: string;
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
  selectSize = "lg",
  color = "error",
  ...props
}) => {
  return (
    <>
      <label htmlFor={`select-${label}`}>{label}</label>
      <select
        id={`select-${label}`}
        {...props}
        onChange={onChange}
        value={value}
        className={`select select-${selectSize} select-${color}`}
      >
        <option value="" className="select-disabled">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
