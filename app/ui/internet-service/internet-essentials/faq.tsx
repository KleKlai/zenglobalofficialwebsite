import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-outfit font-semibold text-zinc-800 text-center">
        Questions? Here are the answers.
      </h1>
      <div className="text-base font-outfit bg-gray-100 m-4 px-20 mt-14 mb-14 text-zinc-800 lg:w-2/4">
        <Accordion type="single" className="py-10" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-semibold">
              What is Internet Essentials?
            </AccordionTrigger>
            <AccordionContent>
              Internet Essentials provides affordable home Internet for
              qualifying households (Php 599/mo for up to 50 Mbps, or Php
              1,500/mo for up to 100 Mbps) — as well as low-cost computers, free
              WiFi hotspots, and free Internet training
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold">
              Who is eligible for Internet Essentials?
            </AccordionTrigger>
            <AccordionContent>
              Internet Essentials provides affordable home Internet for
              qualifying households (Php 599/mo for up to 50 Mbps, or Php
              1,500/mo for up to 100 Mbps) — as well as low-cost computers, free
              WiFi hotspots, and free Internet training
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div></div>
      <div className="flex flex-col px-6 pt-6 pb-10 items-center justify-center text-center">
        <p>
          Have more questions about Internet Essentials? Our live specialists
          can help.
        </p>

        <Link
          href=""
          className="inline-block border-2 rounded-lg p-4 font-medium mt-6 xs:ml-0 md:ml-2 lg:ml-2 hover:bg-zinc-800 hover:border-zinc-800 hover:text-white"
        >
          Chat with an agent
        </Link>
      </div>
    </div>
  );
}
