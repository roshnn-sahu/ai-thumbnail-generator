import { CallToAction } from "@/components/cta";
import Faq from "@/components/faq";
import { Feature1 } from "@/components/feature1";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import HeroSection from "@/components/hero-section";
import { Feature43 } from "@/components/feature43";
import { FileUpload } from "@/components/image-to-prompt/file-upload";

const page = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col ">
      <div className="max-w-6xl mx-auto">
        <HeroGridPattern>
          <HeroSection
            badgeTitle="For AI Artists & Designers"
            title="Convert Images into Detailed Prompts"
            subTitle="Convert your images into detailed prompts for AI image generators."
          />
          <FileUpload />
          <Feature43 />
        </HeroGridPattern>
        <Feature1
          title="AI-Powered Thumbnail Generation"
          imageSrc="/feature-img.png"
          imageAlt="AI Thumbnail Generator"
          buttonPrimary={{
            text: "Generate Thumbnail",
            href: "/youtube/ai-thumbnail-generator",
          }}
          buttonSecondary={{
            text: "Learn More",
            href: "/about",
          }}
        />
        <Faq
          items={[
            {
              id: "faq-1",
              question: "What is an Image to Prompt generator?",
              answer:
                "An Image to Prompt generator is an AI-powered tool that analyzes an existing image and creates a detailed text description (prompt). This prompt can then be used to recreate or iterate on the image's style, subject, and composition in AI art generators like Midjourney, DALL-E, or Stable Diffusion.",
            },
            {
              id: "faq-2",
              question: "Which AI models are these prompts compatible with?",
              answer:
                "The generated prompts are highly descriptive and work exceptionally well with all major AI image generators, including Midjourney, DALL-E 3, Stable Diffusion, Adobe Firefly, and Leonardo AI.",
            },
            {
              id: "faq-3",
              question: "Is the Image to Prompt tool free to use?",
              answer:
                "Yes, you can use the tool for free! Each generation costs a small amount of daily credits. You can upgrade to a Pro or Creator plan for unlimited access and higher-priority processing.",
            },
            {
              id: "faq-4",
              question: "How accurate are the generated descriptions?",
              answer:
                "Our tool uses state-of-the-art vision models to identify subjects, lighting, artistic styles, camera settings, and even specific textures. This results in highly precise prompts that capture the 'DNA' of the original image.",
            },
            {
              id: "faq-5",
              question: "What image formats are supported?",
              answer:
                "We support standard image formats including PNG, JPG, JPEG, WEBP, and GIF. The file size limit is currently 10MB per upload.",
            },
            {
              id: "faq-6",
              question:
                "Can I use this to find the artistic style of an image?",
              answer:
                "Absolutely! The AI is trained to recognize thousands of artistic styles, from classical painters to modern digital art techniques, helping you identify and replicate unique aesthetics.",
            },
            {
              id: "faq-7",
              question: "Are my uploaded images private?",
              answer:
                "Yes. Your privacy is our priority. Images are processed in real-time to generate your prompt and are not permanently stored on our servers.",
            },
          ]}
        />
        <CallToAction />
      </div>
    </div>
  );
};
export default page;
