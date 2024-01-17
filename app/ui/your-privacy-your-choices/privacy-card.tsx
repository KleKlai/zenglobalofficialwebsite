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

type PrivacyCardProps = {
  title: string;
  children: React.ReactNode;
  hrefTitle: string;
  href: string;
}
export default function PrivacyCard({title, children, hrefTitle, href}: PrivacyCardProps) {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle className="font-semibold font-outfit tracking-wide text-zinc-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-justify font-normal font-notoSans">
          {children}
        </p>
      </CardContent>
      <CardFooter>
        <Link href={href} className="text-tertiary font-semibold font-outfit">
          <p>{hrefTitle}</p>
        </Link>
      </CardFooter>
    </Card>
  );
}
