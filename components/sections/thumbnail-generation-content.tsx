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
import { useAuth } from "@clerk/nextjs";
import AuthModal from "@/components/auth/auth-modal";

export default function ThumbnailPage() {
  const [imageData, setImageData] = useState<ImageData | null>();
  const [imageCount, setImageCount] = useState<number>(0);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const { toast } = useToast();
  const { isSignedIn } = useUser();
  const { getToken } = useAuth();

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
    const token = await getToken();
    if (!imageData) return;
    if (!isSignedIn || !token) {
      setAuthModalOpen(true);
      return;
    }

    setImageCount(count);
    setIsLoading(true);
    setGeneratedImages([]);

    try {
      const images = await generateThumbnails(token, {
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
        description:
          error.response.data.message || "Failed to generate thumbnails",
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
        <Faq
          items={[
            {
              id: "faq-1",
              question: "What is an AI YouTube thumbnail generator?",
              answer:
                "An AI YouTube thumbnail generator automatically creates high-CTR thumbnails using artificial intelligence based on your video title or idea.",
            },
            {
              id: "faq-2",
              question: "What size should YouTube thumbnails be?",
              answer:
                "YouTube recommends 1280×720 resolution with a 16:9 aspect ratio and a minimum width of 640 pixels.",
            },
            {
              id: "faq-3",
              question: "Can I customize the AI-generated thumbnails?",
              answer:
                "Yes, you can edit text, colors, layout, and download the final thumbnail in PNG or JPG format.",
            },
            {
              id: "faq-4",
              question: "Does AI improve YouTube click-through rate?",
              answer:
                "Yes. AI designs thumbnails optimized for attention and contrast, which can increase your click-through rate and overall video performance.",
            },
            {
              id: "faq-5",
              question: "Is this better than Canva for thumbnails?",
              answer:
                " focuses specifically on YouTube optimization, while Canva is a general design tool. Our AI is built for YouTube growth and CTR performance.",
            },
            {
              id: "faq-6",
              question:
                "Can I use thumbnails for gaming or educational content?",
              answer:
                "Yes. The AI adapts to different niches including gaming, education, vlogs, tech reviews, and business content.",
            },
          ]}
        />
        <CallToAction />
      </div>
    </div>
  );
}
