"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import TagResult from "./tag-result";
import { useState } from "react";
import { generateTags } from "@/services/instagram/tag-generator";
import { Spinner } from "@/components/ui/spinner";

const TopicInput = ({ ...props }) => {
  const [topic, setTopic] = useState("");
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    if (!topic) return;
    const res = await generateTags(topic);
    setData(res);
    setTopic("");
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
            placeholder={"Enter Your Topic"}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={isLoading}
            required
          />
          <Button
            onClick={handleSubmit}
            disabled={isLoading || topic.length === 0}
            className={cn(" active:scale-95")}
          >
            {isLoading ? <Spinner /> : "  Generate"}
          </Button>
        </motion.div>
        <TagResult data={data} />
      </div>
    </>
  );
};

export default TopicInput;
