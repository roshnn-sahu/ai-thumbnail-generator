"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const row1 = [
  "/images/thumbnails/03.jpg",
  "/images/thumbnails/01.jpg",
  "/images/thumbnails/05.jpg",
  "/images/thumbnails/04.jpg",
  "/images/thumbnails/02.jpg",
];

const row2 = [
  "/images/thumbnails/08.jpg",
  "/images/thumbnails/06.jpg",
  "/images/thumbnails/10.jpg",
  "/images/thumbnails/07.jpg",
  "/images/thumbnails/09.jpg",
];


const MarqueeRow = ({
  images,
  direction = "left",
  speed = 40,
}: {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  return (
    <div className="flex overflow-hidden select-none gap-4 py-2">
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-nowrap gap-4 min-w-full"
      >
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="relative h-48 w-80 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover/marquee:blur-[2px] hover:blur-none! hover:scale-100! z-0 hover:z-20"
          >
            <Image
              src={src}
              alt={`Thumbnail-${idx}`}
              fill
              className="object-cover"
              sizes="320px"
              unoptimized={src.startsWith("http")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ImageMarquee = () => {
  return (
    <section className="relative w-full py-12 overflow-hidden bg-background group/marquee">
      <div className="max-w-6xl mx-auto mask-x-from-80%">
        {/* Decorative Gradients for smooth fade-in/out edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-4">
          <MarqueeRow images={row1} direction="left" speed={50} />
          <MarqueeRow images={row2} direction="right" speed={60} />
        </div>
      </div>
    </section>
  );
};

export default ImageMarquee;
