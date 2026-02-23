"use client";
import { Pricing } from "@/components/pricing";
import HeroSection from "@/components/hero-section";
import HeroGridSection from "@/components/mui/HeroGridPattern";
import Faq from "@/components/faq";
import { CallToAction } from "@/components/cta";
import { Testimonials } from "@/components/testimonials";
import { PlusIcon } from "lucide-react";
import { motion } from "motion/react";
import SubHeading from "@/components/sub-heading";

const page = () => {
  const testimonials = [
    {
      text: `ThumbAI saves me hours every week. I generate thumbnails and tags in seconds and my click-through rate improved almost immediately.`,
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      name: "Aman Verma",
      role: "YouTube Gaming Creator (120K subs)",
    },
    {
      text: "The AI thumbnails look better than what I used to design manually. My videos look more professional now and get more views.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Riya Sharma",
      role: "Lifestyle YouTuber",
    },
    {
      text: "Keyword finder is insanely helpful. I finally know what people are actually searching for. My ranking improved a lot.",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      name: "Karan Patel",
      role: "Tech Reviewer",
    },
    {
      text: "Earlier I used 3–4 tools for thumbnails and tags. Now everything is in one place. Huge time saver.",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      name: "Neha Gupta",
      role: "Instagram Creator",
    },
    {
      text: "The hashtag generator helped my reels go viral. I saw 3x reach within a week of using ThumbAI.",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      name: "Rohit Singh",
      role: "Reels & Shorts Creator",
    },
    {
      text: "I love how simple it is. Just type a title and boom — thumbnails, tags, everything ready.",
      image: "https://randomuser.me/api/portraits/women/16.jpg",
      name: "Sneha Mehta",
      role: "Student Creator",
    },
    {
      text: "Pro plan is totally worth it. Unlimited generations mean I can test multiple thumbnails and pick the best performer.",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
      name: "Arjun Rao",
      role: "Full-time YouTuber",
    },
    {
      text: "My CTR increased from 4% to 9% after switching to ThumbAI thumbnails. That alone doubled my views.",
      image: "https://randomuser.me/api/portraits/women/18.jpg",
      name: "Priya Nair",
      role: "Education Channel Owner",
    },
    {
      text: "It feels like having a designer and SEO expert in one tool. Perfect for small creators like me.",
      image: "https://randomuser.me/api/portraits/men/19.jpg",
      name: "Vikram Joshi",
      role: "Startup Founder & Creator",
    },
  ];

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);
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
        <div className="container z-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
          >
            <div className="flex justify-center">
              <div className="border py-1 px-4 rounded-lg text-sm relative">
                <PlusIcon
                  className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6"
                  strokeWidth={1}
                />
                <PlusIcon
                  className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6"
                  strokeWidth={1}
                />
                <PlusIcon
                  className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
                  strokeWidth={1}
                />
                <PlusIcon
                  className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6"
                  strokeWidth={1}
                />
                <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
                <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />
                Testimonials
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
              What our users say
            </h2>
            <SubHeading>
              See what our customers have to say about us.
            </SubHeading>
          </motion.div>

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <Testimonials testimonials={firstColumn} duration={15} />
            <Testimonials
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <Testimonials
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        </div>
        <Faq />
        <CallToAction />
      </div>
    </main>
  );
};

export default page;
