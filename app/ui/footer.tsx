import React from "react";
import Link from "next/link";
import {
  NewspaperIcon,
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
  AdjustmentsHorizontalIcon,
  CubeTransparentIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

const links = [
  {
    name: "Web of Terms of Service",
    href: "",
    icon: NewspaperIcon,
  },
  {
    name: "Notice of Collection",
    href: "",
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: "Privacy Policy",
    href: "",
    icon: DocumentTextIcon,
  },
  {
    name: "Your Privacy Choices",
    href: "",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Ad Choices",
    href: "",
    icon: CubeTransparentIcon,
  },
];

const abouts = [
  {
    name: "About Comcast",
    href: "",
  },
  {
    name: "Comcast Business",
    href: "",
  },
  {
    name: "Careers",
    href: "",
  },
  {
    name: "Press Room",
    href: "",
  },
  {
    name: "Corporate Site",
    href: "",
  },
  {
    name: "Advertise with Us",
    href: "",
  },
  {
    name: "Sitemap",
    href: "",
  },
];

const services = [
  {
    name: "View and Pay Bill",
    href: "",
  },
  {
    name: "Xfinity Stream",
    href: "",
  },
  {
    name: "Discover Xfinity",
    href: "",
  },
  {
    name: "Run Internet Speed Test",
    href: "",
  },
  {
    name: "Find Xfinity Stores",
    href: "",
  },
  {
    name: "Move to a new Address",
    href: "",
  },
  {
    name: "Service in my Area",
    href: "",
  },
  {
    name: "NOW TV",
    href: "",
  },
  {
    name: "NOW Wifi",
    href: "",
  },
];

const policies = [
  {
    name: "Customer Guarantee",
    href: "",
  },
  {
    name: "Customer Agreements and Policies",
    href: "",
  },
  {
    name: "Visitor Agreement!",
    href: "",
  },
  {
    name: "Xfinity Internet Broadband Disclosures",
    href: "",
  },
  {
    name: "Privacy Center",
    href: "",
  },
  {
    name: "Social Responsibility",
    href: "",
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col h-screen">
      <footer className="fixed bottom-0 w-full bg-neutral-900 text-white">
        <div className="bg-zinc-800 py-10">
          <div className="grid grid-cols-3 gap-1 mx-[35rem] justify-center font-natoSansRegular font-regular text-sm p-1">
            <div>
              <h3 className="mb-5 text-base font-semibold font-natoSansRegular">
                About Us
              </h3>
              <ul className="space-y-2">
                {abouts.map((about) => {
                  return (
                    <li>
                      <Link
                        key={about.name}
                        href={about.href}
                        className=""
                      >
                        <p className="hidden md:block">{about.name}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-base font-semibold font-natoSansRegular">
                Services
              </h3>
              <ul className="space-y-2">
                {services.map((service) => {
                  return (
                    <li>
                      <Link
                        key={service.name}
                        href={service.href}
                        className=""
                      >
                        <p className="hidden md:block">{service.name}</p>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-base font-semibold font-natoSansRegular">
                Policies
              </h3>
              {/* Add your links here */}
              <ul className="space-y-2 text-wrap">
                {policies.map((policy) => {
                  return (
                    <li>
                      <Link
                        key={policy.name}
                        href={policy.href}
                        className=""
                      >
                        <p className="hidden md:block">{policy.name}</p>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

        <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white py-6 space-x-6">
          <li>
            <p className="me-4 text-sm text-gray-300 font-natoSansRegular font-regular md:me-6">
              &copy; 2023 Zenglobal
            </p>
          </li>
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <li>
                <div className="flex flex-row">
                  <LinkIcon className="w-5" />

                  <Link
                    key={link.name}
                    href={link.href}
                    className="ml-2 me-4 font-natoSansRegular font-regular text-sm md:me-6 "
                  >
                    <p className="hidden md:block">{link.name}</p>
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
