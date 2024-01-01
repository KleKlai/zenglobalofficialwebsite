import Link from "next/link";
import React from "react";

export default function LowCostHighSpeed() {
  return (
    <div className="h-4/5 flex items-center justify-center bg-white">
      <div className="text-center w-1/3 py-20">
        <h1 className="text-3xl font-outfit font-bold mb-4 text-green-600 tracking-wider">
          Low cost. <span className="text-black">High speed.</span>
        </h1>
        <p className="mb-6 text-gray-600">
          Internet Essentials has connected over 10 million low-income
          households for over 10 years to fast, reliable internet. Get speeds up
          to 50 Mbps for only $9.99/mo — good for online learning, working from
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
