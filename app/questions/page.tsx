import Question from "@/components/Question/Question";
import QuestionScoreLimit from "@/components/Question/QuestionScoreLimit";
import Divider from "@/components/UI/Divider";
import { QuestionType } from "@/lib/definitions";
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
    `${process.env.HTTP_URL}?categories=${category}&limit=${limit}&difficulty=${difficulty}`,
    {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );

  if (!res.ok) {
    toast.error("Failed to fetch questions. PLease try again later.");
  }

  return res.json();
}

const Questions = async ({
  searchParams: { category, difficulty, limit },
}: PropsType) => {
  const data: QuestionType[] = await getQuestionsData(
    category,
    difficulty,
    limit
  );

  return (
    <div className="bg-blue-300 flex flex-grow w-full p-1 justify-center items-center">
      <div className="h-auto w-full md:w-2/4 flex flex-col justify-between bg-white shadow-2xl rounded-lg p-4 gap-2">
        <QuestionScoreLimit categoryData={category} limitData={limit} />
        <Divider />
        <Question questionData={data[0]} />
      </div>
    </div>
  );
};

export default Questions;
