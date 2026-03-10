import ThumbnailPage from "@/components/sections/thumbnail-generation-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Thumbnail Generator | Free YouTube Thumbnail Maker | BoltCreator",

  description:
    "Create eye-catching YouTube thumbnails instantly with BoltCreator's AI Thumbnail Generator. Generate high-CTR thumbnails, boost views, and grow your YouTube channel faster.",

  keywords: [
    "AI Thumbnail Generator",
    "YouTube Thumbnail Generator",
    "Free AI Thumbnail Maker",
    "AI YouTube Thumbnail Maker",
    "Generate YouTube Thumbnail with AI",
    "YouTube Thumbnail Creator AI",
    "Best AI Thumbnail Generator",
    "Create YouTube Thumbnails Online",
    "AI Thumbnail Maker for YouTube",
    "BoltCreator AI Thumbnail Generator"
  ],

  alternates: {
    canonical: "https://boltcreator.online/ai-thumbnail-generator",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "AI Thumbnail Generator | BoltCreator",
    description:
      "Generate high-quality YouTube thumbnails with AI using BoltCreator. Improve click-through rate and grow your channel faster.",
    url: "https://boltcreator.online/youtube/ai-thumbnail-generator",
    siteName: "BoltCreator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoltCreator AI Thumbnail Generator",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Thumbnail Generator | BoltCreator",
    description:
      "Create viral YouTube thumbnails instantly using BoltCreator AI.",
    images: ["/og-image.png"],
  },
};
const page = () => {
  return (
    <>
      <ThumbnailPage />
    </>
  );
};

export default page;
