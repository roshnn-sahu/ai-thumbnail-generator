import HeroSection from "@/components/hero-section";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import { Feature43 } from "@/components/feature43";
import { Feature1 } from "@/components/feature1";
import Faq from "@/components/faq";
import TopicInput from "@/components/youtube/tags-generator/topic-input";
import { CallToAction } from "@/components/cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Tools | AI Caption & Hashtag Generator",
  description:
    "Generate Instagram captions, hashtags, and growth ideas using AI. Boost engagement and visibility instantly.",
  keywords: [
    "instagram hashtag generator",
    "ai instagram captions",
    "instagram growth tools",
  ],
};
const page = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="max-w-6xl mx-auto">
        <HeroGridPattern>
          <HeroSection
            badgeTitle="For Creators & Influencers"
            title="Find Perfect Hashtags for Every Post"
            subTitle="Generate optimized tags for reels, photos, and stories to increase likes, views, and engagement."
          />

          <TopicInput />
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
