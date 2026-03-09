"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { XCircle, ArrowRight, Home, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import HeroGridPattern from "@/components/mui/HeroGridPattern";

export default function FailurePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const errorMsg = searchParams.get("error");
  const { width, height } = useWindowSize();

  return (
    <HeroGridPattern>
   
      <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-card blur-[120px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-card backdrop-blur-xl border border-destructive/20 p-10 rounded-3xl text-center relative z-10 shadow-2xl"
        >
          <div className="inline-flex items-center justify-center p-4 bg-destructive/10 rounded-full mb-6">
            <XCircle className="w-12 h-12 text-destructive" />
          </div>

          <h1 className="text-4xl font-black mb-4 bg-gradient-to-br from-black to-neutral-500 bg-clip-text text-transparent">
            Payment Failed
          </h1>

          <p className="text-neutral-400 mb-10 leading-relaxed">
            {errorMsg || "We couldn't process your payment at this time. Please check your payment details and try again."}
          </p>

          <div className="grid gap-4">
            <Button
              onClick={() => router.push("/pricing")}
              className="h-14 group transition-all"
            >
              <RefreshCcw className="w-5 h-5 mr-2 group-hover:-rotate-180 transition-transform duration-500" />
              Try Again
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
