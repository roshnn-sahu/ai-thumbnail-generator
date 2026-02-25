"use client";

import { useEffect, useState } from "react";
import { Camera, X, Loader2 } from "lucide-react";
import { useAuth, useUser } from "@clerk/nextjs";
import { getUser } from "@/services/userApi";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CreditsTable } from "./creadits-table";

interface UserData {
  name: string;
  email: string;
  clerkId: string;
  image?: string;
  plan: "free" | "pro" | "creator";
  credits: number;
}

interface SettingsProfileProps {
  className?: string;
}

const SettingsProfile = ({ className }: SettingsProfileProps) => {
  const { isLoaded, isSignedIn, user: clerkUser } = useUser();
  const { getToken } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await getToken();
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

  const name = userData?.name || clerkUser?.fullName || "User";
  const email =
    userData?.email || clerkUser?.primaryEmailAddress?.emailAddress || "";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const plan = userData?.plan || "free";
  const credits = userData?.credits ?? 0;

  // Limits based on plan (placeholders for now)
  const limits = {
    free: { today: 3, monthly: 30 },
    pro: { today: 20, monthly: 500 },
    creator: { today: 100, monthly: 5000 },
  };

  const currentLimits = limits[plan];

  return (
    <Card className={cn("w-full max-w-2xl", className)}>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          Your personal information and plan details.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Avatar Section */}
        <div className="flex items-center gap-6">
          <div className="group relative size-20 shrink-0 rounded-full border">
            <Avatar className="size-20">
              <AvatarImage
                src={userData?.image || clerkUser?.imageUrl}
                alt={name}
                className="object-cover"
              />
              <AvatarFallback className="text-xl font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-1">
            <p className="text-base font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{email}</p>
            <Badge className="mt-2 capitalize" variant="outline">
              {plan} Plan
            </Badge>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 pt-4 border-t">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={name} disabled className="bg-muted/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" value={email} disabled className="bg-muted/50" />
          </div>
        </div>

        <div className="pt-6 border-t">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Plan & Usage
          </h4>
          <CreditsTable
            plan={plan}
            todayUsed={limits.free.today - credits} // Mock usage logic for now
            todayLimit={currentLimits.today}
            monthlyUsed={limits.free.today - credits} // Mock usage logic for now
            monthlyLimit={currentLimits.monthly}
          />
        </div>
      </CardContent>
    </Card>
  );
};

// Helper Badge component since it's used above but not imported from UI
function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default"
          ? "bg-primary text-primary-foreground hover:bg-primary/80"
          : "border text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export default SettingsProfile;
