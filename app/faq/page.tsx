import { CallToAction } from "@/components/cta";
import Faq from "@/components/faq";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | BoltCreator AI Thumbnail Generator & YouTube SEO Tools",

  description:
    "Find answers to common questions about BoltCreator AI tools including the AI thumbnail generator, YouTube tag generator, and keyword research tools.",

  keywords: [
    "AI thumbnail generator FAQ",
    "YouTube tag generator questions",
    "YouTube SEO tools help",
    "BoltCreator FAQ",
    "AI YouTube tools support",
    "YouTube keyword generator help",
  ],

  alternates: {
    canonical: "https://boltcreator.online/faq",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "FAQ | BoltCreator AI Thumbnail Generator",
    description:
      "Get answers about BoltCreator AI thumbnail generator, tag extractor, and YouTube SEO tools.",
    url: "https://boltcreator.online/faq",
    siteName: "BoltCreator",
    type: "article",
  },

  twitter: {
    card: "summary",
    title: "BoltCreator FAQ",
    description:
      "Answers about BoltCreator AI tools, thumbnail generator, tags, and YouTube SEO.",
  },
};

  

const page = () => {
  return (
    <>
        
      <Faq />
      <CallToAction />
    </>
  );
};

export default page;
