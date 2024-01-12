import React from "react";

export default function loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex space-x-2 justify-center items-center dark:invert">
        <span className="sr-only">Loading...</span>
        <div className="h-4 w-4 bg-tertiary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-4 w-4 bg-tertiary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-4 w-4 bg-tertiary rounded-full animate-bounce"></div>
      </div>
      <h1 className="font-medium pt-4 text-lg font-outfit">
        One moment please...
      </h1>
    </div>
  );
}
