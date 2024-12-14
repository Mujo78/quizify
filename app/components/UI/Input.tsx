import { ColorsType, InputComponentType, SizeType } from "@/lib/definitions";
import { getDaisyColor, sizeVariants } from "@/utils/helpers";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputColor?: ColorsType;
  inputSize?: SizeType;
  componentType?: InputComponentType;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  inputColor = "primary",
  inputSize = "md",
  className,
  componentType = "text",
  ...props
}) => {
  const color = getDaisyColor(inputColor, componentType);
  const sizeProp = sizeVariants[componentType][inputSize];
  const fullClass = `range ${color} ${sizeProp} ${className}`.trim();

  return (
    <input
      {...props}
      type={componentType}
      onChange={onChange}
      value={value}
      className={fullClass}
    />
  );
};

export default Input;
