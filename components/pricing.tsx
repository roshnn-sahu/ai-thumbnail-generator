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
import { useUser, useAuth } from "@clerk/nextjs";
import AuthModal from "@/components/auth/auth-modal";
import { useRouter } from "next/navigation";
import CheckoutModal from "./checkout-modal";

const USD_TO_INR = 90;

const basePlans = [
  {
    id: "free",
    name: "Free",
    description: "Try the platform risk-free",
    monthly: 0,
    yearly: 0,
    highlight: false,
    features: [
      "30 AI thumbnail generations / month",
      "Unlimited tags & keyword tools",
      "Unlimited tag extractor",
      "Watermarked exports",
      "Standard speed queue",
      "Community support",
    ],
    buttonText: "Start Free",
    url: "/signup",
  },
  {
    id: "pro",
    planId: "prod_U391ti2DGLnF58",
    name: "Pro",
    description: "Perfect for growing creators",
    monthly: 7,
    yearly: 60,
    highlight: true,
    features: [
      "150 thumbnails / month",
      "Unlimited SEO tools",
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
    planId: "prod_U3920hfgd5IEdQ",
    name: "Creator",
    description: "Unlimited for professionals & teams",
    monthly: 12,
    yearly: 120,
    highlight: false,
    features: [
      "Unlimited thumbnails",
      "Unlimited SEO tools",
      "Bulk generation",
      "Team access",
      "Fastest private queue",
      "Commercial license",
      "Early features",
      "Priority support",
    ],
    buttonText: "Go Unlimited",
    url: "/signup",
  },
];

export function Pricing({ className }: { className?: string }) {
  const [yearly, setYearly] = useState(false);
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const { isSignedIn } = useUser();
  const { getToken } = useAuth();
  const router = useRouter();

  const handlePlanAction = (plan: any) => {
    if (!isSignedIn) {
      setAuthModalOpen(true);
      return;
    }

    if (plan.id === "free") {
      router.push("/");
      return;
    }

    setSelectedPlan(plan);
    setCheckoutModalOpen(true);
  };

  const onCheckout = async () => {
    if (!selectedPlan) return;

    try {
      const token = await getToken();
      if (!token) {
        alert("Session expired. Please sign in again.");
        return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/plan/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            planId: selectedPlan.planId,
            isYearly: yearly,
            currency: currency,
          }),
        },
      );

      const data = await response.json();

      if (data.success && data.url) {
        window.location.href = data.url;
      } else {
        alert(data.message || "Failed to initiate checkout");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setCheckoutModalOpen(false);
    }
  };

  const formatPrice = (price: number) => {
    if (currency === "INR") {
      return `₹${Math.round(price * USD_TO_INR)}`;
    }
    return `$${price}`;
  };

  console.log(selectedPlan, "selected plan");
  return (
    <section
      className={cn(
        "pt-12 pb-26 w-full max-w-6xl mx-auto relative z-10 px-5",
        className,
      )}
    >
      {/* Header */}
      <div className="text-center mb-14 space-y-4">
        <h2 className="text-4xl font-bold">Simple Pricing</h2>
        <p className="text-muted-foreground">
          Free SEO tools. Pay only for AI thumbnail generation.
        </p>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-sm">
            <span>Monthly</span>
            <Switch checked={yearly} onCheckedChange={setYearly} />
            <span>Yearly</span>
          </div>

          {/* Currency Dropdown */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as "USD" | "INR")}
            className="border rounded-md px-3 py-1 text-sm bg-background"
          >
            <option value="USD">USD ($)</option>
            <option value="INR">INR (₹)</option>
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {basePlans.map((plan) => {
          const price = yearly ? plan.yearly : plan.monthly;

          return (
            <Card
              key={plan.id}
              className={cn(
                "flex flex-col rounded-2xl border hover:shadow-xl transition",
                plan.highlight && "border-primary scale-[1.03] shadow-lg",
              )}
            >
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-bold">
                    {formatPrice(price)}
                  </span>
                  <span className="text-muted-foreground">
                    {yearly ? "/yr" : "/mo"}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <Separator className="mb-5" />
                <ul className="space-y-3 text-sm">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <CircleCheck className="size-4 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button
                  className="w-full cursor-pointer"
                  onClick={() => handlePlanAction(plan)}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
      <CheckoutModal
        open={checkoutModalOpen}
        onOpenChange={setCheckoutModalOpen}
        plan={selectedPlan}
        isYearly={yearly}
        onCheckout={onCheckout}
      />
    </section>
  );
}
