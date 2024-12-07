"use client";

import React from "react";

interface BtnProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  color?:
    | "neutral"
    | "primary"
    | "secondary"
    | "accent"
    | "ghost"
    | "info"
    | "error"
    | "warning"
    | "success"
    | "link";
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<BtnProps> = ({
  className,
  disabled = false,
  fullWidth = false,
  color = "primary",
  onClick,
  type = "button",
  children,
}) => {
  return (
    <button
      type={type}
      className={`${className} btn-${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
