import { CallToAction } from "@/components/cta";
import Faq from "@/components/faq";
import { Feature1 } from "@/components/feature1";
import { Feature43 } from "@/components/feature43";
import HeroSection from "@/components/hero-section";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import ExtractForm from "@/components/youtube/tags-extractor/extract-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Tag Extractor | Extract Video Tags | BoltCreator",

  description:
    "Extract tags from any YouTube video instantly using BoltCreator's YouTube Tag Extractor. Analyze competitor tags, discover SEO strategies, and boost your video rankings.",

  keywords: [
    "youtube tag extractor",
    "extract tags from youtube video",
    "youtube tag finder",
    "youtube tag generator",
    "competitor youtube tags",
    "copy youtube tags",
    "how to see youtube tags",
    "youtube seo tags",
    "youtube metadata extractor",
    "BoltCreator youtube tag extractor"
  ],

  alternates: {
    canonical: "https://boltcreator.online/youtube/tag-extractor",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "YouTube Tag Extractor | BoltCreator",
    description:
      "Extract tags from any YouTube video and analyze competitor SEO strategies with BoltCreator.",
    url: "https://boltcreator.online/youtube/tag-extractor",
    siteName: "BoltCreator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoltCreator YouTube Tag Extractor",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "YouTube Tag Extractor | BoltCreator",
    description:
      "Discover tags used by top YouTube videos and improve your video SEO.",
    images: ["/og-image.png"],
  },
};
const page = () => {
  return (
    <>
      <main className="min-h-screen bg-background flex flex-col">
        <section className="max-w-5xl mx-auto">
          <HeroGridPattern>
            <HeroSection
              badgeTitle="YouTube Tag Extractor →"
              title="Extract YouTube Tags from Any Video in Seconds"
              subTitle="Analyze competitor videos and uncover the exact tags they use to rank higher and increase visibility."
            />
            <ExtractForm />
            <Feature43 />
          </HeroGridPattern>
        </section>
        <div className="max-w-6xl mx-auto">
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
          <Faq
            items={[
              {
                id: "faq-1",
                question: "What is a YouTube tag extractor?",
                answer:
                  "A YouTube tag extractor allows you to view and copy tags used by other videos to analyze competitor SEO strategies.",
              },
              {
                id: "faq-2",
                question: "Is extracting YouTube tags legal?",
                answer:
                  "Yes. Tags are publicly accessible data and can be used for research and SEO analysis purposes.",
              },
              {
                id: "faq-3",
                question: "Can copying competitor tags guarantee ranking?",
                answer:
                  "No. Tags help with relevance, but ranking also depends on thumbnails, watch time, CTR, and content quality.",
              },
              {
                id: "faq-4",
                question: "How do I extract tags from a video?",
                answer:
                  "Simply paste the YouTube video URL into the tool and it will instantly display all associated tags.",
              },
              {
                id: "faq-5",
                question: "Should I use extracted tags exactly as they are?",
                answer:
                  "It’s best to combine extracted tags with your own optimized keywords for better results.",
              },
            ]}
          />
          <CallToAction />
        </div>
      </main>
    </>
  );
};

export default page;
