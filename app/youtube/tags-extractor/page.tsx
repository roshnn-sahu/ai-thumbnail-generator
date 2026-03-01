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
    "youtube growth tools"
  ]
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
          <Faq />
          <CallToAction />
        </div>
      </main>
    </>
  );
};

export default page;
