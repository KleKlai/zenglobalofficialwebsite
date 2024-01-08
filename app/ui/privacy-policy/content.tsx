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
import { cn } from "@/lib/utils";

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
                <strong>&quot;Personal Information&quot;</strong>includes any information
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
          when you otherwise interact with us. We&apos;ll refer to all of these as
          our &quot;Services&quot; in this Privacy Policy. It also applies to the
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
          information that identifies you &quot;personally identifiable information&quot;
          or &quot;PII.&quot;
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
              <h3 className="uppercase py-4 font-normal text-base">
                To understand your use of and make improvements to our services
              </h3>
              <ul className="list-disc ml-7 space-y-3 font-normal text-base mb-5">
                <li>Understand the use of our existing Services</li>
                <li>Identify and develop new products and services</li>
                <li>
                  Create measurement and analytics reports for us and others
                </li>
              </ul>
              <h3 className="uppercase py-4 font-normal text-base">
                To provide recommendations and deliver relevant advertising
              </h3>
              <ul className="list-disc ml-7 space-y-3 font-normal text-base mb-5">
                <li>Market the Services</li>
                <li>
                  Let you know which products and services we think may be of
                </li>
                <li>
                  Help third-party advertisers and programmers deliver more
                  relevant advertising on our Services and other services and
                  platforms
                </li>
              </ul>
              <h3 className="uppercase py-4 font-normal text-base">
                TO INVESTIGATE THEFT OR OTHER ILLEGAL ACTIVITIES, TO ENSURE A
                SECURE ONLINE ENVIRONMENT, AND TO PROTECT HEALTH AND SAFETY
              </h3>
              <ul className="list-disc ml-7 space-y-3 font-normal text-base mb-5">
                <li>Detect the unauthorized use, or abuse of the Services</li>
                <li>
                  Protect our customers from fraudulent, abusive, or unlawful
                  use of the Services
                </li>
                <li>Protect our rights, our personnel, and our property</li>
                <li>Comply with applicable law</li>
                <li>
                  To protect the health and safety of our customers, employees,
                  contractors, or the general public
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <ParagraphTitle title="When and with whom we share information" />
        <ParagraphText>
          You are in control of your data. We do not sell, and have never sold,
          information that identifies who you are to anyone. This includes your
          Internet usage information, video usage information, or call detail
          information. If you participate in offers that require us to disclose
          your identifiable data, we will, but only at your direction and with
          your consent.
        </ParagraphText>

        <ParagraphTitle title="When and with whom we share information" />
        <ParagraphText>
          You are in control of your data. We do not sell, and have never sold,
          information that identifies who you are to anyone. This includes your
          Internet usage information, video usage information, or call detail
          information. If you participate in offers that require us to disclose
          your identifiable data, we will, but only at your direction and with
          your consent.
        </ParagraphText>
        <ParagraphText className="mt-4">
          We share personal information with others when it&apos;s needed to provide
          you with our Services, including credit reporting agencies. We also
          share personal information with others:
        </ParagraphText>
        <ul className="list-disc ml-7 mt-4 space-y-3 font-normal text-base mb-5">
          <li>
            When you direct us to do so, including to authorize other users on
            your account
          </li>
          <li>When required by law or to respond to legal process</li>
          <li>
            To protect our property or rights or the safety of our employees,
            our customers, or other individuals
          </li>
        </ul>
        <TooltipProvider>
          If we share your personal information with other companies for their
          own marketing and advertising activities, we will first get your
          consent. This may be through{" "}
          <Tooltip>
            <TooltipTrigger className="underline text-blue-600 cursor-pointer">
              opt-in or opt-out settings,
            </TooltipTrigger>
            <TooltipContent>
              <p>
                For example, if we share personal information that does not
                personally identify you with others for their own use, we will
                first give you the choice to opt out of such sharing. In other
                instances, you may want us to share your name, physical address,
                or email address with another company, such as when you are
                signing up for a third-party service through one of our
                platforms, such as the X1, or Flex platform. In that
                instance, we will make sure you give us clear direction to do
                so, before we pass that information on.
              </p>
            </TooltipContent>
          </Tooltip>
          depending on the type of personal information shared.
        </TooltipProvider>
        <ParagraphText className="mt-4">
          We may also share personal information that does not identify you with
          third parties for their own marketing and advertising purposes, which
          you can opt out of. This mainly occurs when you interact with our
          websites and mobile applications that contain third-party cookies or
          other advertising trackers.
        </ParagraphText>

        <Accordion
          type="single"
          collapsible
          className="p-2 mt-4 bg-gray-100 rounded-md"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="pl-4">
              Learn more about when and with whom we share information
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <hr className="border-1 mt-4 border-zinc-800" />
              <AccordionContentTitle
                className="font-semibold"
                title="Account owners and other authorized users"
              />
              <AccordionContentParagraph>
                We may share information about a customer&apos;s account and use of a
                Service to the primary account owner following appropriate
                authentication. The primary account owner may also allow others
                to see information on the account.
              </AccordionContentParagraph>
              <hr className="border-1 mt-4 border-zinc-800" />
              <AccordionContentTitle
                className="font-semibold"
                title=" Service providers"
              />
              <AccordionContentParagraph>
                To provide and support the Services, sometimes we use other
                companies as service providers to transmit, collect, process, or
                store information for us. We require these service providers to
                treat the information we share with them as confidential and to
                use it only for providing their services to us. These include:
              </AccordionContentParagraph>
              <AccordionContentTitle
                className="font-semibold"
                title="BILLING AND COLLECTION PROVIDERS"
              />
              <AccordionContentParagraph>
                Such as payment processors and organizations that assist us in
                assessing your credit and payment status
              </AccordionContentParagraph>
              <AccordionContentTitle
                className="font-semibold"
                title="ACCOUNTING, AUDITING, AND TAX PROVIDERS"
              />
              <AccordionContentTitle
                className="font-semibold"
                title="PROFESSIONAL SERVICES PROVIDERS"
              />
              <AccordionContentParagraph>
                Such as firms that provide consultative services, assist with
                improving our programming, provide legal services, or supply
                project-based resources and assistance
              </AccordionContentParagraph>
              <AccordionContentTitle
                className="font-semibold"
                title="ANALYTICS SERVICES"
              />
              <AccordionContentParagraph>
                Including entities that analyze traffic to and on our websites,
                analyze how our Services are used, and assist with identifying
                and communicating with potential customers
              </AccordionContentParagraph>
              <AccordionContentTitle
                className="font-semibold"
                title="MARKETING, ADVERTISING, AND SALES"
              />
              <AccordionContentParagraph>
                Entities that assist us in creating and executing marketing,
                advertising, and sales programs, including order application
                processing, and printing, mailing, and electronic communications
                services
              </AccordionContentParagraph>
              <AccordionContentTitle
                className="font-semibold"
                title="SECURITY PROVIDERS"
              />
              <AccordionContentParagraph>
                Such as entities that assist with security incident verification
                and response, service notifications, fraud prevention, identity
                verification and management, and authentication
              </AccordionContentParagraph>
              <AccordionContentTitle
                className="font-semibold"
                title="INFORMATION TECHNOLOGY PROVIDERS"
              />
              <AccordionContentParagraph>
                Such as entities that assist with website design, hosting, and
                maintenance, data and software storage, and network operations
              </AccordionContentParagraph>
              <AccordionContentTitle
                className="font-semibold"
                title="CUSTOMER SERVICE SUPPORT"
              />
              <AccordionContentParagraph>
                Including services related to our call centers, installation,
                maintenance, and repair services
              </AccordionContentParagraph>

              <hr className="border-1 mt-4 border-zinc-800" />

              <AccordionContentTitle
                className="font-semibold"
                title="Third parties"
              />
              <AccordionContentParagraph>
                We do not sell, and have never sold, information that personally
                identifies who you are to anyone. Although permitted by federal
                law, we do not disclose your name and address to
                non-governmental entities, such as charities or businesses, for
                their own marketing purposes.
              </AccordionContentParagraph>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <ParagraphTitle title="How we protect your information" />
        <ParagraphText>
          We follow industry-standard practices to secure the information we
          collect to prevent the unauthorized access, use, or disclosure of any
          personal information we collect and maintain. These security practices
          include technical, administrative, and physical safeguards, which may
          vary, depending on the type and sensitivity of the information.
          Although we take the responsibility of safeguarding your personal
          information seriously, no security measures are 100% effective and we
          cannot guarantee that these practices will prevent every unauthorized
          attempt to access, use, or disclose your information. Zenglobal also
          takes additional steps to increase the security and reliability of
          customer communications. We do not read your outgoing or incoming
          email, file attachments, video mail, private chat, or instant
          messages. However, we (along with our service providers) use software
          and hardware tools to help prevent and block &quot;spam&quot; emails, viruses,
          spyware, and other harmful or unwanted communications and programs
          from being sent and received over Zenglobal.net email and the
          Zenglobal Services. To help protect you and the Services against these
          harmful or unwanted communications and programs, these tools may
          automatically scan your emails, video mails, instant messages, file
          attachments, and other files and communications. We do not use these
          tools for marketing or advertising.
        </ParagraphText>
        <ParagraphTitle title="How long we keep your information" />
        <ParagraphText>
          We keep your personal information for different lengths of time
          depending on the type of information and the business and legal
          requirements. For example, if you are a customer, we keep information
          that personally identifies you as long as you subscribe to one or more
          of our Services. If you no longer subscribe to a Service, we still may
          need that information for business and legal requirements, such as to
          protect against fraud, calculate taxes, or respond to legal requests.
          Other information is deleted automatically after a set period of time,
          often set by law, unless we are legally required to hold it longer,
          such as for pending litigation. We destroy, de-identify, or anonymize
          the information when it is no longer needed in identifiable form.
        </ParagraphText>
        <ParagraphTitle title="How to access and correct the information in our records" />
        <ParagraphText>
          Part of our commitment to transparency includes giving our customers
          access to the personal information we have about them. If you
          subscribe to our Services, you have the ability to see and correct
          your personally identifiable information through your online account
          services.
        </ParagraphText>
        <ParagraphTitle title="Changes to this Privacy Policy" />
        <ParagraphText>
          We may change this Privacy Policy over time as our business needs and
          those of our customers change. If we make material changes to this
          Privacy Policy that increase our rights to use personal information
          that we have previously collected about you, we will notify you
          through written, electronic, or other means so that you can make any
          necessary decisions about your ongoing use of our Services.
        </ParagraphText>
        <ParagraphTitle title="How to contact us with questions about this Privacy Policy" />
        <ParagraphText>
          Send us a message: legal@zenglobalics.com
          <br />
          Be sure to include your name and address, your Zenglobal account
          number (if applicable), and a daytime telephone number where we can
          reach you.
        </ParagraphText>
      </div>
    </div>
  );
}

type CommonProps = {
  className?: React.ReactNode;
  title: string;
};

type AccordionContentTitle = {
  className?: React.ReactNode;
  title: string;
};

type AccordionContentParagraph = {
  className?: React.ReactNode;
  children: React.ReactNode;
};

const ParagraphTitle = ({ className, title }: CommonProps) => {
  return <h1 className="font-semibold text-2xl py-5">{title}</h1>;
};

const ParagraphText = ({ children, className }: AccordionContentParagraph) => {
  return <p className={cn("", className)}>{children};</p>;
};

const AccordionContentTitle = ({ className, title }: AccordionContentTitle) => {
  return (
    <h3
      className={cn(
        "uppercase py-4 font-semibold text-base text-zinc-800",
        className
      )}
    >
      {title}
    </h3>
  );
};

const AccordionContentParagraph = ({
  className,
  children,
}: AccordionContentParagraph) => {
  return (
    <p className={cn("text-zinc-800 font-notoSans font-normal", className)}>
      {children};
    </p>
  );
};
