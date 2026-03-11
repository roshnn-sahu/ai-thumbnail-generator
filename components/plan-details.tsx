"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { getUser } from "@/services/userApi";

import {
  Card,
  CardContent,
  CardDescription,
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
import BillingHistory from "./billing-history";

interface UserData {
  plan: "free" | "pro" | "creator";
  subscriptionStatus: "active" | "cancelled" | "past_due" | "completed";
  subscriptionEnd: string;
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
  const status = userData?.subscriptionStatus;
  const planExpireDate = userData?.subscriptionEnd;

  const handleCancelPlan = async () => {
    const token = await getToken();
    setCanceling(true);

    try {
      const response = await cancelSubscription(token as string);

      if (response?.success) {
        toast({
          title: "Subscription Cancelled",
          description:
            "Your subscription will remain active until the end of the billing period.",
        });

        setUserData((prev) =>
          prev ? { ...prev, subscriptionStatus: "cancelled" } : prev,
        );
        router.push("/subscription/cancelled");
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

  const getStatusMessage = () => {
    if (plan === "free") return "You are currently on the free plan.";

    if (status === "cancelled")
      return "Your subscription will end at the end of the current billing cycle.";

    if (status === "past_due")
      return "Payment failed. Please update your billing method.";

    return "You have an active subscription.";
  };

  return (
    <>
   
    <Card className={cn("w-full max-w-2xl mb-3", className)}>
      <CardHeader>
        <CardTitle>Your Plan</CardTitle>
        <CardDescription>
          Manage your subscription and billing details.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold capitalize flex items-center gap-2">
              {plan} Plan
              {plan !== "free" && (
                <span className="px-2 py-1 text-xs rounded bg-red-400/10 text-primary border border-red-300 rounded-lg">
                  {status}
                </span>
              )}
            </h3>

            <p className="text-sm text-muted-foreground">
              {getStatusMessage()}
            </p>
            <p className="text-sm text-muted-foreground">
              {
                <p className="text-sm text-muted-foreground">
                  {planExpireDate
                    ? `Expires on ${new Date(planExpireDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        },
                      )}`
                    : ""}
                </p>
              }
            </p>
          </div>

          {plan === "free" && (
            <Button onClick={() => router.push("/pricing")}>
              Upgrade Plan
            </Button>
          )}

          {(plan === "pro" || plan === "creator") && status !== "cancelled" && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" disabled={canceling}>
                  {canceling && (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  )}
                  Cancel Plan
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will cancel your subscription. You will continue to
                    have access until the end of your billing cycle.
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel disabled={canceling}>
                    Keep Plan
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
    <BillingHistory/>
     </>

  );
};

export default PlanDetails;
