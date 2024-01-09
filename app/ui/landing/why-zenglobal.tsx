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
import lowLag from '@/public/images/landing/low-lag.avif'
import stayConnected from '@/public/images/landing/stay-connected.avif'
import rewards from '@/public/images/landing/rewards.avif'

export default function WhyZenglobal() {
  return (
    <div className="flex flex-col items-center">
        <div className="p-10">
            <h1 className="font-outfit font-semibold text-3xl antialiased md:text-4xl">Why Zenglobal?</h1>
        </div>
      <div className="flex flex-wrap lg:space-x-4 p-10 justify-center">
        <CustomCard
          src={lowLag}
          alt="Persons laughing while playing smartphone"
          title="Experience ultra-low lag with gig-speed WiFi"
          description="Based on median latency of 20 milliseconds or below for Zenglobal gigabit Internet customers with Zenglobal Gateway as measured by Zenglobal Speed Test."
          footer="Gig Internet"
        />
        <CustomCard
          src={stayConnected}
          alt="Two person playing and laughing"
          title="Stay connected with Zenglobal WiFi hotspots"
          description="Zenglobal Internet gives you access to secure WiFi hotspots to keep you connected on the go."
          footer="WiFi 101"
        />
        <CustomCard
          src={rewards}
          alt="Person smiling"
          title="Zenglobal Rewards"
          description="Zenglobal Rewards is our way of saying thanks for being a customer. There's no cost to join, no points to track, and signing up is just a few clicks away."
          footer="Explore Rewards"
        />
      </div>
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
        <Link href="" className="inline-block text-center border-2 w-1/2 rounded-lg py-3 px-2 font-semibold xs:ml-0 md:ml-2 lg:ml-2 hover:bg-zinc-800 hover:border-zinc-800 hover:text-white">
          {footer}
        </Link>
      </div>
    </div>
  );
};
