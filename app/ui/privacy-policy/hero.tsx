import React from "react";
import background from "@/public/images/background.jpg";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="h-4/5">
      <div
        className="relative bg-cover bg-center bg-no-repeat py-52 flex items-center justify-start"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col space-y-5 text-center lg:text-left">
            <div>
              <p className="text-3xl font-semibold font-outfit text-white lg:text-white">
              Our Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
