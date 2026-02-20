"use client";

import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import SubHeading from "./sub-heading";

export default function Demo() {
  return (
    <section className="py-12 w-full ">
      <div className="container max-w-4xl text-center mx-auto relative z-10 px-5">
        <h2 className="text-3xl md:text-5xl font-bold">
          Try it free — generate your first thumbnail
        </h2>

        <SubHeading >
          Upload an image and see AI generate thumbnails instantly. No signup
          required.
        </SubHeading>

        <div className="mt-10 border-2 border-dashed rounded-2xl p-16 hover:bg-muted/40 transition cursor-pointer">
          <div className="flex flex-col items-center gap-4">
            <UploadCloud className="w-10 h-10 opacity-60" />
            <p className="text-sm text-muted-foreground">
              Click or drag image here
            </p>
            <Button>Generate Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
