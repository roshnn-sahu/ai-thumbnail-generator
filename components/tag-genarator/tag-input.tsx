"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TagInput = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-2 max-w-xl mx-auto relative z-10"
      >
        <Input
          placeholder="Enter your topic"
          className=" w-full  border border-border bg-white dark:bg-neutral-800 text-sm focus:ring-2 focus:ring-card-foreground outline-none resize-none transition-shadow hover:shadow-md active:scale-95 "
        />
        <motion.button
          className={cn(
            "px-3 py-2 bg-foreground hover:bg-foreground/95 text-white font-bold rounded-lg shadow-lg shadow-foreground/30 transition-colors cursor-pointer disabled:opacity-90 disabled:cursor-not-allowed flex items-center justify-center gap-2",
          )}
          whileTap={{ scale: 0.98 }}
        >
          Generate
        </motion.button>
      </motion.div>
    </>
  );
}

export default TagInput