import PricingPageContent from "@/components/sections/pricing-page-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans | AI Thumbnail Generator & YouTube SEO Tools | BoltCreator",

  description:
    "Explore BoltCreator pricing plans for AI thumbnail generation, YouTube tag extraction, and keyword research tools. Choose the best plan to grow your YouTube channel faster.",

  keywords: [
    "BoltCreator pricing",
    "AI thumbnail generator pricing",
    "YouTube SEO tools pricing",
    "YouTube tag generator pricing",
    "AI creator tools subscription",
    "content creator tools pricing",
    "YouTube growth tools pricing",
    "thumbnail generator cost"
  ],

  alternates: {
    canonical: "https://boltcreator.online/pricing",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "BoltCreator Pricing | AI Thumbnail Generator & YouTube SEO Tools",
    description:
      "View BoltCreator pricing plans for AI thumbnail generation, tag extraction, and YouTube SEO tools.",
    url: "https://boltcreator.online/pricing",
    siteName: "BoltCreator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoltCreator Pricing Plans",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BoltCreator Pricing Plans",
    description:
      "Affordable plans for AI thumbnail generator and YouTube SEO tools.",
    images: ["/og-image.png"],
  },
};
const page = () => {
  return <PricingPageContent />;
};

export default page;
