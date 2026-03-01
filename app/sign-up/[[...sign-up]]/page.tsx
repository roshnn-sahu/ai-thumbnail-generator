import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account | Free AI Thumbnail & Tag Tools",
  description:
    "Create your free account to generate AI YouTube thumbnails, tags, and ranking keywords instantly.",
  keywords: [
    "sign up youtube seo tool",
    "free ai thumbnail account",
    "register creator tools",
  ],
};
export default function Page() {
  return <SignUp />;
}
