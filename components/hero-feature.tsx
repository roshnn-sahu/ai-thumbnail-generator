"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Activity,
  TrendingUp,
  Database,
  Layout,
  Search,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "ctr", label: "Click Rate", icon: Activity },
  { id: "tags", label: "Viral Tags", icon: TrendingUp },
  { id: "seo", label: "SEO Keywords", icon: Search },
  { id: "generate", label: "AI Generation", icon: Sparkles },
];

export default function HeroFeature() {
  const [activeTab, setActiveTab] = useState("models");

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Create Viral Thumbnails <br /> with AI Magic.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            ThumbAI is the all-in-one suite for modern creators. Generate
            high-CTR thumbnails, SEO keywords, and viral tags instantly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="px-8 py-6 rounded-md bg-black text-white hover:bg-black/90"
            >
              Get Started for Free
            </Button>
          </motion.div>
        </div>

        {/* Tabs and Preview Section */}
        <div className="flex flex-col items-center">
          {/* Tabs Container */}
          <div className="inline-flex p-1 bg-muted/50 border rounded-xl mb-12 overflow-x-auto max-w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                    isActive
                      ? "bg-background shadow-sm border text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Browser-like Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full max-w-6xl aspect-16/10 bg-card border rounded-2xl shadow-2xl relative overflow-hidden group"
          >
            {/* Browser Header Overlay */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-muted/30 border-b flex items-center px-4 gap-1.5 z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>

            {/* Content Preview (Dashboard placeholder) */}
            <div className="w-full h-full pt-10 bg-white dark:bg-zinc-950 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="AI Dashboard Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 top-10 bg-linear-to-t from-background/20 to-transparent pointer-events-none" />
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-px bg-linear-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
