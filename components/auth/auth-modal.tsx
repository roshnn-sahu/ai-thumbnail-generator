"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SignIn, useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function AuthModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn && open) {
      onOpenChange(false);
    }
  }, [isSignedIn, open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0">
        <DialogTitle className="sr-only">Authentication</DialogTitle>
        <SignIn routing="hash" />
      </DialogContent>
    </Dialog>
  );
}
