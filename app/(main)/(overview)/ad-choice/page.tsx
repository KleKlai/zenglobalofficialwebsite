import {
  ParagraphSubTitle,
  ParagraphText,
  ParagraphTitle,
} from "@/app/ui/typography";
import Link from "next/link";
import React from "react";

export default function AdChoice() {
  return (
    <div className="text-justify py-5 font-notoSans leading-7 text-zinc-800 px-10 lg:px-72">
      <ParagraphTitle title="Internet-Based Advertising" />
      <ParagraphText>
        Our sites enable cookies and other technologies that comply with the
        DAA&apos;s AdChoices program (see our Cookie Notice). For more information or
        to opt out of receiving targeted advertising from participating
        third-party advertisers, click on the Ad Choices icon below. After you
        opt out, you will still see advertisements, but they may not be as
        relevant to you.
      </ParagraphText>
      <ParagraphText className="py-10">
        Other video content partners may present customized ads based on
        information they collect through their own pixels, cookies, and other
        technologies. These ads may appear in videos you watch in a content
        provider&apos;s video player or elsewhere on Zenglobal websites, applications,
        or platforms. These companies collect and use information under their
        own privacy policies. More information about these companies, their
        privacy policies, and the opt-outs they offer can be found here:
      </ParagraphText>
      <ParagraphText>
        <span className="font-medium text-base">Mobile Settings: </span> You may
        manage the collection of information for personalized advertising
        purposes in mobile apps via the device&apos;s settings, including managing
        the collection of location data.
      </ParagraphText>
      <ParagraphText className="mt-4 mb-20">
        <span className="font-medium text-base">Cross-Device Tracking: </span>{" "}
        If you would like to opt out of browser-based cross-device tracking for
        advertising purposes, you may do so by opting out using the various
        methods described above. You must opt out separately on each device and
        each browser that you use. For more information about cross-device
        matching, please visit the{" "}
        <Link
          href="http://www.networkadvertising.org/mobile-choice"
          className="underline text-blue-600 cursor-pointer"
          target="_blank"
        >
          Network Advertising Initiative
        </Link>{" "}
        or the{" "}
        <Link
          href="https://digitaladvertisingalliance.org/sites/aboutads/files/DAA_files/DAA_Cross-Device_Guidance-Final.pdf"
          className="underline text-blue-600 cursor-pointer"
          target="_blank"
        >
          Digital Advertising Alliance.{" "}
        </Link>
        If you opt out of cross-device tracking for advertising purposes, we may
        still conduct cross-device tracking for other purposes, such as
        analytics.
      </ParagraphText>
    </div>
  );
}
