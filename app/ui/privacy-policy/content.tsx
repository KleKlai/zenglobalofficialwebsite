import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PrivacyPolicyContent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="py-8">
        <p className="font-notoSans font-normal">
          Effective January 1, 2024 |{" "}
          <span className="underline text-blue-600 cursor-pointer">
            Download PDF
          </span>
        </p>
      </div>
      <div className="text-justify px-72 py-5 font-notoSans leading-7 text-zinc-800">
        <h1 className="font-semibold text-2xl py-5">Introduction</h1>
        <TooltipProvider>
          <Tooltip>
            <p className="">
              We know you care about your privacy and the protection of your
              personal information. We also know it is our responsibility to be
              clear about how we protect your information. We designed this
              Privacy Policy to do just that. It explains the types of{" "}
              <TooltipTrigger className="underline text-blue-600 cursor-pointer">
                personal information
              </TooltipTrigger>{" "}
              we collect, and how we collect, use, maintain, protect, and share
              this information. This Privacy Policy also tells you about the
              rights and choices you may have when it comes to your personal
              information.
            </p>
            <TooltipContent>
              <p>
                <strong>"Personal Information"</strong>includes any information
                that is linked or reasonably linkable to you or your household.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p className="mt-4">
          Some of what we say in our Privacy Policy is required by law, and may
          at times seem long and complicated, but we’ve worked hard to try to
          make our Privacy Policy easy to understand and provide examples where
          possible.
        </p>
        <ul className="list-disc ml-10 py-5">
          <li>
            How to review and manage your personal information and account
            activity
          </li>
          <li>
            How to manage your preference, including setting your marketing and
            advertising preferences, and restricting certain uses and sharing
          </li>
          <li>How you can better protect yourself online</li>
        </ul>
        <h1 className="font-semibold text-2xl py-5">
          When the Privacy Policy applies
        </h1>
        <p className="">
          This Privacy Policy applies to the information we collect when you use
          or interact with the business entities, products, services, networks,
          and platforms, including our websites, mobile apps, and other services
          and devices where this policy is referenced. These may include
          Zenglobal-branded services, Oro Dragon branded Services and other
          products and services we deliver. This Privacy Policy also applies
          when you otherwise interact with us. We'll refer to all of these as
          our "Services" in this Privacy Policy. It also applies to the
          information we collect about you from third parties.
        </p>
        <h1 className="font-semibold text-2xl py-5">
          The personal information we collect and how we collect it
        </h1>
        <p className="">
          To provide you with our Services, we collect your personal
          information. This can include information that does not personally
          identify you - such as device numbers, IP addresses, and account
          numbers. It may also include information that does personally identify
          you, such as your name, address, and telephone number. We call any
          information that identifies you "personally identifiable information"
          or "PII."
        </p>
        <TooltipProvider>
          <Tooltip>
            <p className="mt-4">
              If you allow others to use your Services, we will also collect
              personal information about those individuals. If you use our
              Services through someone else’s account, we will collect
              information about you, but it may not identify who you are to us.
              We may also collect information about you from{" "}
              <TooltipTrigger className="underline text-blue-600 cursor-pointer">
                third parties.
              </TooltipTrigger>
            </p>

            <TooltipContent>
              <p>
                Third parties are other companies that collect or maintain
                information about you and share it with us, such as credit
                bureaus who share information with us when you sign up for
                service and consent to a credit check.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="mt-4" />
        <TooltipProvider>
          We collect this information to provide our Services, communicate with
          you,{" "}
          <Tooltip>
            <TooltipTrigger className="underline text-blue-600 cursor-pointer">
              respond to your requests
            </TooltipTrigger>
            <TooltipContent>
              <p>
                In order to provide better customer service, we keep track of
                when you contacted us, what the issue was and what is the best
                way to get in contact with you.
              </p>
            </TooltipContent>
          </Tooltip>
          , and to{" "}
          <Tooltip>
            <TooltipTrigger className="underline text-blue-600 cursor-pointer">
              tailor our Services
            </TooltipTrigger>
            <TooltipContent>
              <p>
                We collect data from third parties to better understand your
                interests and provide personalized offers.
              </p>
            </TooltipContent>
          </Tooltip>{" "}
          to best meet your needs and interests.
        </TooltipProvider>
        <Accordion
          type="single"
          collapsible
          className="p-2 mt-4 bg-gray-100 rounded-md"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="pl-4">
              Learn more about the information we collect and see examples
            </AccordionTrigger>
            <AccordionContent className="pl-4">
              <hr />
              <h3 className="uppercase py-4 font-normal text-base">
                To provide the services
              </h3>
              <ul className="list-disc ml-7 space-y-3 font-normal text-base mb-5">
                <li>Setting up your account and account management</li>
                <li>Measure credit and payment risk</li>
                <li>Service delivery</li>
                <li>Bill and invoice</li>
                <li>
                  Authenticate access to your account, including identity
                  verication
                </li>
                <li>
                  Management of the network and devices supporting our service
                  and our system, and other maintenance and operations
                </li>
                <li>Provide technical support</li>
                <li>
                  Help with hardware and software upgrades for devices and
                  systems
                </li>
              </ul>
              <hr />
              <h3 className="uppercase py-4 font-normal text-base">
                To communicate with you
              </h3>
              <ul className="list-disc ml-7 space-y-3 font-normal text-base mb-5">
                <li>Respond to your questions</li>
                <li>Personalize communications and your experience</li>
                <li>Send you service-related announcements and surveys</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
