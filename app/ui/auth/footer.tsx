import React from "react";
import {
    NewspaperIcon,
    DocumentMagnifyingGlassIcon,
    DocumentTextIcon,
    AdjustmentsHorizontalIcon,
    CubeTransparentIcon,
    LinkIcon,
  } from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  {
    name: "Web of Terms of Service",
    href: "/terms",
    icon: NewspaperIcon,
  },
  {
    name: "Notice of Collection",
    href: "",
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
    icon: DocumentTextIcon,
  },
  {
    name: "Your Privacy Choices",
    href: "/your-privacy-choices",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Ad Choices",
    href: "/ad-choice",
    icon: CubeTransparentIcon,
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col fixed bottom-0 w-full">
      <footer className="w-full text-zinc-800">

        <p className="mt-4 text-zinc-800 font-roboto font-regular text-center block lg:hidden">
          &copy; 2023 Zenglobal
        </p>

        <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white py-6 space-x-6">
          <li className="hidden lg:block">
            <p className="me-4 text-sm text-gray-800 font-roboto font-base">
              &copy; 2023 Zenglobal
            </p>
          </li>
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <li key={link.name}>
                <div className="flex flex-row text-zinc-800">
                  <LinkIcon className="w-4" />

                  <Link
                    href={link.href}
                    className="ml-1 me-4 font-roboto font-base xs:me-6 p-3 text-sm sm:me-6 md:me-6 lg:text-sm xl:text-sm 2xl:text-sm"
                  >
                    <p>{link.name}</p>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
}
