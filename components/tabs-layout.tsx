import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SettingsProfile from "./profile";
import { User, Shield, Settings, Users } from "lucide-react";

export const title = "Vertical Tabs";

const TabsLayout = () => (
  <Tabs
    orientation="vertical"
    className="flex w-full max-w-6xl flex-col md:flex-row gap-0 py-4 md:py-8 px-4"
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
          value="security"
        >
          <Shield className="w-4 h-4" />
          Upgrade
        </TabsTrigger>
        <TabsTrigger
          className="justify-start gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none hover:bg-muted/50 transition-colors whitespace-nowrap"
          value="preferences"
        >
          <Settings className="w-4 h-4" />
          Preferences
        </TabsTrigger>
        <TabsTrigger
          className="justify-start gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none hover:bg-muted/50 transition-colors whitespace-nowrap"
          value="team"
        >
          <Users className="w-4 h-4" />
          Team
        </TabsTrigger>
      </TabsList>
    </div>

    <div className="flex-1 pl-0 md:pl-8 pt-6 md:pt-0">
      <TabsContent value="profile" className="mt-0 outline-none">
        <SettingsProfile />
      </TabsContent>
      <TabsContent value="security" className="mt-0 outline-none">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="mb-2 text-lg font-semibold">Security Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your password, two-factor authentication, and active sessions
            to keep your account secure.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="preferences" className="mt-0 outline-none">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="mb-2 text-lg font-semibold">Preferences</h3>
          <p className="text-sm text-muted-foreground">
            Customize your experience with theme options, language settings, and
            notification preferences.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="team" className="mt-0 outline-none">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="mb-2 text-lg font-semibold">Team Settings</h3>
          <p className="text-sm text-muted-foreground">
            Invite team members, manage permissions, and configure team-wide
            settings and integrations.
          </p>
        </div>
      </TabsContent>
    </div>
  </Tabs>
);

export default TabsLayout;
