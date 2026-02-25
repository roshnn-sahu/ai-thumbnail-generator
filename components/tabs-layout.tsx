import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SettingsProfile from "./profile";
import { User, Shield, Settings, Users } from "lucide-react";

export const title = "Vertical Tabs";

const TabsLayout = () => (
  <Tabs
    orientation="vertical"
    className="flex w-full max-w-6xl flex-row gap-0 py-8 px-4"
    defaultValue="profile"
  >
    <div className="w-64 shrink-0 border-r pr-4">
      <h2 className="mb-6 px-4 text-xl font-bold tracking-tight">Settings</h2>
      <TabsList className="flex h-fit flex-col bg-transparent p-0 gap-1 border-none shadow-none">
        <TabsTrigger
          className="w-full justify-start gap-3 px-4 py-2.5 data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none hover:bg-muted/50 transition-colors"
          value="profile"
        >
          <User className="w-4 h-4" />
          Profile
        </TabsTrigger>
        <TabsTrigger
          className="w-full justify-start gap-3 px-4 py-2.5 data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none hover:bg-muted/50 transition-colors"
          value="security"
        >
          <Shield className="w-4 h-4" />
          Security
        </TabsTrigger>
        <TabsTrigger
          className="w-full justify-start gap-3 px-4 py-2.5 data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none hover:bg-muted/50 transition-colors"
          value="preferences"
        >
          <Settings className="w-4 h-4" />
          Preferences
        </TabsTrigger>
        <TabsTrigger
          className="w-full justify-start gap-3 px-4 py-2.5 data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none hover:bg-muted/50 transition-colors"
          value="team"
        >
          <Users className="w-4 h-4" />
          Team
        </TabsTrigger>
      </TabsList>
    </div>

    <div className="flex-1 pl-8">
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
