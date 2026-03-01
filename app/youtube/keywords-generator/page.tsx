import HeroSection from "@/components/hero-section";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import KeywordForm from "@/components/youtube/keywords/keyword-from";
import { Feature43 } from "@/components/feature43";
import { Feature1 } from "@/components/feature1";
import Faq from "@/components/faq";
import { CallToAction } from "@/components/cta";

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
        <Faq />
        <CallToAction />
      </div>
    </main>
  );
};

export default page;
