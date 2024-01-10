import Link from "next/link";
import React from "react";

export default function CheckAvailability() {
  return (
    <div className="flex flex-col items-center justify-center min-h-72 mb-5 w-full">
      <p className="text-center font-helvetica font-semibold xs:text-3xl md:py-14 px-10 py-5 lg:text-xl lg:py-10 2xl:text-3xl">
        Find deals on fast, low-cost and reliable internet near you
      </p>
      <div className="flex flex-col justify-center w-full max-w-3xl border-black px-5">
        <div className="flex flex-col w-full">
          <span className="text-xs text-slate-700 mb-2">
            Street address and apartment
          </span>
          <div className="flex flex-col sm:flex-row w-full">
            <input
              type="text"
              placeholder="123 Main St, Apt J, Davao City, 8000"
              className="w-full sm:w-4/5 border border-gray-300 rounded-lg py-2 px-4 mb-4 sm:mb-0"
            />
            <button className="bg-black text-white py-2 px-4 rounded-lg w-full xs:ml-0 sm:w-1/5 ml-2 md:ml-2 lg:ml-2">
              Check availability
            </button>
          </div>
        </div>
        <div className="">
          <p className="text-xs mt-8 text-center xs:my-10">
            Already a customer?{" "}
            <Link href="/signin" className="text-blue-500 underline">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
