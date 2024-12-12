"use client";

import React from "react";
import { ColorsType, SizeType } from "../../lib/definitions";
import { getDaisyColor } from "@/utils/helpers";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: SizeType;
  color?: ColorsType;
  fullWidth?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<BtnProps> = ({
  className,
  fullWidth = false,
  color = "primary",
  onClick,
  children,
  ...props
}) => {
  const fullWidthClass = fullWidth ? "btn-block" : "";
  const classNameProp = className ?? "";

  const fullClassName = `btn ${getDaisyColor(
    color,
    "btn"
  )} ${classNameProp} ${fullWidthClass}`.trim();

  return (
    <button className={fullClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
