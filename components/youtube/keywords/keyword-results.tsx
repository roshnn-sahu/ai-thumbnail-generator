"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, Sparkles, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

interface ExtractedResultProps {
  data: string[];
}

const KeywordResult = ({ data }: ExtractedResultProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (data && data.length > 0) {
      setTags(data);
    }
  }, [data]);

  const handleCopy = async () => {
    if (tags.length === 0) return;
    try {
      await navigator.clipboard.writeText(tags.join(", "));
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Tags copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy tags.",
        variant: "destructive",
      });
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  if (!data || data.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-12 max-w-4xl mx-auto p-8 bg-card/50 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.3)] relative overflow-hidden group "
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/20 to-transparent" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">
              Generated Keywords
            </h3>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {tags.length} professional Keywords ready
          </p>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <Button
            variant="default"
            size="sm"
            onClick={handleCopy}
            className="flex-1 md:flex-none flex items-center gap-2 rounded-xl px-5 py-5 shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 font-semibold active:scale-95"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Check className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Copy className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
            {copied ? "Copied!" : "Copy All"}
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 p-6 bg-muted/20 rounded-2xl border border-muted-foreground/5 min-h-[150px]">
        <AnimatePresence>
          {tags.map((tag, index) => (
            <motion.div
              key={`${tag}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="group/tag flex items-center gap-2 px-3 py-1.5 bg-card border border-zinc-300 rounded-lg text-sm text-zinc-700 font-medium hover:border-zinc-700 transition-colors"
            >
              <span>{tag}</span>
              <button
                onClick={() => removeTag(index)}
                className="p-0.5 hover:bg-zinc-800 rounded-md transition-colors text-zinc-500 hover:text-zinc-300 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
        {tags.length === 0 && (
          <div className="w-full flex items-center justify-center text-muted-foreground italic">
            No tags remaining...
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between text-[11px] text-muted-foreground font-medium uppercase tracking-widest">
        <span>AI Generated Optimization</span>
        <span className="italic opacity-70">
          Click X to remove individual tags
        </span>
      </div>
    </motion.div>
  );
};

export default KeywordResult;
