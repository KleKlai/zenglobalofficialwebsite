import Hero from "@/app/ui/your-privacy-your-choices/hero";
import PrivacyCard from "@/app/ui/your-privacy-your-choices/privacy-card";
import Tips from "@/app/ui/your-privacy-your-choices/tips";
import React from "react";

export default function YourPrivacyChoices() {
  return (
    <div>
      <Hero />
      {/* lg:flex-row px-72 py-20 space-x-5 */}
      <div className="flex flex-wrap space-y-5 m-4">
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
        <Tips />
      </div>
    </div>
  );
}
