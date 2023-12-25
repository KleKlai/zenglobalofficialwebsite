import Link from "next/link";
import React from "react";

import {
  PhoneArrowUpRightIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const links = [
  {
    name: "Internet",
    href: "",
  },
  {
    name: "Low-Cost Computer",
    href: "",
  },
  {
    name: "Home Security",
    href: "",
  },
  {
    name: "Learning Center",
    href: "",
  },
  {
    name: "Our Mission",
    href: "",
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
          <PhoneArrowUpRightIcon className="h-5 w-5 mx-4 mb-1" />
          <ShoppingCartIcon className="h-5 w-5 mx-4 mb-1" />
          <Link
            href=""
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
