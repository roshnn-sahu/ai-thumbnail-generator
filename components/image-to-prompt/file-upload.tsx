"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconArrowsShuffle,
  IconCheck,
  IconCopy,
  IconUpload,
  IconX,
} from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";
import ImagePreview from "@/components/thumbnail-generator/image-preview";
import GridPattern from "@/components/mui/GridPattern";
import { imageToPrompt } from "@/services/other-tools/image-to-prompt";

import AuthModal from "@/components/auth/auth-modal";
import { useUser } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { getUser } from "@/services/userApi";
import UpgradeModal from "@/components/auth/upgrade-modal";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/hooks/use-toast";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

interface FileUploadProps {
  onChange?: (files: File[]) => void;
  onGenerate?: (
    prompt: string,
    count: number,
    aspectRatio: string,
    isRemix: boolean,
    remixImages?: File[],
  ) => void;
  handleReset?: () => void;
  isLoading?: boolean;
}

export const FileUpload = ({
  onChange,
  onGenerate,
  isLoading = false,
  handleReset,
}: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [plan, setPlan] = useState<"free" | "pro" | "creator">("free");
  const [generating, setGenerating] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [copied, setCopied] = useState(false);

  const { isSignedIn } = useUser();
  const { getToken } = useAuth();
  const { toast } = useToast();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    const file = newFiles[0];

    if (file) {
      setFiles([file]);
      onChange?.([file]);
    }
  };

  // Removes the file, notifies parent with [], and resets options
  const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFiles([]);
    onChange?.([]); // tells parent the file is gone → triggers handleReset
    handleReset?.(); // also call directly as a safety net
    setGeneratedPrompt("");
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
    },
    onDropRejected: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    const loadUser = async () => {
      const token = await getToken();
      if (!token) return;
      const res = await getUser(token);
      setPlan(res.plan);
    };

    loadUser();
  }, []);

  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false);

  const handleGenerate = async () => {
    const token = await getToken();

    if (!isSignedIn || !token) {
      setAuthModalOpen(true);
      return;
    }
    if (!files[0] || !token) return;
    setGenerating(true);
    try {
      const res = await imageToPrompt(files[0], token);

      if (res && res.prompt) {
        setGeneratedPrompt(res.prompt);
        toast({
          title: "Success",
          description: `AI Prompt generated! ${res.creditsLeft !== undefined ? `Credits left: ${res.creditsLeft}` : ""}`,
          variant: "success",
        });
      }
    } catch (error: any) {
      console.error("Generate error:", error);

      // If payment/credit error (403 Forbidden)
      if (error.response?.status === 403) {
        setUpgradeModalOpen(true);
        toast({
          title: "Limit Reached",
          description:
            error.response.data?.message ||
            "You have used your free credit for this tool. Please upgrade to continue.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description:
            error.response?.data?.message ||
            error.response?.data?.error ||
            error.message ||
            "Failed to generate prompt. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setGenerating(false);
    }
  };

  const handleCopy = () => {
    if (generatedPrompt) {
      navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      toast({
        title: "Copied",
        description: "Prompt copied to clipboard!",
        variant: "success",
      });
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="w-full  px-5" {...getRootProps()}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={files.length === 0 ? "animate" : ""}
        className={cn(
          "group/file relative block w-full cursor-pointer overflow-hidden rounded-xl border border-dashed border-border bg-white transition-all dark:bg-neutral-900 duration-150 min-h-96 hover:border-sky-400 max-w-5xl ",
          files.length > 0 ? "p-6" : "p-10",
        )}
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none">
          <GridPattern />
        </div>

        <div
          className={cn(
            "grid grid-cols-1  gap-8 transition-all duration-500 ",
            files.length > 0
              ? "md:flex-row items-start md:grid-cols-2"
              : "items-center justify-center",
          )}
        >
          {/* Left Side: Upload / Preview */}
          <div
            onClick={handleClick}
            className={cn("relative w-full transition-all duration-500")}
          >
            <AnimatePresence mode="popLayout">
              {files.length > 0 ? (
                (() => {
                  const file = files[0];
                  return (
                    <motion.div
                      key={file.name}
                      layoutId="file-upload"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className={cn(
                        "relative z-40 mx-auto flex w-full flex-col items-start justify-start overflow-hidden rounded-xl bg-white p-4 dark:bg-neutral-900 shadow-xl border border-border",
                      )}
                    >
                      <ImagePreview file={file} />
                      <div className="flex w-full items-center justify-between gap-4 mt-4">
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layout
                          className="max-w-[150px] truncate text-base text-neutral-700 dark:text-neutral-300 font-medium"
                        >
                          {file.name}
                        </motion.p>
                        <div className="flex items-center gap-2">
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            layout
                            className="shadow-input w-fit shrink-0 rounded-lg px-2 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-white"
                          >
                            {(file.size / (1024 * 1024)).toFixed(2)} MB
                          </motion.p>
                          <button
                            onClick={removeFile}
                            className="p-1 bg-card-foreground hover:bg-card-foreground/80 cursor-pointer dark:hover:bg-neutral-800 rounded-full border border-border transition-colors"
                          >
                            <IconX className="h-4 w-4 text-neutral-50" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 flex w-full flex-col items-start justify-between text-sm text-neutral-600 md:flex-row md:items-center dark:text-neutral-400">
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layout
                          className="rounded-md bg-gray-100 px-2 text-xs py-0.5 dark:bg-neutral-800"
                        >
                          {file.type}
                        </motion.p>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layout
                          className="rounded-md px-2 text-xs py-0.5 "
                        >
                          modified{" "}
                          {new Date(file.lastModified).toLocaleDateString()}
                        </motion.p>
                      </div>
                    </motion.div>
                  );
                })()
              ) : (
                <motion.div
                  layoutId="file-upload"
                  variants={mainVariant}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className={cn(
                    "relative z-40 mx-auto mt-10 flex h-32 w-full max-w-[8rem] items-center justify-center rounded-md bg-white group-hover/file:shadow-2xl dark:bg-neutral-900",
                    "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]",
                  )}
                >
                  {isDragActive ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center text-neutral-600"
                    >
                      Drop it
                      <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                    </motion.p>
                  ) : (
                    <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {!files.length && (
              <motion.div
                variants={secondaryVariant}
                className="absolute inset-0 z-30 mx-auto mt-10 flex h-32 w-full max-w-[8rem] items-center justify-center rounded-md border border-dashed border-sky-400 bg-transparent opacity-0"
              ></motion.div>
            )}

            {files.length === 0 && (
              <div className="relative z-20 mt-10 text-center">
                <p className="relative z-20 font-sans text-base text-neutral-700/80 dark:text-neutral-300">
                  Click to upload or drag and drop
                </p>
                <p className="relative z-20 mt-1 font-sans text-sm font-normal text-neutral-400 dark:text-neutral-400">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            )}
          </div>
          <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
          <UpgradeModal
            open={upgradeModalOpen}
            onOpenChange={setUpgradeModalOpen}
          />

          {files.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="flex flex-col lg:flex-row gap-5 items-center relative z-10  lg:h-full h-100 "
            >
              <Button
                onClick={handleGenerate}
                disabled={generating}
                className="size-12"
              >
                {generating ? (
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <IconArrowsShuffle className="rotate-90 lg:rotate-0 size-6" />
                )}
              </Button>
              <div className="flex flex-col w-full h-full gap-3">
                <Textarea
                  id="prompt"
                  name="prompt"
                  value={generatedPrompt}
                  onChange={(e) => setGeneratedPrompt(e.target.value)}
                  className="w-full lg:h-full h-100 flex-1 p-3 rounded-lg   border-2 border-card-foreground  bg-white dark:bg-neutral-800 text-sm  outline-none resize-none transition-shadow hover:shadow-md  "
                  placeholder={
                    generating
                      ? "Analyzing image..."
                      : "Generated prompt will appear here"
                  }
                  readOnly={generating}
                  disabled
                />

                <Button onClick={handleCopy} disabled={!generatedPrompt}>
                  {copied ? "Copied!" : "Copy"}
                  {copied ? <IconCheck /> : <IconCopy />}
                </Button>
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </div>
      </motion.div>
    </div>
  );
};
