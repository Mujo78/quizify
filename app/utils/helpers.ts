import { ColorsType, ComponentType, SizeType } from "../lib/definitions";

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
};

export const sizeVariants: Record<ComponentType, Record<SizeType, string>> = {
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
};

export function getDaisyColor(color: ColorsType, component: ComponentType) {
  return colorVariants[component][color];
}
