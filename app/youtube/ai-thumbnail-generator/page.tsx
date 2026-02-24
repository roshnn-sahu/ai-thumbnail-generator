"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import HeroSection from "@/components/hero-section";
import { ResultsGrid } from "@/components/thumbnail-generator/results-grid";
import { FileUpload } from "@/components/thumbnail-generator/file-upload";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import { Feature43 } from "@/components/feature43";
import { Feature1 } from "@/components/feature1";
import Faq from "@/components/faq";
import {
  optimizeImage,
  ImageData,
  processImageUpload,
  generateThumbnails,
} from "@/services/image-generation";
import { CallToAction } from "@/components/cta";
//auth check
import { useUser } from "@clerk/nextjs";
import AuthModal from "@/components/auth/auth-modal";

export default function page() {
  const [imageData, setImageData] = useState<ImageData | null>();
  const [imageCount, setImageCount] = useState<number>(0);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const { toast } = useToast();
  const { isSignedIn } = useUser();

  const handleImageUpload = async (file: File, preview: string) => {
    try {
      const data = await processImageUpload(file, preview);
      setImageData(data);

      toast({
        title: "Image uploaded",
        description: `${file.name} optimized and ready`,
      });
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message || "Could not optimize image",
        variant: "error",
      });
    }
  };

  const handleGenerate = async (
    prompt: string,
    count: number,
    aspectRatio: string,
    isRemix: boolean,
    remixImages?: File[],
  ) => {
    if (!imageData) return;
    if (!isSignedIn) {
      setAuthModalOpen(true);
      return;
    }
    setImageCount(count);

    setIsLoading(true);
    setGeneratedImages([]);
    try {
      const images = await generateThumbnails({
        prompt,
        count,
        aspectRatio,
        isRemix,
        remixImages,
        mainImageBase64: imageData.optimized,
      });

      setGeneratedImages(images);

      toast({
        title: "Success!",
        description: "Thumbnails generated successfully",
        variant: "success",
      });
    } catch (error: any) {
      console.error("Generation error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to generate thumbnails",
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Clears everything —
  const handleReset = () => {
    setImageData(null);
    setGeneratedImages([]);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="max-w-6xl mx-auto">
        <HeroGridPattern>
          <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-6 py-8 md:py-12">
            <HeroSection
              badgeTitle="AI Powered Thumbnail Generator →"
              title="Transform Your Images Into Eye-Catching Thumbnails"
              subTitle="Upload an image and generate stunning thumbnails instantly with AI"
            />
            <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
            <FileUpload
              onGenerate={handleGenerate}
              isLoading={isLoading}
              handleReset={handleReset}
              onChange={(files) => {
                if (files.length > 0) {
                  const file = files[0];
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    const preview = e.target?.result as string;
                    handleImageUpload(file, preview);
                  };
                  reader.readAsDataURL(file);
                } else {
                  // files array is empty → user removed the file
                  handleReset();
                }
              }}
            />
            <AnimatePresence>
              {(generatedImages?.length > 0 || isLoading) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <ResultsGrid
                    images={generatedImages}
                    isLoading={isLoading}
                    imageCount={imageCount}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </HeroGridPattern>
        <Feature43 />
        <Feature1 />
        <Faq />
        <CallToAction />
      </div>
    </div>
  );
}
