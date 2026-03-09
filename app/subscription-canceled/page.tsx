"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { XCircle, ArrowRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import HeroGridPattern from "@/components/mui/HeroGridPattern";

export default function SubscriptionCanceledPage() {
  const router = useRouter();

  return (
    <HeroGridPattern>
      <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-card blur-[120px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-card backdrop-blur-xl border border-border p-10 rounded-3xl text-center relative z-10 shadow-2xl"
        >
          <div className="inline-flex items-center justify-center p-4 bg-red-500/10 rounded-full mb-6">
            <XCircle className="w-12 h-12 text-red-500" />
          </div>

          <h1 className="text-4xl font-black mb-4 bg-gradient-to-br from-black to-neutral-500 bg-clip-text text-transparent">
            Subscription Canceled
          </h1>

          <p className="text-neutral-400 mb-10 leading-relaxed">
            Your subscription has been successfully canceled. You will continue
            to have access to your premium features until the end of your current billing cycle.
          </p>

          <div className="grid gap-4">
            <Button
              onClick={() => router.push("/pricing")}
              className="h-14 group transition-all"
            >
              View Other Plans
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              onClick={() => router.push("/")}
              className="h-14 rounded-2xl flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go to Home
            </Button>
          </div>
        </motion.div>
      </div>
    </HeroGridPattern>
  );
}
