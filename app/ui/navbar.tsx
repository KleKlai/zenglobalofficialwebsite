import Link from "next/link";
import React from "react";

import {
  PhoneArrowUpRightIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const links = [
  {
    name: "Internet",
    href: "/internet-service",
  },
  {
    name: "Low-Cost Computer",
    href: "/low-cost-computer",
  },
  {
    name: "Home Security",
    href: "/home-security",
  },
  {
    name: "Learning Center",
    href: "/learning-center",
  },
  {
    name: "Our Mission",
    href: "/our-mission",
  },
];
export default function Navbar() {
  return (
    <div className="mx-auto from-blue-gray-900 to-blue-gray-800 px-4 py-3">
      <div className="flex flex-wrap items-center justify-center">
        <div>
          <p>Logo</p>
        </div>
        <div>
          <ul className="flex flex-wrap space-x-3">
            {links.map((link) => {
              return (
                <li key={link.name}>
                  <div className="flex flex-row">
                    <Link
                      key={link.name}
                      href={link.href}
                      className="ml-1 me-4 font-helvetica xs:me-6 p-3 text-sm sm:me-6 md:me-6 lg:text-sm xl:text-sm 2xl:text-[15px]"
                    >
                      <p className="link link-underline link-underline-black text-slate-800 pb-2 tracking-wide">
                        {link.name}
                      </p>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger>
              <PhoneArrowUpRightIcon className="h-5 w-5 mx-4 mb-1 cursor-pointer" />
            </HoverCardTrigger>
            <HoverCardContent sideOffset={0} className="">
              <div className="rounded-xl ">
                <button className="w-full text-left py-4 px-4 hover:rounded-t-xl hover:bg-slate-200">
                  Order Online Now
                </button>
                <button className="w-full text-left py-4 px-4 hover:rounded-b-xl hover:bg-slate-200">
                  Call to Order: 855-870-1311
                </button>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger>
              <ShoppingCartIcon className="h-5 w-5 mx-4 mb-1 cursor-pointer border-none" />
            </HoverCardTrigger>
            <HoverCardContent sideOffset={0} className="bg-neutral-800 text-white py-4 px-4 border-neutral-800">
              Cart
            </HoverCardContent>
          </HoverCard>

          <Link
            href="/auth/signin"
            className="ml-1 me-4 font-helvetica xs:me-6 p-3 text-sm sm:me-6 md:me-6 lg:text-sm xl:text-sm 2xl:text-[15px]"
          >
            <p className="link link-underline link-underline-black text-slate-800 pb-2 tracking-wide">
              Sign In
            </p>
          </Link>
        </div>
      </div>

      <hr className="" />
    </div>
  );
}
