import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Hippo",
  description:
    "Digital Marketplace developed with Next.js, React, tRPC, Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased relative h-full`,
        )}
      >
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
