import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Tips() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <h2 className="text-3xl font-semibold font-outfit pb-14 px-10 text-tertiary tracking-wider text-center">
          Simple things you can do to protect your information
        </h2>
      </div>
      <div className="flex flex-wrap space-y-5 lg:space-y-0 lg:space-x-10 pb-10 px-6 justify-center">
        <Card className="flex flex-col items-center max-w-lg py-10 px-8">
          <CardHeader>
            <CardTitle className="text-center">
              Strengthen your passwords
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center font-normal font-notoSans">
              Check the strength of your passwords, store passwords safely, and
              employ best practices to keep your accounts secure.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center text-center">
            <Link
              href=""
              className="border-2 border-zinc-800 hover:bg-zinc-800 hover:text-white rounded-md"
            >
              <p className="py-2 px-7 font-medium">Update password</p>
            </Link>
          </CardFooter>
        </Card>
        <Card className="flex flex-col items-center max-w-lg py-10 px-8">
          <CardHeader>
            <CardTitle className="text-center">
              Enable two-step verification
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center font-normal font-notoSans">
              Use two-step verification to add an extra line of defense against
              potential threats to your online accounts.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link
              href=""
              className="border-2 border-zinc-800 hover:bg-zinc-800 hover:text-white rounded-md"
            >
              <p className="py-2 px-7 font-medium">Enable now</p>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
