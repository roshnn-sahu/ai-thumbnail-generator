import HeroSection from "@/components/hero-section";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import { Feature43 } from "@/components/feature43";
import { Feature1 } from "@/components/feature1";
import Faq from "@/components/faq";
import TagInput from "@/components/tag-genarator/tag-input";
import { CallToAction } from "@/components/cta";

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

          <TagInput />
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
        <CallToAction/>
      </div>
    </div>
  );
};

export default page;
