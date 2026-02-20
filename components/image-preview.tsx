import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ImagePreview = ({ file }: { file: File }) => {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file.type.startsWith("image/")) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [file]);

  if (!preview) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className=" select-none w-full relative rounded-lg overflow-hidden border border-border bg-neutral-50 dark:bg-neutral-800/50 p-2"
    >
      <img
        src={preview}
        alt="preview"
        draggable={false}
        className="w-full  h-auto max-h-[300px] object-cover object-top mx-auto rounded-md mask-b-from-60% select-none "
      />
    </motion.div>
  );
};

export default ImagePreview;
