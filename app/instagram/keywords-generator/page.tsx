import HeroSection from "@/components/hero-section";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import KeywordForm from "@/components/instagram/keywords/keyword-from";
import { Feature43 } from "@/components/feature43";
import { Feature1 } from "@/components/feature1";
import Faq from "@/components/faq";
import { CallToAction } from "@/components/cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Keyword Generator | AI Instagram SEO Tool | BoltCreator",

  description:
    "Use BoltCreator's AI Instagram Keyword Generator to find high-ranking keywords for your bio, captions, and hashtags. Improve Instagram SEO and grow your audience faster.",

  keywords: [
    "instagram keyword generator",
    "instagram seo tool",
    "instagram keyword research",
    "find instagram keywords",
    "instagram niche research",
    "instagram profile optimization",
    "best keywords for instagram bio",
    "instagram search optimization",
    "instagram seo research tool",
    "grow instagram audience",
    "ai instagram keyword generator",
    "BoltCreator instagram tool"
  ],

  alternates: {
    canonical: "https://boltcreator.online/instagram/keywords-generator",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Instagram Keyword Generator | BoltCreator",
    description:
      "Discover trending Instagram keywords for your bio, captions, and posts using BoltCreator AI.",
    url: "https://boltcreator.online/instagram/keywords-generator",
    siteName: "BoltCreator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoltCreator Instagram Keyword Generator",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Instagram Keyword Generator | BoltCreator",
    description:
      "Find trending Instagram keywords using BoltCreator AI keyword generator.",
    images: ["/og-image.png"],
  },
};
const page = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="max-w-6xl mx-auto">
        <HeroGridPattern>
          <HeroSection
            badgeTitle="AI Keyword Research Tool →"
            title="Discover High-Ranking Instagram Keywords in Seconds"
            subTitle="Enter your post idea and get powerful keywords with engagement potential and search relevance — optimized to grow your Instagram presence."
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
        <Faq
          items={[
            {
              id: "faq-1",
              question: "What is an Instagram keyword generator?",
              answer:
                "An Instagram keyword generator finds relevant search terms and content ideas to help your posts rank better in Instagram search results.",
            },
            {
              id: "faq-2",
              question: "Do keywords matter on Instagram?",
              answer:
                "Yes. Instagram now uses SEO-based search, meaning keywords in captions, bios, and profiles help improve visibility.",
            },
            {
              id: "faq-3",
              question: "Where should I use Instagram keywords?",
              answer:
                "You should use keywords naturally in your caption, profile bio, username, alt text, and hashtags to maximize search reach.",
            },
            {
              id: "faq-4",
              question: "What is the difference between hashtags and keywords?",
              answer:
                "Keywords are searchable phrases used in captions and bios, while hashtags are clickable labels that categorize content.",
            },
            {
              id: "faq-5",
              question: "How do I find low-competition Instagram keywords?",
              answer:
                "Use the AI keyword tool to discover niche-specific phrases that have strong engagement potential but lower competition.",
            },
            {
              id: "faq-6",
              question: "Can this help grow my Instagram followers?",
              answer:
                "Yes. Using optimized keywords improves search visibility, helping new audiences discover your content.",
            },
            {
              id: "faq-7",
              question: "Is this tool suitable for small creators?",
              answer:
                "Absolutely. The tool is beginner-friendly and helps new creators compete with larger accounts using smart keyword targeting.",
            },
          ]}
        />
        <CallToAction />
      </div>
    </main>
  );
};

export default page;
