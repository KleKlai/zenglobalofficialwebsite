import React from "react";
import background from "@/public/images/background.jpg";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="h-4/5">
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 flex items-center justify-start"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="absolute inset-0 right-0 w-3/4 bg-gradient-to-r from-white" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col space-y-5 text-center lg:text-left">
            <div>
              <h2 className="text-2xl font-semibold tracking-wide text-gray-800">
                internet <br /> essentials
              </h2>
            </div>

            <div>
              <p className="text-4xl font-bold text-gray-800">
                Fast. Reliable. Affordable.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-zinc-800">
                Home internet for Php 599/mo.
              </p>
            </div>
            <div>
              <p className="font-normal text-zinc-800">
                Includes equipment. No credit check. No cancellation fee.
              </p>
            </div>
            <div>
              <Button variant="default" className="text-1xl p-6">
                Get started
              </Button>
            </div>
            <div className="lg:w-1/3">
              <p className="text-xs font-normal">
                Restrictions apply. Not available in all areas. Limited to
                residential customers meeting certain eligibility criteria.
                Subject to Internet Essentials program terms and conditions.
                Professional installation extra. Advertised price applies to a
                single outlet. Actual speeds vary and are not guaranteed. <br />
                For factors affecting speed visit zenglobalics.com/networkmanagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
