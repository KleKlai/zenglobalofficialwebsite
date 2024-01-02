import Link from "next/link";
import React from "react";

export default function NeedMoreSpeed() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-3xl tracking-wide font-semibold p-8 font-outfit antialiased lg:mt-14 text-4xl">
        Need more <span className="text-tertiary">speed</span>?
      </h1>
      <div className="text-center text-sm px-5 lg:w-1/3 lg:px-0">
        We understand that some families need internet speed to work, learn, and
        stream. Internet Essentials Plus has double the speed up to 100 Mbps
        plus free equipment for ₱1500/mo. No credit check. No cancellation fee.
        Chat with us to see if Internet Essentials Plus is right for you.
      </div>
      <div className="flex flex-wrap lg:space-x-8 p-5 justify-center">
        <CustomCard
          title="Internet Essentials"
          description="Php 599/mo"
          subDescription="Up to 50 Mbps"
          href=""
          linkTitle="Get Internet Essentials"
        />
        <CustomCard
          title="Internet Essentials Plus"
          description="Php 1500/mo"
          subDescription="Up to 100 Mbps"
          href=""
          linkTitle="Chat to order Internet Essentials Plus"
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
    <div className="rounded-lg overflow-hidden shadow-lg flex flex-col justify-start px-3 bg-gray-100 text-center my-5 lg:px-16">
      <h2 className="text-xl text-center mb-2 font-outfit font-bold mt-14 text-zinc-800">
        {title}
      </h2>
      <div className="h-1/2">
        <p className="text-center text-2xl py-5 font-roboto font-bold text-tertiary">
          {description}
        </p>
        <p className="text-center text-sm">{subDescription}</p>
        <p className="text-center text-sm mt-5">Free equipment, no credit check, and no term contract</p>
      </div>
      <div className="px-6 pt-6 pb-10 flex items-center justify-center">
        <Link
          href={href}
          className="inline-block border-2 rounded-lg p-4 font-medium xs:ml-0 md:ml-2 lg:ml-2 bg-zinc-800 text-white"
        >
          {linkTitle}
        </Link>
      </div>
    </div>
  );
};
