import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BloomNow Coaching | Executive Coaching for Leaders",
  description:
    "Lisa Bloom is an executive coach with 25+ years of experience. She helps leaders navigate hard conversations, build confidence, and step into their next role.",
  openGraph: {
    title: "BloomNow Coaching",
    description: "Executive coaching for leaders ready for what's next.",
    url: "https://bloomnowcoaching.com",
    siteName: "BloomNow Coaching",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
