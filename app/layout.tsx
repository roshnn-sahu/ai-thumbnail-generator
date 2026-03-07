import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import { ThemeProvider } from "@/provider/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { SmoothScrollProvider } from "@/provider/smooth-scroll";
import { BRAND_NAME } from "@/constants/brand";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://boltcreator.online"),

  title: "AI YouTube Thumbnail Generator, Tags & Keyword Tool | BoltCreator",

  description:
    "Free AI tools for creators. Generate YouTube thumbnails, tags, and keywords instantly to boost views, SEO rankings, and channel growth.",

  keywords: [
    "youtube thumbnail generator",
    "ai thumbnail generator",
    "youtube tag generator",
    "youtube keyword generator",
    "free youtube seo tools",
    "youtube growth tools",
  ],

  alternates: {
    canonical: "https://boltcreator.online",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title: "BoltCreator – AI Thumbnail & YouTube SEO Tools",
    description:
      "Create high-converting thumbnails and optimized YouTube tags using AI.",
    url: "https://boltcreator.online",
    siteName: "BoltCreator",
    images: [
      {
        url: "/favicon/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BoltCreator – AI YouTube Tools",
    description: "Generate thumbnails, tags, and keywords instantly using AI.",
    images: ["/favicon/web-app-manifest-512x512.png"],
  },

  verification: {
    google: "ECiuKUHEyE6Of3GwDwaDmaE4WfKr5gZrPQ-U7_Xcmo8",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BoltCreator",
              url: "https://boltcreator.online",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://boltcreator.online/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased `}>
        <ClerkProvider>
          <SmoothScrollProvider>
            <Navbar />
            {children}
            <Toaster />
            <Footer />
            <Analytics />
          </SmoothScrollProvider>
        </ClerkProvider>
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
