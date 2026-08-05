import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Auction Watch — Copart & IAAI Buy Now alerts on Telegram",
    template: "%s · Auction Watch",
  },
  description: site.description,
  openGraph: {
    title: "Auction Watch",
    description: site.description,
    url: site.url,
    siteName: "Auction Watch",
    type: "website",
    images: [
      {
        url: "/images/hero-auction-lot.jpg",
        width: 1920,
        height: 1080,
        alt: "Auction lot at dusk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auction Watch",
    description: site.description,
    images: ["/images/hero-auction-lot.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
