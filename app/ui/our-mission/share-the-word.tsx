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
import spreadtheword from '@/public/images/our-mission/spreadtheword.avif'

export default function ShareTheWord() {
  return (
    <div className="flex flex-wrap lg:space-x-4 pb-10 px-6 justify-center">
      <CustomCard
        src={spreadtheword}
        alt="Person wearing virtual reality goggles"
        title="Spread The Word"
        subTitle="Help spread the word about Internet Essentials:"
        description="Do you have a friend or family member that might be eligible for Internet Essentials? Be sure to let them know about the program so they can enjoy the benefits of affordable, high-speed internet at home!"
        footer="Share Now"
      />
    </div>
  );
}

type CustomCardProps = {
  src: string | StaticImageData;
  alt: string;
  title: string;
  subTitle: string;
  description: string;
  footer: string;
};

const CustomCard = ({ src, alt, title, subTitle, description, footer }: CustomCardProps) => {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg flex flex-col justify-start my-5 sm:mt-10">
      <Image
        className="w-full h-74 object-cover object-center"
        src={src}
        alt={alt}
        width={500}
        height={500}
      />
      <div className="px-6 py-6 text-center">
        <div className="text-zinc-800 font-outfit font-bold text-center text-xl mb-6 antialiased">
          {title}
        </div>
        <span className="font-medium text-center">{subTitle}</span>

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
