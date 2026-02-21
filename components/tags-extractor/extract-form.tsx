"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "../ui/spinner";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { extractTags } from "@/services/youtube/tags-extractor";
import ExtractedResult from "./extracted-result";

const ExtractForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    setIsLoading(true);
    if (!videoUrl) return;
    const res = await extractTags(videoUrl);
    setData(res.tags);
    setVideoUrl("");
    setIsLoading(false);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-2 max-w-xl mx-auto relative z-10 px-4"
      >
        <Input
          placeholder={"Enter Video URL"}
          onChange={(e) => setVideoUrl(e.target.value)}
          disabled={isLoading}
          value={videoUrl}
        />
        <Button
          onClick={handleSubmit}
          disabled={isLoading || videoUrl.length === 0}
          className={cn(" active:scale-95")}
        >
          {isLoading ? <Spinner /> : "  Generate"}
        </Button>
      </motion.div>
      <ExtractedResult data={data} />
    </>
  );
};

export default ExtractForm;
