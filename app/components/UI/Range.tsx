import { ColorsType, SizeType } from "@/app/lib/definitions";
import { getDaisyColor, sizeVariants } from "@/app/utils/helpers";
import React from "react";

interface RangeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  min?: number;
  max?: number;
  className?: string;
  rangeColor?: ColorsType;
  rangeSize?: SizeType;
  value: number;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Range: React.FC<RangeProps> = ({
  max = 10,
  min = 1,
  value,
  className,
  label,
  onChange,
  rangeColor = "primary",
  rangeSize = "md",
}) => {
  const color = getDaisyColor(rangeColor, "range");
  const sizeProp = sizeVariants["range"][rangeSize];
  const fullClass = `range ${color} ${sizeProp} ${className}`.trim();

  return (
    <label className="form-control w-full max-w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        onChange={onChange}
        value={value}
        className={fullClass}
      />
    </label>
  );
};

export default Range;
