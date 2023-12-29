import Link from "next/link";
import React from "react";

export default function InternetThatsFitYourBudget() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-4xl tracking-wide font-semibold p-10 font-outfit antialiased">
        Internet that fits your budget
      </h1>

      <div className="flex flex-wrap lg:space-x-4 p-10 justify-center">
        <CustomCard
          title={["internet", <br key="internet-essentials"/>, "essentials"]}
          description="Fast. Reliable. Still under Php 600/mo."
          subDescription="Internet Essentials has been providing fast and reliable internet to a large number of low-income households for an extended period of time."
          link="What do I need to apply?"
        />
        <CustomCard
          title="Zenglobal | Prepaid"
          description="Only pay for the internet you need"
          subDescription="Get reliable internet at home. No annual contracts. No monthly
        bills. Simply prepay for your internet service."
          link="How does it work?"
        />
      </div>
    </div>
  );
}

type CustomCardProps = {
  title: string | (string | JSX.Element)[];
  description: string;
  subDescription: string;
  link: string;
};

const CustomCard = ({
  title,
  description,
  subDescription,
  link,
}: CustomCardProps) => {
  return (
    <div className="max-w-xl rounded-lg overflow-hidden shadow-lg flex flex-col justify-start px-20 bg-gray-100 text-center md:mt-20">
      <h2 className="text-xl text-center mb-2 font-natoSansRegular font-bold leading-normal text-tertiary mt-14">
        {title}
      </h2>
      <p className="text-center text-2xl py-10 font-roboto font-semibold">
        {description}
      </p>
      <p className="text-center">{subDescription}</p>
      <Link
        href={""}
        className="p-5 bg-black text-white rounded my-14 font-natoSansRegular font-semibold text-sm"
      >
        {link}
      </Link>
    </div>
  );
};
