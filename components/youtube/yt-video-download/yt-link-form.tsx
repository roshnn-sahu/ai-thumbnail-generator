"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { Spinner } from "../../ui/spinner";
import { downloadVideo } from "@/services/youtube/video-download";

const YtInput = ({ ...props }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    if (!videoUrl) return;
    const res = await downloadVideo(videoUrl);
    setData(res);
    setVideoUrl("");
    setIsLoading(false);
  };

  return (
    <>
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 max-w-xl mx-auto relative z-10 "
        >
          <Input
            {...props}
            placeholder={"Enter Video URL"}
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            disabled={isLoading}
            required
          />
          <Button
            onClick={handleSubmit}
            disabled={isLoading || videoUrl.length === 0}
            className={cn(" active:scale-95")}
          >
            {isLoading ? <Spinner /> : "  Download"}
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default YtInput;
