import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zenglobal",
  description: "Find deals on fast, low-cost and reliable internet near you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
