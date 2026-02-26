"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Pricing } from "@/components/pricing";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import Link from "next/link";

export default function UpgradeModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl  overflow-hidden p-6">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-center">
            Upgrade Your Plan
          </DialogTitle>
          <DialogDescription className="text-center">
            Unlock premium features like Remix Mode, high-quality exports, and
            more.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <Link href="/pricing">
            <Button className="cursor-pointer">Upgrade</Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
