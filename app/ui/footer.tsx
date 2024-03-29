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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const links = [
  {
    name: "Web of Terms of Service",
    href: "/terms",
    icon: NewspaperIcon,
  },
  // {
  //   name: "Notice of Collection",
  //   href: "",
  //   icon: DocumentMagnifyingGlassIcon,
  // },
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

const abouts = [
  {
    name: "About Oro Dragon",
    href: "",
  },
  {
    name: "Oro Dragon Business",
    href: "",
  },
  {
    name: "Careers",
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
];

const services = [
  {
    name: "View and Pay Bill",
    href: "",
  },
  {
    name: "Discover Zenglobal",
    href: "",
  },
  {
    name: "Run Internet Speed Test",
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
    name: "ZENWiFi",
    href: "",
  },
  {
    name: "Secure my Home | Business",
    href: "",
  },
];

const policies = [
  {
    name: "Customer Guarantee",
    href: "policies/customer-guarantee",
  },
  {
    name: "Customer Agreements and Policies",
    href: "policies/customer-agreements-and-policies",
  },
  {
    name: "Visitor Agreement!",
    href: "policies/visitor-agreement",
  },
  {
    name: "Zenglobal Internet Broadband Disclosures",
    href: "policies/zenglobal-internet-broadband-disclosures",
  },
  {
    name: "Privacy Center",
    href: "policies/privacy-center",
  },
  {
    name: "Social Responsibility",
    href: "policies/social-responsibility",
  },
];

function AboutUsLink() {
  return (
    <ul className="space-y-2">
      {abouts.map((about) => {
        return (
          <li key={about.name}>
            <Link href={about.href} className="text-sm font-outfit font-normal">
              <p>{about.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function ServicesLink() {
  return (
    <ul className="space-y-2">
      {services.map((service) => {
        return (
          <li key={service.name}>
            <Link href={service.href} className="text-sm font-outfit font-normal">
              <p>{service.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function PoliciesLink() {
  return (
    <ul className="space-y-2 text-wrap">
      {policies.map((policy) => {
        return (
          <li key={policy.name}>
            <Link href={policy.href} className="text-sm font-outfit font-normal">
              <p>{policy.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Footer() {
  return (
    <div className="flex flex-col bottom-0">
      <footer className="w-full bg-neutral-900 text-white">
        <div className="bg-zinc-800 py-10 block lg:hidden">
          <FooterAccordion />
        </div>

        <div className="bg-zinc-800 py-10 hidden lg:block">
          <div className="grid grid-cols-3 gap-1 justify-center font-roboto font-normal text-base p-1 lg:mx-32 xl:mx-40 2xl:mx-[35rem]">
            <div>
              <h3 className="mb-5 text-lg font-semibold font-roboto">
                About Us
              </h3>
              <AboutUsLink />
            </div>

            <div>
              <h3 className="mb-5 text-lg font-semibold font-roboto">
                Services
              </h3>
              <ServicesLink />
            </div>

            <div>
              <h3 className="mb-5 text-lg font-semibold font-roboto">
                Policies
              </h3>
              <PoliciesLink />
            </div>
          </div>
        </div>

        <p className="mt-4 text-gray-300 font-roboto font-regular text-center block lg:hidden">
          &copy; 2024 Zenglobal
        </p>

        <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white py-6 space-x-6">
          <li className="hidden lg:block">
            <p className="me-4 text-base text-gray-300 font-roboto font-base">
              &copy; 2023 Zenglobal
            </p>
          </li>
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <li key={link.name}>
                <div className="flex flex-row text-white">
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

function FooterAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="px-10 w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold tracking-tight font-notoSans py-5">
          About Us
        </AccordionTrigger>
        <AccordionContent>
          <AboutUsLink />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-bold tracking-tight font-notoSans py-5">
          Services
        </AccordionTrigger>
        <AccordionContent>
          <ServicesLink />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-bold tracking-tight font-notoSans py-5">
          Policies
        </AccordionTrigger>
        <AccordionContent>
          <PoliciesLink />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
