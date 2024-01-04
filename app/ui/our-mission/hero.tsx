import React from "react";
import background from "@/public/images/background.jpg";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="h-1/2">
      <div
        className="relative bg-cover bg-center bg-no-repeat py-44 flex items-center justify-start"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1531536241097-b5c69a099e79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="absolute inset-0 right-0 w-3/4 bg-gradient-to-r from-white" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col space-y-5 text-center lg:text-left">
            <div>
              <p className="text-4xl font-semibold font-outfit uppercase text-gray-800">
                Our Mission
              </p>
            </div>
            <div>
              <p className="text-base font-outfit text-zinc-800 font-light lg:w-1/5">
                Low-Cost, High-Speed Internet for Low‑Income Households
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-1/2">
          <p className="text-2xl font-semibold font-outfit text-center lg:text-3xl py-8">
            A home Internet connection is more essential now than ever for
            today&apos;s families. Since its inception just a few years ago, Internet
            Essentials has already linked numerous filipino to the diverse array
            of opportunities offered by the Internet, spanning education, job
            skills training, and access to healthcare resources.
          </p>

          <p className="text-center text-sm font-outfit">
            We partner with local communities to pass on the importance of being
            connected and provide low‑cost Internet service (computers, too!)
            along with free training to safely unlock its potential. As the
            largest Internet adoption program in the nation, we stay true to our
            mission of empowering our customers and enriching communities with
            technology.
          </p>
        </div>
      </div>
    </div>
  );
}
