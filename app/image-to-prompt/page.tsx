import React from "react";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import HeroSection from "@/components/hero-section";
import { FileUpload } from "@/components/ui/file-upload";

const page = () => {
  return (
    <>
      <main className="min-h-screen bg-background flex flex-col">
        <div className="max-w-5xl mx-auto">
          <HeroGridPattern>
            <HeroSection
              badgeTitle="AI Image Analysis →"
              title="Convert Any Image into Precise AI Prompts"
              subTitle="Upload any thumbnail or image to instantly generate detailed prompts. Master your visual style and recreate high-performing designs with ease."
            />
          </HeroGridPattern>
          <FileUpload/>
        </div>
      </main>
    </>
  );
};

export default page;
