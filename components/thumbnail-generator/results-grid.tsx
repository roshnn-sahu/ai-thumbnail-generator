"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import SubHeading from "@/components/sub-heading";
import Heading from "@/components/heading";

interface ResultsGridProps {
  images: string[];
  isLoading: boolean;
  imageCount: number;
}

export function ResultsGrid({
  images,
  isLoading,
  imageCount,
}: ResultsGridProps) {
  if (!isLoading && images.length === 0) return null;

  const handleDownload = (imageUrl: string, index: number) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `thumbnail-${index + 1}.png`;
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6 "
    >
      <div>
        <Heading className="mb-6 mt-12 text-center lg:text-5xl">
          {isLoading ? "Generating Thumbnails..." : "Generated Thumbnails"}
        </Heading>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {images.length === 0 && isLoading
          ? Array.from({ length: imageCount }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border animate-pulse"
              >
                <div className="aspect-video bg-muted" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4" />
                </div>
              </div>
            ))
          : Array.from({
              length: Math.max(images.length, isLoading ? 3 : 0),
            }).map((_, index) => {
              const image = images[index];
              if (!image) {
                return (
                  <div
                    key={`skeleton-fill-${index}`}
                    className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border animate-pulse"
                  >
                    <div className="aspect-auto bg-muted" />
                    <div className="p-4 space-y-2">
                      <div className="h-4 bg-muted rounded w-3/4" />
                    </div>
                  </div>
                );
              }
              return (
                <motion.div
                  key={index}
                  variants={isLoading ? itemVariants : {}}
                  layout
                  className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:border-primary transition-all"
                >
                  <div className="relative aspect-auto bg-muted overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Generated thumbnail ${index + 1}`}
                      className="object-cover transition-transform duration-300"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Button
                        size="sm"
                        onClick={() => handleDownload(image, index)}
                        className="gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
      </motion.div>
    </motion.section>
  );
}
