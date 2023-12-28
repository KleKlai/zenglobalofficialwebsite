import React from "react";

export default function InternetThatsFitYourBudget() {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="text-center text-4xl tracking-wide font-semibold mb-10 font-notoSans antialiased">
        Internet that fits your budget
      </h1>

      <div className="flex flex-row space-x-6 w-3/5">
        <div className="md:w-1/2 p-4 bg-gray-100 flex flex-col justify-center items-center rounded-lg">
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

        <div className="md:w-1/2 p-4 bg-gray-100 flex flex-col justify-center items-center rounded-lg">
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
