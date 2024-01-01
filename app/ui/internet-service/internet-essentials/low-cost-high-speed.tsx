import Link from "next/link";
import React from "react";
import WiFi from "@/public/assets/Stylized_Icon_Network_Wifi_green50.svg";

export default function LowCostHighSpeed() {
  return (
    <div className="h-4/5 flex items-center justify-center bg-slate-100">
      <div className="text-center w-1/3 py-20">
        <div className="flex items-center justify-center mb-10">
          <WiFi />
        </div>
        <h1 className="text-3xl font-outfit font-bold mb-4 text-green-600 tracking-wider">
          Low cost. <span className="text-black">High speed.</span>
        </h1>
        <p className="mb-6 text-gray-600">
        Internet Essentials provides fast and reliable internet to low-income households, helping them stay connected to the world. Get speeds up
          to 50 Mbps for only Php 599/mo — good for online learning, working from
          home, video calling, and other essentials.
        </p>
        <div className="mt-14">
          <Link
            href={""}
            className="bg-zinc-800 text-white font-semibold font-notoSans rounded-sm hover:bg-zinc-700 px-6 py-4"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}
