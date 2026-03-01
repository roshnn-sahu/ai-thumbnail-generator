import { CallToAction } from "@/components/cta";
import Faq from "@/components/faq";
import { Feature1 } from "@/components/feature1";
import { Feature43 } from "@/components/feature43";
import HeroSection from "@/components/hero-section";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import ExtractForm from "@/components/youtube/tags-extractor/extract-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube SEO Tools | AI Thumbnail, Tags & Keywords",
  description:
    "All-in-one YouTube SEO toolkit. Generate AI thumbnails, extract tags, find ranking keywords, and grow your channel faster.",
  keywords: [
    "youtube seo tools",
    "youtube tag extractor",
    "youtube keyword generator",
    "ai thumbnail maker for youtube",
    "youtube growth tools",
  ],
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
          <Feature1 />
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
