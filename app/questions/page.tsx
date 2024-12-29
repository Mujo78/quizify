import QuestionMain from "@/components/Question/QuestionMain";
import { CategoryType, DifficultyType, QuestionType } from "@/lib/definitions";
import {
  validateCategory,
  validateDifficulty,
  validateLimit,
} from "@/utils/helpers";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

interface PropsType {
  searchParams: {
    difficulty: string;
    category: string;
    limit: string;
  };
}

async function getQuestionsData(
  category: string,
  difficulty: string,
  limit: string
) {
  const res = await fetch(
    `${process.env.HTTP_URL}s?categories=${category}&limit=${limit}&difficulty=${difficulty}`,
    {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong. Please try again later.");
  }

  return res.json();
}

const Questions = async ({
  searchParams: { category, difficulty, limit },
}: PropsType) => {
  if (
    !validateDifficulty(difficulty) ||
    !validateCategory(category) ||
    !validateLimit(parseInt(limit))
  ) {
    return redirect("/");
  }

  const data: QuestionType[] = await getQuestionsData(
    category,
    difficulty,
    limit
  );

  return (
    <div className="bg-blue-300 flex flex-grow w-full p-1 justify-center items-center">
      <QuestionMain
        category={category as CategoryType}
        difficulty={difficulty as DifficultyType}
        data={data}
        limit={limit}
      />
    </div>
  );
};

export default Questions;
