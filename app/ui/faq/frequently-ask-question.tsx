import React from "react";
import background from "@/public/images/background.jpg";

export default function FrequentlyAskQuestion() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16 flex items-center justify-start h-screen"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <div className="absolute inset-0 right-0 w-1/2 bg-gradient-to-r from-white" />
      <div className="container mx-auto px-4 relative">
        <div className="text-left">
          <h2 className="text-2xl font-semibold uppercase tracking-wide text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-800">
            How can we help you?
          </p>
        </div>
      </div>
    </div>
  );
}
