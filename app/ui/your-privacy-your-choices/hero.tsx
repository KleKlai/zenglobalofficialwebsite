import React from "react";

export default function Hero() {
  return (
    <div className="h-1/2">
      <div
        className="relative bg-cover bg-center bg-no-repeat py-44 flex items-center justify-start"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1620207418302-439b387441b0?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="absolute inset-0 right-0 w-3/4 bg-gradient-to-r from-white" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col space-y-5 text-center lg:text-left">
            <div className="lg:w-1/3">
              <p className="text-3xl font-semibold font-outfit text-gray-800">
                Your information, your privacy, your choices
              </p>
            </div>
            <div>
              <p className="text-base font-outfit text-zinc-800 font-light lg:w-1/3">
                Here, you can choose the privacy and communications settings
                that are right for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
