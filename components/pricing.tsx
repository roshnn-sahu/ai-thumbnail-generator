"use client";

import { CircleCheck } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import Faq from "./faq";

const plans = [
  {
    id: "free",
    name: "Free",
    description: "Try all tools before upgrading",
    monthly: 0,
    yearly: 0,
    highlight: false,
    features: [
      "30 thumbnails per month",
      "20 keyword searches/day",
      "Basic templates",
      "Watermarked exports",
      "Standard speed",
      "Community support",
    ],
    buttonText: "Start Free",
    url: "/signup",
  },
  {
    id: "pro",
    name: "Pro",
    description: "Best for growing YouTubers",
    monthly: 12,
    yearly: 99,
    highlight: true,
    features: [
      "300 thumbnails per month",
      "High keyword & tag limits",
      "No watermark",
      "Premium templates",
      "HD downloads",
      "Generation history",
      "Fast priority queue",
      "Email support",
    ],
    buttonText: "Upgrade to Pro",
    url: "/signup",
  },
  {
    id: "creator",
    name: "Creator",
    description: "Unlimited power for serious creators & teams",
    monthly: 29,
    yearly: 249,
    highlight: false,
    features: [
      "Unlimited thumbnails",
      "Unlimited keywords & tags",
      "Bulk thumbnail generation",
      "Team access (3–5 members)",
      "Private fastest queue",
      "Commercial usage license",
      "Early feature access",
      "Priority support",
      "API access (coming soon)",
    ],
    buttonText: "Go Unlimited",
    url: "/signup",
  },
];

export function Pricing({ className }: { className?: string }) {
  const [yearly, setYearly] = useState(false);

  return (
    <section
      className={cn(
        "pt-12 pb-26 w-full max-w-6xl mx-auto relative z-10",
        className,
      )}
    >
      <div className=" mx-auto px-5">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-7xl  text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            Pricing
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Simple, affordable plans for every creator
          </p>

          {/* Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3 text-sm">
            <span>Monthly</span>
            <Switch checked={yearly} onCheckedChange={setYearly} />
            <span>Yearly</span>
            <span className="text-xs text-muted-foreground">(save ~30%)</span>
          </div>
        </div>

        {/* Cards */}
        <div className="mx-auto grid w-full gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;

            return (
              <Card
                key={plan.id}
                className={cn(
                  "flex flex-col justify-between rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
                  plan.highlight &&
                    "border-primary shadow-lg scale-[1.03] relative",
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-white">
                    Most Popular
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>

                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-4xl font-bold">${price}</span>
                    <span className="text-muted-foreground">
                      {yearly ? "/yr" : "/mo"}
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  <Separator className="mb-6" />
                  <ul className="space-y-3 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CircleCheck className="size-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="mt-auto">
                  <Button
                    asChild
                    className={cn(
                      "w-full",
                      plan.highlight && "bg-primary hover:opacity-90",
                    )}
                  >
                    <a href={plan.url}>{plan.buttonText}</a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
