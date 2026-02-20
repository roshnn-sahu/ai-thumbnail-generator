import React from "react";
import { Pricing } from "@/components/pricing";
import HeroSection from "@/components/hero-section";
import HeroGridSection from "@/components/mui/HeroGridPattern";

const page = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="max-w-6xl mx-auto">
        <HeroGridSection>
          <HeroSection
            badgeTitle="Simple & Transparent Pricing →"
            title="Affordable AI Tools to Grow Your YouTube Channel"
            subTitle="Choose a plan that fits your content strategy and unlock powerful thumbnail, keyword, and tag tools built for creators."
          />

          <Pricing />
        </HeroGridSection>
      </div>
    </main>
  );
};

export default page;
