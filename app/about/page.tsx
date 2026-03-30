import { CallToAction } from "@/components/cta";
import HeroSection from "@/components/hero-section";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import Stats from "@/components/stats";
import { BRAND_NAME } from "@/constants/brand";
import Link from "next/link";

export default function page() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <HeroGridPattern>
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <HeroSection
        
        badgeTitle={`About ${BRAND_NAME} →`}
        title="Empowering Creators with AI-Powered Growth Tools"
        subTitle={`We built ${BRAND_NAME} to help content creators generate better thumbnails, discover powerful keywords, and grow faster on YouTube and Instagram.`}
        />
      </div>
      <Stats />
        </HeroGridPattern>
      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Our mission is simple — make professional growth tools accessible to
          every creator. Whether you're just starting or running a full-time
          channel, {BRAND_NAME} gives you the AI advantage to compete, rank,
          and grow.
        </p>
      </section>

      {/* Problem Section */}
      <section className="bg-muted py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Problem We’re Solving
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Creating content is hard. But getting discovered is even harder.
            Most creators struggle with low click-through rates, poor SEO, and
            inconsistent growth — not because their content is bad, but because
            they lack the right optimization tools.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Built</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          {BRAND_NAME} combines AI thumbnail generation, keyword research, and
          tag optimization into one simple platform. Our tools are designed to
          help creators increase visibility, improve CTR, and grow their
          audience faster.
        </p>
      </section>

      {/* Why Different */}
      <section className="bg-muted py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why {BRAND_NAME} Is Different
          </h2>
          <ul className="space-y-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            <li>⚡ Fast AI generation</li>
            <li>📈 Data-driven keyword insights</li>
            <li>🎨 Professional thumbnail tools</li>
            <li>🔒 Simple pricing. No hidden fees.</li>
            <li>🚀 Built specifically for creators</li>
          </ul>
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          We believe every creator deserves access to powerful AI tools — not
          just big brands or agencies. {BRAND_NAME} exists to level the playing
          field and give independent creators the technology they need to win.
        </p>
      </section>

      {/* Final CTA */}
      <CallToAction />
    </main>
  );
}
