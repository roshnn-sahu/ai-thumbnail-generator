import HeroSection from "@/components/hero-section";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import { Feature43 } from "@/components/feature43";
import { Feature1 } from "@/components/feature1";
import Faq from "@/components/faq";
import TopicInput from "@/components/youtube/tags-generator/topic-input";
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
    <div className="min-h-screen bg-background flex flex-col">
      <div className="max-w-6xl mx-auto">
        <HeroGridPattern>
          <HeroSection
            badgeTitle="YouTube SEO Tool →"
            title="Generate SEO-Optimized YouTube Tags in Seconds"
            subTitle="Enter your video title or topic and get high-ranking tags under 500 characters — optimized for reach, CTR, and discoverability."
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
        <Faq
          items={[
            {
              id: "faq-1",
              question: "What is a YouTube tag generator?",
              answer:
                "A YouTube tag generator automatically creates relevant tags based on your video topic to improve search visibility and discoverability.",
            },
            {
              id: "faq-2",
              question: "Do YouTube tags still matter?",
              answer:
                "Yes. While titles and descriptions are important, tags help YouTube better understand your content and can improve related video placement.",
            },
            {
              id: "faq-3",
              question: "How many tags should I use on YouTube?",
              answer:
                "You can use up to 500 characters of tags. It’s best to include a mix of broad, niche, and long-tail keywords.",
            },
            {
              id: "faq-4",
              question: "Are these debates about tag importance true?",
              answer:
                "Tags are not the primary ranking factor, but they still help with contextual relevance and video categorization.",
            },
            {
              id: "faq-5",
              question: "Is this tag generator free?",
              answer:
                "Yes, you can generate YouTube tags for free with limited daily usage under the free plan.",
            },
          ]}
        />
        <CallToAction />
      </div>
    </div>
  );
};

export default page;
