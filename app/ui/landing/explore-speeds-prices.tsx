"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SignalIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils"

const speeds = [
  {
    speed: "75",
    icon: SignalIcon,
    color: 'text-[#0065FF]'
  },
  {
    speed: "200",
    icon: SignalIcon,
    color: 'text-[#FB0045]'
  },
  {
    speed: "400",
    icon: SignalIcon,
    color: 'text-[#6138F5]'
  },
  {
    speed: "800",
    icon: SignalIcon,
    color: 'text-[#FFA700]'
  },
  {
    speed: "1000",
    icon: SignalIcon,
    color: 'text-[#3A8163]'
  },
  {
    speed: "1200",
    icon: SignalIcon,
    color: 'text-[#E64F00]'
  },
];

export default function ExploreSpeedsPrices() {
  return (
    <div className="p-5 bg-gray-100 text-center w-full">
      <h1 className="text-3xl font-bold pt-14 pb-5 tracking-wide font-notoSans">
        Explore speeds and prices
      </h1>
      <Link href="" className="text-sm">
        New to Zenglobal?{" "}
        <span className="underline underline-offset-8 decoration-indigo-500">
          Shop Internet
        </span>
      </Link>
      <div className="mt-5">
        <Button
          variant="outline"
          className="bg-gray-100 p-6 hover:bg-neutral-900 hover:text-white"
        >
          What is Internet speed?
        </Button>
      </div>
      <div className="flex justify-center flex-wrap py-10 max-w-30">
        <SpeedCarousel />
      </div>
      <div className="flex items-center justify-center">
        <InternetPlan />
      </div>
    </div>
  );
}

function SpeedCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("slidesChanged", () => {
      // Do something on select.
      console.log(api);
    });
  }, [api]);
  return (
    <Carousel
      opts={{
        align: "center",
        loop: false,
        trimSnaps: true,
        startIndex: 3,
      }}
      className="w-full max-w-min"
      setApi={setApi}
    >
      <CarouselContent className="px-10">
        {speeds.map((speed, index) => {
          const LinkIcon = speed.icon;
          return (
            <CarouselItem
              key={speed.speed}
              className="pl-2 xs:basis-1 sm:basis-1 md:basis-1/2 lg:basis-1/3 py-10"
            >
              <div className="p-1">
                <Card className="transform transition-all duration-300 hover:scale-110 hover:border-indigo-500">
                  <CardContent className="flex flex-col aspect-square items-center justify-center">
                    <LinkIcon className={cn("w-4 pb-5", speed.color)} />
                    {/* <LinkIcon className="w-4 pb-5 text-green-500" /> */}
                    <p className="text-3xl font-bold">{speed.speed}</p>
                    <p className="py-4">Mbps</p>
                    <p className="font-normal text-slate-500 text-xs">
                      Check availability for starting at price
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const InternetPlan = () => {
  return (
    <div className="flex p-10 bg-white rounded-xl shadow-lg">
      <div className="w-1/3">
        <Image
          src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={150}
          height={150}
          alt="Person wearing virtual reality goggles"
          className="rounded-full w-15 h-15"
        />
      </div>
      <div className="w-1/2 px-5 text-left">
        <h2 className="text-base font-bold mb-5">1200 Mbps is good for</h2>
        <ul className="list-none list-inside text-left">
          <li className="flex items-center">
            <CheckIcon className="w-5 h-5 text-tertiary mr-2" />
            Unlimited devices
          </li>
          <li className="flex items-center">
            <CheckIcon className="w-5 h-5 text-tertiary mr-2" />
            Ultra-connected households
          </li>
          <li className="flex items-center">
            <CheckIcon className="w-5 h-5 text-tertiary mr-2" />
            Pro-level gaming
          </li>
          <li className="flex items-center">
            <CheckIcon className="w-5 h-5 text-tertiary mr-2" />
            Staying ahead of the curve
          </li>
        </ul>
      </div>
      <div className="w-1/3 flex flex-col">
        <h3 className="text-lg font-semibold text-left pb-5">
          Check availability or manage current plan
        </h3>
        <button className="px-4 py-3 text-white font-semibold bg-tertiary rounded hover:bg-purple-900">
          See pricing in your area
        </button>
      </div>
    </div>
  );
};
