import PricingPageContent from "@/components/sections/pricing-page-content";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | AI Thumbnail & YouTube SEO Tools",
  description:
    "Affordable plans for AI thumbnail generation, YouTube tag extraction, and keyword research tools.",

  keywords: [
    "ai thumbnail pricing",
    "youtube seo tool pricing",
    "creator tool subscription plans",
    "video optimization",
    "youtube marketing tools",
    "thumbnail generator cost",
    "content creator tools",
    "youtube growth tools",
  ],
};
const page = () => {
  return <PricingPageContent />;
};

export default page;
