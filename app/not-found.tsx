"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroGridPattern from "@/components/mui/HeroGridPattern";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <HeroGridPattern>
      <div className="flex flex-col items-center justify-center h-full px-4 text-center py-20 relative z-10 overflow-hidden">
        <motion.div
   
          className="relative"
        >
          <h1 className="text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary/80 to-primary select-none opacity-10">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
         Page not Found
            </h2>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto mt-4"
        >
          The page you're looking for has drifted away. Let's get you back to
          familiar territory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </motion.div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/20"
              animate={{
                x: [
                  Math.random() * 400 - 200,
                  Math.random() * 400 - 200,
                  Math.random() * 400 - 200,
                ],
                y: [
                  Math.random() * 400 - 200,
                  Math.random() * 400 - 200,
                  Math.random() * 400 - 200,
                ],
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </HeroGridPattern>
  );
}
