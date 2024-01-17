import Hero from "@/app/ui/your-privacy-your-choices/hero";
import PrivacyCard from "@/app/ui/your-privacy-your-choices/privacy-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function YourPrivacyChoices() {
  return (
    <div>
      <Hero />
      <div className="px-72 py-20 flex flex-row space-x-5">
        <PrivacyCard
          title="Sensitive personal information preferences"
          href="#"
          hrefTitle="Review settings"
        >
          We do not sell information that identifies who you are to anyone,
          including sensitive personal information like race, ethnicity,
          political affiliation, or philosophical beliefs. Sensitive personal
          information collected, used, or stored by Oro Dragon is used to
          support activities like personalized recommendations, marketing and
          advertising, and security and fraud monitoring. Customers may choose
          to limit use of this information for marketing, advertising, and new
          product development at any time.
        </PrivacyCard>
        <PrivacyCard
          title="Cookie preferences"
          href="#"
          hrefTitle="Manage cookies"
        >
          Like many companies, we use cookies and other common tracking
          technologies (Cookies) to improve our Services, optimize and analyze
          your experience on our Services, and serve ads relevant to your
          interests. Some of these uses may be considered a “sale” or “sharing”
          under certain state laws. You may choose which Cookies to allow and
          can change your preferences at any time.
          <br />
          Control which Cookies are stored by our websites in your browser and
          set preferences for how advertisers customize the ads you see on this
          device.
        </PrivacyCard>
        <PrivacyCard
          title="Download, delete, or correct your information"
          href="#"
          hrefTitle="Submit a request"
        >
          Certain states give their residents a legal right to download, delete,
          or correct their personal information, but all Zenglobal customers can
          make a request.
        </PrivacyCard>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="text-3xl font-semibold font-outfit pb-14 text-tertiary tracking-wider">
          Simple things you can do to protect your information
        </h2>
      </div>
      <div className="flex flex-wrap lg:space-x-10 pb-10 px-6 justify-center">
        <Card className="flex flex-col items-center max-w-lg py-10 px-8">
          <CardHeader>
            <CardTitle>Strengthen your passwords</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center font-normal font-notoSans">
              Check the strength of your passwords, store passwords safely, and
              employ best practices to keep your accounts secure.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="" className="border-2 border-zinc-800 hover:bg-zinc-800 hover:text-white rounded-md">
              <p className="py-2 px-7 font-medium">Update password</p>
            </Link>
          </CardFooter>
        </Card>
        <Card className="flex flex-col items-center max-w-lg py-10 px-8">
          <CardHeader>
            <CardTitle>Enable two-step verification</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center font-normal font-notoSans">
              Use two-step verification to add an extra line of defense against
              potential threats to your online accounts.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="" className="border-2 border-zinc-800 hover:bg-zinc-800 hover:text-white rounded-md">
              <p className="py-2 px-7 font-medium">Enable now</p>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
