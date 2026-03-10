import HeroSection from "@/components/hero-section";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import { Feature43 } from "@/components/feature43";
import { Feature1 } from "@/components/feature1";
import Faq from "@/components/faq";
import TopicInput from "@/components/youtube/tags-generator/topic-input";
import { CallToAction } from "@/components/cta";
import YtInput from "@/components/youtube/yt-video-download/yt-link-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free YouTube Video Downloader | Download YouTube Videos MP4 | BoltCreator",

  description:
    "Download YouTube videos instantly with BoltCreator's free YouTube video downloader. Save videos in high-quality MP4 format online with no software or signup required.",

  keywords: [
    "youtube video downloader",
    "free youtube downloader",
    "download youtube videos mp4",
    "youtube to mp4 converter",
    "online youtube downloader",
    "download youtube video online",
    "high quality youtube downloader",
    "youtube mp4 download tool",
    "save youtube videos free",
    "BoltCreator youtube downloader"
  ],

  alternates: {
    canonical: "https://boltcreator.online/youtube/video-downloader",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Free YouTube Video Downloader | BoltCreator",
    description:
      "Download YouTube videos quickly in high-quality MP4 format using BoltCreator's free online downloader.",
    url: "https://boltcreator.online/youtube/video-downloader",
    siteName: "BoltCreator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoltCreator YouTube Video Downloader",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Free YouTube Video Downloader | BoltCreator",
    description:
      "Save YouTube videos instantly in MP4 format using BoltCreator.",
    images: ["/og-image.png"],
  },
};
const page = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="max-w-6xl mx-auto">
        <HeroGridPattern>
          <HeroSection
            badgeTitle="⚡ Free YouTube Downloader"
            title="Download YouTube Videos Instantly"
            subTitle="Paste your video link and download in MP4 — fast, high quality, and no signup required."
          />

          <YtInput />
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
        <Faq />
        <CallToAction />
      </div>
    </div>
  );
};

export default page;
