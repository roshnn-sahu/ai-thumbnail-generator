"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SignIn } from "@clerk/nextjs";

export default function AuthModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0">
        <SignIn routing="hash" />
      </DialogContent>
    </Dialog>
  );
}
