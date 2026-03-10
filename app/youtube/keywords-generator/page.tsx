import HeroSection from "@/components/hero-section";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import KeywordForm from "@/components/youtube/keywords/keyword-from";
import { Feature43 } from "@/components/feature43";
import { Feature1 } from "@/components/feature1";
import Faq from "@/components/faq";
import { CallToAction } from "@/components/cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Keyword Generator | AI YouTube SEO Tool | BoltCreator",

  description:
    "Find high-ranking YouTube keywords instantly with BoltCreator's AI YouTube Keyword Generator. Discover low-competition keywords, search volume insights, and optimize your videos for better rankings.",

  keywords: [
    "youtube keyword generator",
    "youtube keyword research tool",
    "ai youtube keyword generator",
    "find youtube keywords",
    "low competition youtube keywords",
    "youtube search volume tool",
    "youtube seo keywords",
    "best keywords for youtube videos",
    "youtube keyword finder",
    "BoltCreator youtube keyword tool"
  ],

  alternates: {
    canonical: "https://boltcreator.online/youtube/keyword-generator",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "YouTube Keyword Generator | BoltCreator AI SEO Tool",
    description:
      "Discover trending and low-competition YouTube keywords with BoltCreator AI keyword generator.",
    url: "https://boltcreator.online/youtube/keyword-generator",
    siteName: "BoltCreator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoltCreator YouTube Keyword Generator",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "YouTube Keyword Generator | BoltCreator",
    description:
      "Generate high-ranking YouTube keywords instantly using BoltCreator AI.",
    images: ["/og-image.png"],
  },
};

const page = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="max-w-6xl mx-auto">
        <HeroGridPattern>
          <HeroSection
            badgeTitle="AI Keyword Research Tool →"
            title="Discover High-Ranking YouTube Keywords in Seconds"
            subTitle="Enter your video idea and get powerful keywords with search volume, competition score, and ranking difficulty — optimized to grow your channel."
          />
          <KeywordForm />
          <Feature43 />
        </HeroGridPattern>
        <Feature1
          title="AI-Powered Thumbnail Generation"
          imageSrc="/feature-img.png"
          imageAlt="AI Thumbnail Generator"
          buttonPrimary={{
            text: "Generate Thumbnail",
            href: "/youtube/ai-thumbnail-generator",
          }}
          buttonSecondary={{
            text: "Learn More",
            href: "/about",
          }}
        />
        <Faq items = {[
  {
    id: "faq-1",
    question: "What is a YouTube keyword generator?",
    answer:
      "A YouTube keyword generator finds high-search and low-competition keywords to help your videos rank in search results.",
  },
  {
    id: "faq-2",
    question: "How do YouTube keywords improve ranking?",
    answer:
      "Using optimized keywords in your title, description, and tags increases your chances of appearing in search and suggested videos.",
  },
  {
    id: "faq-3",
    question: "What is the difference between keywords and tags?",
    answer:
      "Keywords are core search terms used in titles and descriptions, while tags are additional contextual signals for YouTube’s algorithm.",
  },
  {
    id: "faq-4",
    question: "How do I find low-competition keywords?",
    answer:
      "Use the AI keyword tool to identify phrases with strong search demand and lower competition in your niche.",
  },
  {
    id: "faq-5",
    question: "Is this keyword tool beginner-friendly?",
    answer:
      "Yes. Simply enter your video topic and the AI generates optimized keyword suggestions instantly.",
  },
]}/>
        <CallToAction />
      </div>
    </main>
  );
};

export default page;
