"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { getUser } from "@/services/userApi";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cancelSubscription } from "@/services/subscriptionApi";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

interface UserData {
  plan: "free" | "pro" | "creator";
  subscriptionStatus: string;
}

const PlanDetails = ({ className }: { className?: string }) => {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [canceling, setCanceling] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = await getToken();
      try {
        if (token) {
          const res = await getUser(token);
          if (res.success) {
            setUserData(res.user);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isLoaded && isSignedIn) {
      fetchUserData();
    }
  }, [isLoaded, isSignedIn, getToken]);

  if (!isLoaded || loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const plan = userData?.plan || "free";

  const handleCancelPlan = async () => {
    const token = await getToken();
    setCanceling(true);
    try {
      const response = await cancelSubscription(token as string);
      if (response && response.success) {
        toast({
          title: "Subscription Cancelled",
          description: "Your subscription has been successfully cancelled.",
        });
        setTimeout(() => {
          router.push("/subscription/canceled");
        }, 1500);
      } else {
        toast({
          title: "Failed",
          description: "Failed to cancel subscription.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "An error occurred while canceling.",
        variant: "destructive",
      });
    } finally {
      setCanceling(false);
    }
  };

  return (
    <Card className={cn("w-full max-w-2xl", className)}>
      <CardHeader>
        <CardTitle>Your Plan</CardTitle>
        <CardDescription>
          Manage your subscription and billing details.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h3 className="text-lg font-medium capitalize">{plan} Plan</h3>
            <p className="text-sm text-muted-foreground">
              {plan === "free"
                ? "You are on the free plan."
                : "You have an active subscription."}
            </p>
          </div>

          {plan === "free" && (
            <Button variant="default" onClick={() => router.push("/pricing")}>
              Upgrade Plan
            </Button>
          )}
          {(plan === "pro" || plan === "creator") && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" disabled={canceling}>
                  {canceling ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : null}
                  Cancel Plan
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will cancel your current
                    subscription and revert you to the free plan at the end of
                    your billing cycle.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel disabled={canceling}>
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={(e) => {
                      e.preventDefault();
                      handleCancelPlan();
                    }}
                    disabled={canceling}
                  >
                    {canceling ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      "Confirm Cancellation"
                    )}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanDetails;
