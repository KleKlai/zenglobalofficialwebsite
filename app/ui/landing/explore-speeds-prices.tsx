"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SignalIcon } from "@heroicons/react/24/outline";

const speeds = [
  {
    speed: "75",
    icon: SignalIcon,
  },
  {
    speed: "200",
    icon: SignalIcon,
  },
  {
    speed: "400",
    icon: SignalIcon,
  },
  {
    speed: "800",
    icon: SignalIcon,
  },
  {
    speed: "1000",
    icon: SignalIcon,
  },
  {
    speed: "1200",
    icon: SignalIcon,
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
        <span className="underline underline-offset-8 decoration-indigo-500">Shop Internet</span>
      </Link>
      <div className="mt-5">
        <Button
          variant="outline"
          className="bg-gray-100 p-6 hover:bg-zinc-900 hover:text-white"
        >
          What is Internet speed?
        </Button>
      </div>
      <div className="flex justify-center py-10">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-min"
        >
          <CarouselContent className="px-10">
            {speeds.map((speed) => {
              const LinkIcon = speed.icon;
              return (
                <CarouselItem key={speed.speed} className="pl-3 md:basis-1/2 lg:basis-1/3 py-10">
                  <div className="p-1">
                    <Card className="transform transition-all duration-300 hover:scale-110 hover:border-purple-500">
                      <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                        <LinkIcon className="w-4 pb-5 text-green-500" />
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
          <CarouselPrevious/>
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
