"use client";

import Button from "@/components/UI/Button";
import React from "react";

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const handleTryAgain = () => {
    reset();
  };

  return (
    <div className="flex items-center justify-center flex-grow text-slate-800 bg-gray-200">
      <main className="text-center flex flex-col gap-4 items-center">
        <h1 className="text-8xl 3xl:text-9xl font-bold">Oops!</h1>
        <h2 className="text-slate-800 text-xl 3xl:text-2xl">{error.message}</h2>
        <Button color="info" onClick={handleTryAgain}>
          Try again
        </Button>
      </main>
    </div>
  );
}

export default Error;
