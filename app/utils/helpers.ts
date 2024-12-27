import {
  CategoryType,
  ColorsType,
  ComponentType,
  DifficultyType,
  SizeType,
} from "@/lib/definitions";
import { categoryOptions, difficultyOptions } from "./data";

export const colorVariants: Record<
  ComponentType,
  Partial<Record<ColorsType, string>>
> = {
  btn: {
    neutral: "btn-neutral",
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    ghost: "btn-ghost",
    info: "btn-info",
    error: "btn-error",
    warning: "btn-warning",
    success: "btn-success",
    link: "btn-link",
  },
  select: {
    neutral: "select-neutral",
    primary: "select-primary",
    secondary: "select-secondary",
    accent: "select-accent",
    ghost: "select-ghost",
    info: "select-info",
    error: "select-error",
    warning: "select-warning",
    success: "select-success",
    link: "select-link",
  },
  range: {
    primary: "range-primary",
    secondary: "range-secondary",
    accent: "range-accent",
    info: "range-info",
    error: "range-error",
    warning: "range-warning",
    success: "range-success",
  },
  radio: {
    primary: "radio-primary",
    secondary: "radio-secondary",
    accent: "radio-accient",
    info: "radio-info",
    success: "radio-success",
    warning: "radio-warning",
    error: "radio-error",
  },
  text: {
    ghost: "input-ghost",
    primary: "input-primary",
    secondary: "input-secondary",
    accent: "input-accient",
    info: "input-info",
    success: "input-success",
    warning: "input-warning",
    error: "input-error",
  },
};

export const sizeVariants: Record<
  ComponentType,
  Partial<Record<SizeType, string>>
> = {
  btn: {
    xs: "btn-xs",
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  },
  select: {
    xs: "select-xs",
    sm: "select-sm",
    md: "select-md",
    lg: "select-lg",
  },
  range: {
    xs: "range-xs",
    sm: "range-sm",
    md: "range-md",
    lg: "range-lg",
  },
  radio: {
    md: "radio-md",
  },
  text: {
    xs: "input-xs",
    sm: "input-sm",
    md: "input-md",
    lg: "input-lg",
  },
};

export function getDaisyColor(color: ColorsType, component: ComponentType) {
  return colorVariants[component][color];
}

export function formatCategory(category: string) {
  return category
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatDifficulty(difficulty: string) {
  return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
}

export const validateDifficulty = (difficulty: string | DifficultyType) => {
  return difficultyOptions.some((value) => value.value === difficulty);
};

export const validateCategory = (category: string | CategoryType) => {
  return categoryOptions.some((value) => value === category);
};

export const validateLimit = (limit: number) => {
  return limit >= 1 && limit <= 10;
};

export const generateQuizFinishMessage = (limit: number, score: number) => {
  if (score === limit && limit < 10) {
    return `Amazing work! You got all ${score} questions right. Try a higher question limit for a bigger challenge!`;
  }

  if (score === limit) {
    return `Perfect score! You answered all ${score} questions correctly. Well done!`;
  }

  if (score >= limit * 0.8) {
    return `Great job! You scored ${score} out of ${limit}. You're really close to perfection!`;
  }

  if (score >= limit * 0.5) {
    return `Good effort! You scored ${score} out of ${limit}. Keep practicing and aim higher next time!`;
  }

  return `Keep trying! You scored ${score} out of ${limit}. Practice makes perfect!`;
};
