import TabsLayout from "@/components/tabs-layout";

export const title = "Vertical Tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Settings | AI Creator Tools",
  description:
    "Manage your account preferences, subscription settings, and security options.",
  keywords: [
    "account settings",
    "subscription settings",
    "creator account management",
  ],
};
const page = () => (
  <main className="py-8">
    <div className="max-w-6xl mx-auto px-5">
      <TabsLayout />
    </div>
  </main>
);

export default page;
