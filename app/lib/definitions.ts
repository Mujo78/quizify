export type ColorsType =
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

export type ComponentType = "btn" | "select" | "range" | "radio" | "text";
export type InputComponentType = "range" | "radio" | "text";
export type SizeType = "xs" | "sm" | "md" | "lg";

export type DifficultyType = "easy" | "medium" | "hard";
export type CategoryType =
  | "music"
  | "sport_and_leisure"
  | "film_and_tv"
  | "arts_and_literature"
  | "history"
  | "society_and_culture"
  | "science"
  | "geography"
  | "food_and_drink"
  | "general_knowledge";

export type Option<T> = {
  name: string;
  value: T;
};

export interface QuestionType {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  tags: string[];
  type: string;
  difficulty: string;
  regions: string[];
  isNiche: boolean;
}
