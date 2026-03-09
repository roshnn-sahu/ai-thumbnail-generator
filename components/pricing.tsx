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
import Heading from "./heading";
import SubHeading from "./sub-heading";

import { offlinePlan, onlinePlan } from "@/lib/plans";

const USD_TO_INR = 90;

export function Pricing({ className }: { className?: string }) {
  const [yearly, setYearly] = useState(false);
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [selectedPlanDetails, setSelectedPlanDetails] = useState<any>(null);
  const [production, setProduction] = useState(true);

  const basePlans = production ? onlinePlan : offlinePlan;

  const [isLoading, setIsLoading] = useState(false);

  const { isSignedIn, user } = useUser();
  const { getToken } = useAuth();
  const router = useRouter();

  const handlePlanAction = (plan: any, planId: any) => {
    if (!isSignedIn) {
      setAuthModalOpen(true);
      return;
    }

    if (plan.id === "free") {
      router.push("/");
      return;
    }

    setSelectedPlan(planId);
    setSelectedPlanDetails(plan);
    setCheckoutModalOpen(true);
  };
//HANDLE SUBSCRIPTION
  const onCheckout = async (e?: any) => {
    if (e) e.preventDefault();

    if (!selectedPlan) return;

    setIsLoading(true);

    try {
      const token = await getToken();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subscription/create-subscription`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            planId: selectedPlan,
            clerkUser: user,
          }),
        },
      );

      const data = await response.json();

      console.log("Subscription Response:", data);

      if (!data.success || !data.subscription?.id) {
        console.error("Failed to start payment");
        return;
      }

      if (!(window as any).Razorpay) {
        console.error("Razorpay SDK not loaded");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
        subscription_id: data.subscription.id,

        name: "BoltCreator",
        description: "AI Thumbnail Generator",

        theme: {
          color: "#0060AA",
        },

        handler: function (response: any) {
          console.log("Payment Success:", response);
          window.location.href = "/subscription/success";
        },

        modal: {
          ondismiss: function () {
            console.log("Payment popup closed");
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);

      rzp.on("payment.failed", function (response: any) {
        console.error("Payment Failed:", response.error);
        const errorMsg = encodeURIComponent(
          response.error.description || "Payment Failed",
        );
        window.location.href = `/subscription/failed?error=${errorMsg}`;
      });

      rzp.open();
      setCheckoutModalOpen(false);
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    if (currency === "INR") {
      return `₹${Math.round(price * USD_TO_INR)}`;
    }
    return `$${price}`;
  };

  return (
    <section
      className={cn(
        "pt-12 pb-26 w-full max-w-6xl mx-auto relative z-10 px-5",
        className,
      )}
    >
      {/* Header */}
      <div className="text-center mb-14 space-y-4">
        <Heading>Simple Pricing</Heading>
        <SubHeading>
          Free SEO tools. Pay only for AI thumbnail generation.
        </SubHeading>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-sm">
            <span>Monthly</span>
            <Switch checked={yearly} onCheckedChange={setYearly} />
            <span>Yearly</span>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {basePlans.map((plan) => {
          const price = yearly ? plan.yearly : plan.monthly;
          const planId = yearly ? plan.yearlyPlanId : plan.monthlyPlanId;

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
                  onClick={() => handlePlanAction(plan, planId)}
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
        isLoading={isLoading}
        open={checkoutModalOpen}
        onOpenChange={setCheckoutModalOpen}
        plan={selectedPlanDetails}
        isYearly={yearly}
        onCheckout={onCheckout}
      />
    </section>
  );
}
