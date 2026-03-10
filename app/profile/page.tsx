import SettingsProfile from "@/components/profile";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Profile | Creator Dashboard",
  description:
    "Manage your account, subscription, and AI tool history from your creator dashboard.",
  keywords: [
    "creator dashboard",
    "ai thumbnail account",
    "youtube seo profile",
  ],
robots: {
    index: false,
    follow: false,
  },
};
const page = () => {
  return (
    <>
      <main className="py-16">
        <div className="max-w-6xl mx-auto  px-5">
          <SettingsProfile />
        </div>
      </main>
    </>
  );
};

export default page;
