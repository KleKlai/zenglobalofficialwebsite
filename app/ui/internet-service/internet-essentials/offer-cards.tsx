import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import lowcostcomputer from "@/public/images/offers/lowcostcomputer.avif";
import partnership from "@/public/images/offers/partnership.avif";

export default function OfferCards() {
  return (
    <div className="flex flex-wrap lg:space-x-4 pb-10 px-6 justify-center">
      <CustomCard
        src={lowcostcomputer}
        alt="Person wearing virtual reality goggles"
        title="Buy a new laptop for Php 8,254"
        description="Once you’re an Internet Essentials or Internet Essentials Plus customer, you’re eligible to purchase a new Dell laptop or Chromebook for just Php 8,254 plus tax. Follow a few simple steps to get started."
        footer="Learn more"
      />
      <CustomCard
        src={partnership}
        alt="Person wearing virtual reality goggles"
        title="Our partnership program"
        description="The Internet Essentials Partnership Program (IEPP) is uniquely designed to support the ECF program."
        footer="Become a sponsor now"
      />
    </div>
  );
}

type CustomCardProps = {
  src: string | StaticImageData;
  alt: string;
  title: string;
  description: string;
  footer: string;
};

const CustomCard = ({ src, alt, title, description, footer }: CustomCardProps) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg flex flex-col justify-start my-5 sm:mt-10">
      <Image
        className="w-full h-64 object-cover object-center"
        src={src}
        alt={alt}
        width={500}
        height={500}
      />
      <div className="px-6 py-4">
        <div className="text-zinc-800 font-outfit font-bold text-center text-xl mb-6 antialiased">
          {title}
        </div>
        <p className="text-gray-900 text-sm font-normal text-center font-roboto px-5">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-10 flex items-center justify-center">
        <Link
          href=""
          className="inline-block text-center border-2 w-1/2 rounded-lg py-3 px-2 font-semibold xs:ml-0 md:ml-2 lg:ml-2 hover:bg-zinc-800 hover:border-zinc-800 hover:text-white"
        >
          {footer}
        </Link>
      </div>
    </div>
  );
};
