import React from "react";
import LowCostHighSpeed from "../ui/internet-service/internet-essentials/low-cost-high-speed";
import NeedMoreSpeed from "../ui/internet-service/internet-essentials/need-more-speed";
import FAQ from "../ui/internet-service/internet-essentials/faq";

export default function Page() {
  return (
    <div>
      <LowCostHighSpeed />
      <NeedMoreSpeed />
      <FAQ />
    </div>
  );
}
