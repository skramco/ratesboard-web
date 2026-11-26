import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Ratesboard — Enterprise mortgage pricing engine",
    template: "%s · Ratesboard",
  },
  description:
    "Enterprise-grade mortgage pricing (PPE) for lenders, brokers, and lock desks. Fast, accurate, consistent pricing across every screen and channel.",
  icons: {
    icon: [
      { url: "/brand/favicon.ico" },
      { url: "/brand/ratesboard-icon-color.png", type: "image/png", sizes: "512x512" },
      { url: "/brand/ratesboard-icon-color.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/brand/ratesboard-icon-color-180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    images: [
      {
        url: "/brand/ratesboard-lockup-color.png",
        alt: "Ratesboard",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${plusJakarta.className}`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}