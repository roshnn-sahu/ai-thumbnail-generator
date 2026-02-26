"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, ArrowRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import HeroGridPattern from "@/components/mui/HeroGridPattern";

export default function SuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroGridPattern>
      <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
        {showConfetti && (
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={500}
            gravity={0.1}
          />
        )}

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-card blur-[120px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-card backdrop-blur-xl border border-border p-10 rounded-3xl text-center relative z-10 shadow-2xl"
        >
          <div className="inline-flex items-center justify-center p-4 bg-green-500/10 rounded-full mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>

          <h1 className="text-4xl font-black mb-4 bg-gradient-to-br from-black to-neutral-500 bg-clip-text text-transparent">
            Welcome to the Club!
          </h1>

          <p className="text-neutral-400 mb-10 leading-relaxed">
            Your payment was successful and your account has been upgraded. You
            now have full access to premium features and more AI credits.
          </p>

          <div className="grid gap-4">
            <Button
              onClick={() => router.push("/ai-thumbnail-generator")}
              className="h-14 group transition-all"
            >
              Generate Thumbnail
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

          {sessionId && (
            <p className="mt-8 text-[10px] text-neutral-600 font-mono break-all uppercase tracking-widest">
              Order Ref: {sessionId.slice(0, 20)}...
            </p>
          )}
        </motion.div>

        {/* Floating Sparkles for extra premium feel */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4"
        >
          <Sparkles className="w-8 h-8 text-primary/30" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 left-1/4"
        >
          <Sparkles className="w-6 h-6 text-purple-500/30" />
        </motion.div>
      </div>
    </HeroGridPattern>
  );
}
