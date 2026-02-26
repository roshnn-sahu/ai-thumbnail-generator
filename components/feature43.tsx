import {
  BatteryCharging,
  GitPullRequest,
  Layers,
  RadioTower,
  SquareKanban,
  WandSparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Heading from "./heading";

interface Feature {
  heading: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature43Props {
  title?: string;
  features?: Feature[];
  buttonText?: string;
  buttonUrl?: string;
  className?: string;
}

const Feature43 = ({
  title = "Key features",
  features = [
    {
      heading: "AI Thumbnail Generator",
      description:
        "Create scroll-stopping YouTube thumbnails in seconds using AI. Just type your idea and instantly generate multiple high-quality designs.",
      icon: <WandSparkles className="size-6" />,
    },
    {
      heading: "Smart Prompt Enhancer",
      description:
        "Even bad prompts become great results. Our AI automatically improves your text to produce sharper, more engaging thumbnails every time.",
      icon: <GitPullRequest className="size-6" />,
    },
    {
      heading: "Keyword & Tag Finder",
      description:
        "Discover trending keywords, tags, and titles to boost reach and rank higher on YouTube search and recommendations.",
      icon: <RadioTower className="size-6" />,
    },
    {
      heading: "Ready-Made Templates",
      description:
        "Choose from gaming, finance, tech, vlog, education and more. Professionally designed layouts for every niche.",
      icon: <Layers className="size-6" />,
    },
    {
      heading: "One-Click Exports",
      description:
        "Download thumbnails in perfect YouTube sizes (16:9, 1:1, 9:16). Optimized for quality, speed, and instant publishing.",
      icon: <SquareKanban className="size-6" />,
    },
    {
      heading: "Lightning Fast Generation",
      description:
        "Generate thumbnails in under 5 seconds. No design skills, no Photoshop, no waiting — just click and create.",
      icon: <BatteryCharging className="size-6" />,
    },
  ],
  buttonText = "More Features",
  buttonUrl = "https://shadcnblocks.com",
  className,
}: Feature43Props) => {
  return (
    <section className={cn("py-16 relative z-10", className)}>
      <div className="container px-8 mx-auto">
        <div className="mb-12">
          <Heading> {title}</Heading>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 ">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full border shadow-md text-center">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.heading}</h3>
              <p className="text-muted-foreground text-center text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature43 };
