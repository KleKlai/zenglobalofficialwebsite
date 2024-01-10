import SignInForm from "@/app/ui/auth/signin/form";
import Link from "next/link";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Footer from "@/app/ui/auth/footer";

export default function page() {
  return (
    <div>
      <div className="p-4 lg:p-52">
        <div className="flex flex-col lg:w-1/3">
          <SignInForm />
          <div className="flex justify-between hover:bg-gray-200 py-4 mt-20 hover:cursor-pointer">
            <p className="font-normal font-outfit text-base px-4">
              Find your Zenglobal ID
            </p>
            <ChevronRightIcon className="h-6 w-6 text-gray-500 mr-6" />
          </div>
          <hr className="" />
          <div className="flex justify-between hover:bg-gray-200 py-4 hover:cursor-pointer">
            <p className="font-normal font-outfit text-base px-4">
              Create a new Zenglobal ID
            </p>
            <ChevronRightIcon className="h-6 w-6 text-gray-500 mr-6" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
