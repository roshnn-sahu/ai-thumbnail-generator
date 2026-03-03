import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Heading from "./heading";
import SubHeading from "./sub-heading";

interface Feature1Props {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  buttonPrimary: {
    text: string;
    href: string;
  };
  buttonSecondary: {
    text: string;
    href: string;
  };
  className?: string;
}

const Feature1 = ({
  title = "Generate Scroll-Stopping Thumbnails in Seconds",
  description = "Describe your video idea and our AI instantly creates eye-catching YouTube thumbnails. No Photoshop, no design skills, no time wasted. Just type → generate → download.",
  imageSrc = "/feature-img.png", // add your mockup/screenshot here
  imageAlt = "AI thumbnail generator preview",
  buttonPrimary = {
    text: "Generate Thumbnail",
    href: "/generate",
  },

  className,
}: Feature1Props) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container px-8 max-w-6xl mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Heading className="text-start  mb-2 lg:text-5xl text-">
              {title}
            </Heading>
            {description && (
              <SubHeading className="text-start text-md pl-0">
                {description}
              </SubHeading>
            )}
          </div>
          <img
            loading="lazy"
            src={imageSrc}
            alt={imageAlt}
            className="max-h-96 w-full select-none rounded-lg overflow-hidden object-cover object-bottom border mask-x-from-90% "
          />
        </div>
      </div>
    </section>
  );
};

export { Feature1 };
