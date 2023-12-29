import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function WhyZenglobal() {
  return (
    <div className="flex flex-col items-center">
        <div className="p-10">
            <h1 className="font-outfit font-semibold text-3xl antialiased md:text-4xl">Why Zenglobal?</h1>
        </div>
      <div className="flex flex-wrap lg:space-x-4 p-10 justify-center">
        <CustomCard
          src="https://images.unsplash.com/photo-1565870100382-f0a510db3cd1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Person wearing virtual reality goggles"
          title="Experience ultra-low lag with gig-speed WiFi"
          description="Based on median latency of 20 milliseconds or below for Zenglobal gigabit Internet customers with Zenglobal Gateway as measured by Zenglobal Speed Test."
          footer="Gig Internet"
        />
        <CustomCard
          src="https://images.unsplash.com/photo-1565869812436-a480bda13b6b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Person wearing virtual reality goggles"
          title="Stay connected with Zenglobal WiFi hotspots"
          description="Zenglobal Internet gives you access to secure WiFi hotspots to keep you connected on the go."
          footer="WiFi 101"
        />
        <CustomCard
          src="https://images.unsplash.com/photo-1627199219038-e8263f729e3d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Person wearing virtual reality goggles"
          title="Zenglobal Rewards"
          description="Zenglobal Rewards is our way of saying thanks for being a customer. There's no cost to join, no points to track, and signing up is just a few clicks away."
          footer="Explore Rewards"
        />
      </div>
    </div>
  );
}

const CustomCard = ({ src, alt, title, description, footer }: any) => {
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
        <div className="text-gray-800 font-outfit font-bold text-center text-xl mb-6 antialiased">
          {title}
        </div>
        <p className="text-gray-700 text-sm font-notoSans font-normal text-center">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-10 flex items-center justify-center">
        <button className="inline-block border-2 w-1/2 rounded-lg py-3 font-semibold xs:ml-0 md:ml-2 lg:ml-2 hover:bg-zinc-800 hover:text-white">
          {footer}
        </button>
      </div>
    </div>
  );
};
