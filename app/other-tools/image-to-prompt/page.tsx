import { CallToAction } from "@/components/cta";
import Faq from "@/components/faq";
import { Feature1 } from "@/components/feature1";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import HeroSection from "@/components/hero-section";
import { Feature43 } from "@/components/feature43";
import { FileUpload } from "@/components/ui/file-upload";

const page = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col ">
      <div className="max-w-6xl mx-auto">
        <HeroGridPattern>
          <HeroSection
            badgeTitle="For AI Artists & Designers"
            title="Convert Images into Detailed Prompts"
            subTitle="Convert your images into detailed prompts for AI image generators."
          />
          <FileUpload />
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
              question: "What is an Instagram hashtag generator?",
              answer:
                "An Instagram hashtag generator creates relevant and trending hashtags based on your post topic to increase reach, engagement, and discoverability.",
            },
            {
              id: "faq-2",
              question: "How many hashtags should I use on Instagram?",
              answer:
                "Instagram allows up to 30 hashtags per post. Most creators see good results using 10–20 targeted hashtags instead of random ones.",
            },
            {
              id: "faq-3",
              question: "Do hashtags still work on Instagram in 2026?",
              answer:
                "Yes. While Instagram's algorithm focuses on content quality, hashtags still help categorize your post and improve discoverability in search and Explore.",
            },
            {
              id: "faq-4",
              question: "Should I use trending or niche hashtags?",
              answer:
                "A mix works best. Use trending hashtags for exposure and niche-specific hashtags to reach a more targeted audience.",
            },
            {
              id: "faq-5",
              question: "Can this tool generate hashtags for Reels?",
              answer:
                "Yes. The AI generates optimized hashtags for posts, reels, carousels, and stories to help boost engagement.",
            },
            {
              id: "faq-6",
              question: "Is the Instagram hashtag generator free?",
              answer:
                "Yes. You can generate hashtags for free with limited daily usage under the free plan.",
            },
            {
              id: "faq-7",
              question: "Can I use these hashtags for business accounts?",
              answer:
                "Yes. The generated hashtags work for creators, influencers, brands, and business accounts across all niches.",
            },
          ]}
        />
        <CallToAction />
      </div>
    </div>
  );
};
export default page;
