"use client";

import React from "react";
import { ColorsType, SizeType } from "../lib/definitions";

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
  return (
    <button
      {...props}
      className={`btn btn-${color} ${classNameProp} ${fullWidthClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
