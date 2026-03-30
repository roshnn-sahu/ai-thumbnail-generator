"use client";

import { CallToAction } from "@/components/cta";
import HeroSection from "@/components/hero-section";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import Stats from "@/components/stats";
import { BRAND_NAME } from "@/constants/brand";
import { motion } from "motion/react";
import {
  Zap,
  TrendingUp,
  Palette,
  ShieldCheck,
  Rocket,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";

const whyDifferentFeatures = [
  {
    icon: Zap,
    title: "Fast AI Generation",
    description:
      "Generate stunning thumbnails in under 5 seconds. No waiting, no rendering queues — just instant results.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Insights",
    description:
      "Keyword research backed by real YouTube data. Discover what ranks, what trends, and what converts.",
  },
  {
    icon: Palette,
    title: "Professional Tools",
    description:
      "Studio-grade thumbnail tools built for creators — not designers. Beautiful results without the learning curve.",
  },
  {
    icon: ShieldCheck,
    title: "Simple, Honest Pricing",
    description:
      "No hidden fees. No confusing tiers. Just straightforward plans that grow with you.",
  },
  {
    icon: Rocket,
    title: "Built for Creators",
    description:
      "Every feature is designed with YouTubers and content creators in mind — not enterprise teams.",
  },
  {
    icon: Users,
    title: "Growing Community",
    description: `Join 500+ creators already using ${BRAND_NAME} to boost clicks, views, and subscriber growth.`,
  },
];

const steps = [
  {
    icon: Target,
    title: "The Problem",
    description:
      "Most creators struggle with low click-through rates, poor SEO, and inconsistent growth — not because their content is bad, but because they lack professional optimization tools.",
  },
  {
    icon: Lightbulb,
    title: "Our Solution",
    description: `${BRAND_NAME} combines AI thumbnail generation, keyword research, and tag optimization into one simple platform — giving every creator an unfair advantage.`,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      {/* Hero */}
      <HeroGridPattern>
        <div className="max-w-6xl mx-auto">
          <HeroSection
            badgeTitle={`About ${BRAND_NAME} →`}
            title="Empowering Creators with AI-Powered Growth Tools"
            subTitle={`We built ${BRAND_NAME} to help content creators generate better thumbnails, discover powerful keywords, and grow faster on YouTube and Instagram.`}
          />
        </div>
   {/* Stats */}
      <Stats />
        {/* Mission Section */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-foreground mb-4 border border-border rounded-full px-4 py-1 bg-muted">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Making AI growth tools{" "}
              <span className="underline underline-offset-4 decoration-muted-foreground/40">
                accessible to every creator
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Whether you're just starting or running a full-time channel,{" "}
              <span className="text-foreground font-medium">{BRAND_NAME}</span>{" "}
              gives you the AI advantage to compete, rank, and grow — without
              needing a design team or a marketing budget.
            </p>
          </motion.div>
        </section>
      </HeroGridPattern>

   

      {/* Problem & Solution */}
      <section className="py-24 px-6 bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-foreground mb-4 border border-border rounded-full px-4 py-1 bg-muted">
              Why We Exist
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              The Challenge. The Answer.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative rounded-2xl border border-border bg-background p-8 overflow-hidden group"
              >
                {/* Subtle corner glow on hover */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-foreground/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-border bg-muted mb-6">
                  <step.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different — Feature Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-foreground mb-4 border border-border rounded-full px-4 py-1 bg-muted">
              Why {BRAND_NAME}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built Different. Designed to Win.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything we build is optimized for one thing — helping you grow
              faster than the competition.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyDifferentFeatures.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative group rounded-2xl border border-border bg-background p-6 overflow-hidden cursor-default"
              >
             

                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-muted mb-5">
                  <feat.icon className="w-5 h-5 text-foreground" />
                </div>

                <h3 className="text-base font-semibold mb-2">{feat.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 bg-muted/40 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-foreground/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-foreground mb-4 border border-border rounded-full px-4 py-1 bg-muted">
            Our Vision
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Every creator deserves{" "}
            <span className="underline underline-offset-4 decoration-muted-foreground/40">
              powerful AI tools
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Big brands and agencies have had the AI advantage for years.{" "}
            <span className="text-foreground font-medium">{BRAND_NAME}</span>{" "}
            exists to level the playing field — giving independent creators the
            same powerful technology to compete, win, and grow on their own
            terms.
          </p>

          {/* Tag pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {[
              "🎯 Higher CTR",
              "🔍 Better SEO",
              "⚡ Faster Growth",
              "💡 Smarter Keywords",
            ].map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-background text-sm font-medium"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <CallToAction />
    </main>
  );
}
