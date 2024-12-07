import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-grow text-slate-800">
      <main className="text-center flex flex-col items-center gap-5 max-w-xl 3xl:max-w-2xl">
        <h1 className="text-8xl 3xl:text-9xl font-bold">Oops!</h1>
        <h3 className="text-4xl 3xl:text-5xl">404 - PAGE NOT FOUND</h3>
        <p className="text-wrap text-md 3xl:text-xl">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link href="/" className="btn btn-wide btn-info text-gray-100">
          GO TO HOMEPAGE
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
