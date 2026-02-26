"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, Trash2, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Plan {
  id: string;
  name: string;
  description: string;
  monthly: number;
  yearly: number;
  features: string[];
}

interface CheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  plan: Plan | null;
  isYearly: boolean;
  onCheckout: () => void;
}

export default function CheckoutModal({
  open,
  onOpenChange,
  plan,
  isYearly,
  onCheckout,
}: CheckoutModalProps) {
  if (!plan) return null;

  const price = isYearly ? plan.yearly : plan.monthly;
  const originalPrice = isYearly ? Math.round(plan.yearly * 1.5) : Math.round(plan.monthly * 1.5);
  const billingCycle = isYearly ? "yearly" : "monthly";
  const interval = isYearly ? "12 months" : "month";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[500px] p-0 bg-card border-card text-white overflow-hidden">
        <div className="relative p-6">
          {/* Header Info */}
          <div className="flex gap-6 items-start mb-8">
            <div className="relative w-40 h-28 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 flex items-center justify-center shrink-0">
              {/* Placeholder for the premium image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20" />
              <Sparkles className="w-8 h-8 text-primary/50" />
              <div className="absolute bottom-2 left-2 right-2 bg-black/40 backdrop-blur-sm p-1 rounded text-[8px] border border-white/10">
                ThumbAI {plan.name}
              </div>
            </div>

            <div className="flex-1 min-w-0 text-foreground">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-2xl font-bold truncate ">
                  {plan.name} Access
                </h3>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">${price}</span>
                <span className="text-neutral-500 line-through text-lg">
                  ${originalPrice}
                </span>
              </div>
            </div>
          </div>

          {/* Subscription details */}
          <div className="text-center mb-8 px-4 max-w-lg">
            <p className="text-neutral-600 text-sm leading-relaxed">
              Pay{" "}
              <span className=" text-foreground font-semibold">${price}</span>{" "}
              then{" "}
              <span className="text-foreground font-semibold">${price}</span>{" "}
              every {interval} until canceled. You may cancel subscriptions at
              any time.
            </p>
          </div>

          {/* Checkout Button */}
          <div className="flex justify-center pb-2">
            <Button
              onClick={onCheckout}
              className=""
            >
              Checkout
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
