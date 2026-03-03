import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import { ThemeProvider } from "@/provider/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { SmoothScrollProvider } from "@/provider/smooth-scroll";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: "AI YouTube Thumbnail Generator & Tag Tool | Free Creator Suite",
  description:
    "Generate high-CTR YouTube thumbnails, tags, and keywords instantly using AI. Free tools for creators to boost rankings, views, and channel growth.",
  keywords: [
    "ai thumbnail generator",
    "youtube thumbnail generator",
    "youtube tag generator",
    "youtube keyword generator",
    "free youtube seo tools",
    "ai tools for creators",
    "youtube growth tools",
  ],

  openGraph: {
    title: "ThumbAI – AI Thumbnail & YouTube SEO Tools",
    description:
      "Create high-converting thumbnails and optimized SEO tags using AI.",
    url: "https://ai-thumbnail-generator-five.vercel.app",
    siteName: "ThumbAI",
    images: [
      {
        url: "/og-image.png", // create this image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ThumbAI – AI Thumbnail & SEO Generator",
    description: "Generate thumbnails, tags, and keywords instantly using AI.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased `}      >
        <ClerkProvider>
          <SmoothScrollProvider>
            <Navbar />``
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
