import { CategoryType, DifficultyType, Option } from "@/lib/definitions";

export const difficultyOptions: Option<DifficultyType>[] = [
  {
    name: "Easy",
    value: "easy",
  },
  {
    name: "Medium",
    value: "medium",
  },
  {
    name: "Hard",
    value: "hard",
  },
];

export const categoryOptions: CategoryType[] | string[] = [
  "arts_and_literature",
  "film_and_tv",
  "food_and_drink",
  "general_knowledge",
  "geography",
  "history",
  "music",
  "science",
  "society_and_culture",
  "sport_and_leisure",
];
