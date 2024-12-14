import Image from "next/image";
import QuestionConfig from "./components/Question/QuestionConfig";

export default function Home() {
  return (
    <div className="flex flex-grow w-full p-1 justify-center items-center bg-blue-300">
      <div className="h-auto bg-white w-full md:w-2/4 flex flex-col shadow-2xl rounded-3xl p-6 gap-4">
        <h1 className="text-3xl text-center text-slate-800 font-medium">
          Welcome to the Quzify
        </h1>
        <hr />
        <div className="flex flex-col sm:flex-row gap-3 w-full flex-grow">
          <div className="relative h-48 sm:h-auto w-full">
            <Image
              alt="human-brain"
              src="/human-brain.jpg"
              className="object-contain"
              fill
              sizes="100%"
              priority
            />
          </div>

          <QuestionConfig />
        </div>
      </div>
    </div>
  );
}
