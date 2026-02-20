"use client";

import { motion } from "framer-motion";
import Heading from "./heading";
import { PlusIcon } from "lucide-react";

function HeroSection({ badgeTitle, title, subTitle }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-4 py-16 md:py-20 relative z-10 px-5"
    >
      <span className="border px-3 py-1  text-xs mb-5 shadow-sm relative">
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

        {badgeTitle}
      </span>
      <Heading as="h1" className="mt-3">
        {title}
      </Heading>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
        {subTitle}
      </p>
    </motion.section>
  );
}

export default HeroSection;
