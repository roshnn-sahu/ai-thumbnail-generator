"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconUpload, IconX } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";
import ImagePreview from "@/components/thumbnail-generator/image-preview";
import GridPattern from "@/components/mui/GridPattern";
import { Lock } from "lucide-react";

import AuthModal from "@/components/auth/auth-modal"
import { useUser } from "@clerk/nextjs";

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
  const [authModalOpen,setAuthModalOpen]=useState(false)

    const { isSignedIn } = useUser();

  const [options, setOptions] = useState({
    prompt: "",
    aspectRatio: "16:9",
    count: 1,
    isRemix: false,
    remixImages: [] as (File | null)[],
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    const file = newFiles[0];
    
    if (!isSignedIn) {
      setAuthModalOpen(true);
      return;
    }
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
    setOptions({
      prompt: "",
      aspectRatio: "16:9",
      isRemix: false,
      count: 1,
      remixImages: [],
    });
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

  return (
    <div className="w-full  px-5" {...getRootProps()}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => {
          files.length === 0 && handleClick();
        }}
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
            "flex flex-col gap-8 transition-all duration-500 ",
            files.length > 0
              ? "md:flex-row items-start"
              : "items-center justify-center",
          )}
        >
          {/* Left Side: Upload / Preview */}
          <div
            onClick={handleClick}
            className={cn(
              "relative w-full transition-all duration-500",
              files.length > 0 ? "md:w-1/2" : "max-w-xl",
            )}
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

            <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
          </div>

          {/* Right Side: Options (Only visible when file is uploaded) */}
          <FileUploadOptions
            files={files}
            options={options}
            onGenerate={onGenerate}
            isLoading={isLoading}
            setOptions={setOptions}
          />
        </div>
      </motion.div>
    </div>
  );
};

const FileUploadOptions = ({
  files,
  options,
  setOptions,
  onGenerate,
  isLoading,
}: {
  files: File[];
  options: any;
  setOptions: any;

  onGenerate?: (
    prompt: string,
    count: number,
    aspectRatio: string,
    isRemix: boolean,
    remixImages?: File[],
  ) => void;
  isLoading?: boolean;
}) => {
  return (
    <>
      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="w-full md:w-1/2 flex flex-col gap-4 z-40 relative "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="prompt"
                className="text-sm font-semibold text-neutral-700 dark:text-neutral-300"
              >
                Describe Here
              </label>
              <textarea
                value={options.prompt}
                onChange={(e) =>
                  setOptions((prev: any) => ({
                    ...prev,
                    prompt: e.target.value,
                  }))
                }
                placeholder="Write better prompt for better results"
                id="prompt"
                name="prompt"
                className="w-full h-32 p-3 rounded-lg border border-border bg-white dark:bg-neutral-800 text-sm focus:ring-2 focus:ring-card-foreground outline-none resize-none transition-shadow hover:shadow-md"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Count
                </label>

                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() =>
                        setOptions((prev: any) => ({
                          ...prev,
                          count: num,
                        }))
                      }
                      className={`p-2 rounded-lg border text-sm transition-all ${
                        options.count === num
                          ? "bg-neutral-900 text-white border-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 dark:border-neutral-100 font-medium"
                          : "bg-white dark:bg-neutral-800 border-border text-neutral-600 dark:text-neutral-400 hover:shadow-md"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Aspect Ratio
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {["1:1", "4:3", "3:2", "16:9", "9:16"].map((ratio) => (
                    <button
                      key={ratio}
                      type="button"
                      onClick={() =>
                        setOptions((prev: any) => ({
                          ...prev,
                          aspectRatio: ratio,
                        }))
                      }
                      className={cn(
                        "flex items-center justify-center p-2 rounded-lg border border-border text-xs transition-all",
                        options.aspectRatio === ratio
                          ? "bg-foreground text-white border-foreground"
                          : "bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700",
                      )}
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>

              <div className="col-span-full mt-2">
                <button
                  type="button"
                  onClick={() =>
                    setOptions((prev: any) => ({
                      ...prev,
                      isRemix: !prev.isRemix,
                    }))
                  }
                  className="flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors uppercase tracking-wider border px-2 rounded-lg py-1"
                >
                  {options.isRemix ? (
                    "✕ Cancel Remix"
                  ) : (
                    <span className="flex gap-1 items-center">
                      {" "}
                      ⚡ Remix Mode <Lock className="w-3 h-3 font-bold" />{" "}
                    </span>
                  )}
                </button>

                {options.isRemix && (
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {[0, 1, 2].map((i) => {
                      const remixFile = options.remixImages?.[i];
                      return (
                        <div
                          key={i}
                          className="relative aspect-square rounded-lg border-2 border-dashed border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-900/50 transition-all overflow-hidden"
                        >
                          {remixFile ? (
                            <div>
                              <img
                                src={URL.createObjectURL(remixFile)}
                                alt={`Remix ${i + 1}`}
                                className="h-full w-full object-cover"
                              />
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setOptions((prev: any) => {
                                    const newRemixImages = [
                                      ...(prev.remixImages || []),
                                    ];
                                    newRemixImages[i] = null;
                                    return {
                                      ...prev,
                                      remixImages: newRemixImages,
                                    };
                                  });
                                }}
                                className="absolute top-1 right-1 p-1 bg-neutral-900/70 hover:bg-red-500 rounded-full text-white z-20 transition-colors"
                              >
                                <IconX className="h-3 w-3" />
                              </button>
                            </div>
                          ) : (
                            <span className="text-neutral-400 text-lg text-center">
                              + <br />{" "}
                              <span className="text-xs">Click And Upload</span>
                            </span>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer z-10"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                setOptions((prev: any) => {
                                  const next = [...(prev.remixImages || [])];
                                  next[i] = file;
                                  return { ...prev, remixImages: next };
                                });
                              }
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading || !options.prompt.trim()}
              onClick={() =>
                onGenerate?.(
                  options.prompt,
                  options.count || 1,
                  options.aspectRatio,
                  options.isRemix,
                  options.remixImages.filter(Boolean) as File[],
                )
              }
              className={cn(
                "mt-4 w-full py-3 bg-foreground hover:bg-foreground/95 text-white font-bold rounded-lg shadow-lg shadow-foreground/30 transition-colors cursor-pointer disabled:opacity-90 disabled:cursor-not-allowed flex items-center justify-center gap-2",
              )}
            >
              {isLoading ? (
                <>
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate"
              )}
            </motion.button>
           
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
