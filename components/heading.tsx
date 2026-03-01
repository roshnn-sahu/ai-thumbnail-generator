import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface HeadingProps {
  as?: "h1" | "h2";
  className?: string;
  children: ReactNode;
}

const Heading = ({ as: Tag = "h2", className, children }: HeadingProps) => {
  return (
    <Tag
      className={cn(
        Tag === "h1"
          ? "text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-4 text-center"
          : "text-3xl  sm:text-4xl md:text-5xl lg:text-6xl  font-bold tracking-tighter text-center mt-5",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;
