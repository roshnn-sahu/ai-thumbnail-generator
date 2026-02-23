"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { generateKeywords } from "@/services/instagram/generateKeywords";
import KeywordResult from "./keyword-results";

const KeywordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    setIsLoading(true);
    if (!topic) return;
    const res = await generateKeywords(topic);
    setData(res.keywords);
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
          className="flex items-center justify-center gap-2 max-w-xl mx-auto relative z-10"
        >
          <Input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder={"Enter Your Topic"}
            disabled={isLoading}
          />
          <Button
            onClick={handleSubmit}
            disabled={isLoading || topic.length === 0}
            className={cn(" active:scale-95")}
          >
            {isLoading ? <Spinner /> : "  Generate"}
          </Button>
        </motion.div>
        <KeywordResult data={data} />
      </div>
    </>
  );
};

export default KeywordForm;
