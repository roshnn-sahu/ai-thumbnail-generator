"use client";

import { motion } from "motion/react";

const stats = [
  { number: "3K+", label: "Thumbnails Generated" },
  { number: "500+", label: "Creators" },
  { number: "1M+", label: "Views Boosted" },
  { number: "98%", label: "Satisfaction" },
];

export default function Stats() {
  return (
    <section className="py-14 border-y bg-muted/40 relative z-10">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="text-3xl md:text-4xl font-bold">{item.number}</p>
            <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
