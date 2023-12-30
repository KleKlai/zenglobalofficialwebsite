import Link from "next/link";
import React from "react";

export default function InternetThatsFitYourBudget() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-3xl tracking-wide font-semibold p-8 font-outfit antialiased lg:mt-14 text-4xl">
        Internet that fits your budget
      </h1>

      <div className="flex flex-wrap lg:space-x-4 p-5 justify-center">
        <CustomCard
          title={["internet", <br key="internet-essentials" />, "essentials"]}
          description="Fast. Reliable. Still under Php 600/mo."
          subDescription="Internet Essentials has been providing fast and reliable internet to a large number of low-income households for an extended period of time."
          href=""
          linkTitle="What do I need to apply?"
        />
        <CustomCard
          title="Zenglobal | Prepaid"
          description="Only pay for the internet you need"
          subDescription="Get reliable internet at home. No annual contracts. No monthly
        bills. Simply prepay for your internet service."
          href=""
          linkTitle="How does it work?"
        />
      </div>
    </div>
  );
}

type CustomCardProps = {
  title: string | (string | JSX.Element)[];
  description: string;
  subDescription: string;
  href: string;
  linkTitle: string;
};

const CustomCard = ({
  title,
  description,
  subDescription,
  href,
  linkTitle,
}: CustomCardProps) => {
  return (
    <div className="max-w-xl rounded-lg overflow-hidden shadow-lg flex flex-col justify-start px-3 bg-gray-100 text-center my-5 lg:px-16">
      <h2 className="text-xl text-center mb-2 font-natoSansRegular font-bold leading-normal text-tertiary mt-14">
        {title}
      </h2>
      <div className="h-1/2">
        <p className="text-center text-2xl py-10 font-roboto font-semibold">
          {description}
        </p>
        <p className="text-center">{subDescription}</p>
      </div>
      <div className="px-6 pt-4 pb-10 flex items-center justify-center">
        <Link
          href={href}
          className="inline-block border-2 w-1/2 rounded-lg py-3 font-semibold xs:ml-0 md:ml-2 lg:ml-2 bg-zinc-800 text-white"
        >
          {linkTitle}
        </Link>
      </div>
    </div>
  );
};
