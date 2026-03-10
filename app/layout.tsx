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
    "AI Thumbnail Generator",
    "YouTube Thumbnail Generator",
    "Free AI Thumbnail Maker",
    "AI YouTube Thumbnail Maker",
    "YouTube SEO Tools",
    "YouTube Tag Generator",
    "YouTube Keyword Tool",
    "YouTube Tags Extractor",
    "YouTube Thumbnail Creator AI",
    "AI Thumbnail Maker for YouTube",
    "Generate YouTube Thumbnail with AI",
    "YouTube Tag Extractor Tool",
    "YouTube Keyword Research Tool",
    "AI Tools for YouTube Creators",
    "Best AI Thumbnail Generator",
    "YouTube SEO Keyword Generator",
    "Free AI Thumbnail Generator for YouTube",
    "AI Thumbnail Generator Without Watermark",
    "Best AI Thumbnail Maker for YouTube Creators",
    "Generate YouTube Tags Automatically",
    "YouTube SEO Tools for Beginners",
    "AI Tool for YouTube Thumbnails and Tags",
  ],
  alternates: {
    canonical: "https://boltcreator.online",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    images: ["/logo.png"],
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
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6832790493898716"
          crossOrigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-6832790493898716" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BoltCreator",
              url: "https://boltcreator.online",
              logo: "https://boltcreator.online/logo.png",
              applicationCategory: "AI Tool",
              operatingSystem: "Web",
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
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
        <ClerkProvider>
          <SmoothScrollProvider>
            <Navbar />
            {children}
            <Toaster />
            <Footer />
            <Analytics />
          </SmoothScrollProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
