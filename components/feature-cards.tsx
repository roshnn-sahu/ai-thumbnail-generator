import { cn } from "@/lib/utils";
import {
  BarChart3,
  Cpu,
  Fingerprint,
  Hash,
  Pencil,
  Rocket,
  Search,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";
import { PlusIcon } from "lucide-react";
import React from "react";

type FeatureType = {
  heading: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
};

type FeatureCardPorps = React.ComponentProps<"div"> & {
  feature: FeatureType;
};

const features: FeatureType[] = [
  {
    heading: "AI Thumbnail Generator",
    description:
      "Create high-CTR YouTube thumbnails in seconds. Just enter your title or idea and our AI designs eye-catching thumbnails automatically.",
    icon: Zap,
  },
  {
    heading: "Smart Keyword Finder",
    description:
      "Discover trending and low-competition keywords based on your niche to rank higher and get more organic views.",
    icon: Search,
  },
  {
    heading: "Hashtag Generator",
    description:
      "Generate optimized YouTube & Instagram hashtags instantly to boost reach, impressions, and discoverability.",
    icon: Hash,
  },
  {
    heading: "AI Design Magic",
    description:
      "Auto layouts, smart colors, fonts, and effects powered by AI so your thumbnails always look professional without design skills.",
    icon: Sparkles,
  },
  {
    heading: "Performance Insights",
    description:
      "Track clicks, impressions, and engagement to understand what works and continuously improve your content strategy.",
    icon: BarChart3,
  },
  {
    heading: "Built for Creators",
    description:
      "Fast, lightweight, and beginner-friendly tools designed specifically for YouTubers, gamers, influencers, and content creators.",
    icon: Rocket,
  },
];

export function GridFeatureCards() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-18">
      <div className="mb-12 flex max-w-3xl flex-col gap-4 text-center mx-auto">
        <div className="flex justify-center">
          <div className="border py-1 px-4 rounded-lg text-sm relative">
            <PlusIcon
              className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6"
              strokeWidth={1}
            />
            <PlusIcon
              className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6"
              strokeWidth={1}
            />
            <PlusIcon
              className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
              strokeWidth={1}
            />
            <PlusIcon
              className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6"
              strokeWidth={1}
            />
            <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
            <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />
            Tools
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Everything creators need to grow faster with AI
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-r lg:grid-cols-3  mx-auto">
        {features.map((feature: any) => (
          <FeatureCard
            key={feature.heading}
            feature={feature}
            className="border-l border-t"
          />
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ feature, className, ...props }: FeatureCardPorps) {
  const p = genRandomPattern();

  return (
    <div
      className={cn("relative z-10 overflow-hidden p-6", className)}
      {...props}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={p}
            className="fill-foreground/5 stroke-foreground/25 absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>
      <feature.icon
        className="text-foreground/75 size-6"
        strokeWidth={1}
        aria-hidden
      />
      <h3 className="mt-10 text-sm font-semibold md:text-base">
        {feature.heading}
      </h3>
      <p className="text-muted-foreground relative z-20 mt-2 text-xs font-light">
        {feature.description}
      </p>
    </div>
  );
}

export default GridFeatureCards;
function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], index) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

function genRandomPattern(length?: number): number[][] {
  length = length ?? 5;
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
    Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
  ]);
}
