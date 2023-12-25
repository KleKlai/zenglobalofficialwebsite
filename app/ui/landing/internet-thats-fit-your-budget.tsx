import React from "react";

export default function InternetThatsFitYourBudget() {
  return (
    <div className="p-4 mx-32">
      <h1 className="text-center text-3xl font-bold mb-10 font-natoSansRegular">
        Internet that fits your budget
      </h1>

      <div className="flex flex-col space-x-6 md:flex-row">
        <div className="w-full px-32 md:w-1/2 p-4 bg-gray-200 flex flex-col justify-center items-center rounded-lg">
          <h2 className="text-xl text-center mb-2 font-natoSansRegular font-bold leading-normal text-tertiary mt-14">
            internet<br/>essentials
          </h2>
          <p className="text-center text-2xl py-10 font-helvetica font-semibold">
            Fast. Reliable. Still under Php 600/mo.
          </p>
          <p className="text-center">
            Internet Essentials has connected millions of low-income households
            for years. See if you're eligible. There's no credit check.
          </p>
          <button className="p-5 bg-black text-white rounded my-14 font-natoSansRegular font-semibold text-sm">
            What do I need to apply?
          </button>
        </div>

        <div className="w-full px-40 md:w-1/2 p-4 bg-gray-200 flex flex-col justify-center items-center rounded-lg">
          <h2 className="text-xl text-center mb-2 font-natoSansRegular font-bold leading-normal  text-tertiary mt-14">
            Zenglobal | Prepaid
          </h2>
          <p className="text-center text-2xl py-10 font-helvetica font-semibold">Only pay for the internet you need</p>
          <p className="text-center">
            Get reliable internet at home. No annual contracts. No monthly
            bills. Simply prepay for your internet service.
          </p>
          <button className="p-5 bg-black text-white rounded my-14 font-natoSansRegular font-semibold text-sm">
            How does it work?
          </button>
        </div>
      </div>
    </div>
  );
}
