"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SettingsProfile from "./profile";
import PlanDetails from "./plan-details";
import { User, Shield, Settings, Users, Key, LogOut, CreditCard } from "lucide-react";

import { useClerk } from "@clerk/nextjs";
export const title = "Vertical Tabs";

const TabsLayout = () => {
  const { signOut } = useClerk();
  return (
    <Tabs
      orientation="vertical"
      className="flex w-full max-w-6xl flex-col md:flex-row gap-0 py-4 md:py-8 px-4 min-h-screen"
      defaultValue="profile"
    >
      <h2 className="mb-4 md:mb-6 px-2 md:px-4 text-xl font-bold tracking-tight block md:hidden">
        Settings
      </h2>
      <div className="w-full md:w-64 shrink-0 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4 overflow-x-auto  ">
        <h2 className="mb-4 md:mb-6 px-2 md:px-4 text-xl font-bold tracking-tight hidden md:block">
          Settings
        </h2>
        <TabsList className="flex flex-row md:flex-col bg-transparent  gap-1       ">
          <TabsTrigger
            className="justify-start gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none hover:bg-muted/50 transition-colors whitespace-nowrap"
            value="profile"
          >
            <User className="w-4 h-4" />
            Profile
          </TabsTrigger>

          <TabsTrigger
            className="justify-start gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none hover:bg-muted/50 transition-colors whitespace-nowrap"
            value="plan"
          >
            <CreditCard className="w-4 h-4" />
            Plan
          </TabsTrigger>
 
      
          <TabsTrigger
            className="justify-start gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none hover:bg-muted/50 transition-colors whitespace-nowrap"
            value=""
          >
            <LogOut className="w-4 h-4" />
            <button onClick={() => signOut({ redirectUrl: "/" })}>
              Sign out
            </button>
          </TabsTrigger>
        </TabsList>
      </div>

      <div className="flex-1 pl-0 md:pl-8 pt-6 md:pt-0">
        <TabsContent value="profile" className="mt-0 outline-none">
          <SettingsProfile />
        </TabsContent>
        <TabsContent value="plan" className="mt-0 outline-none">
          <PlanDetails />
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default TabsLayout;
