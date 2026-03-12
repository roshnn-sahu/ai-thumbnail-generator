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
  return (
    <section className="px-5 py-12 w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <SignUp />
      </div>
    </section>
  );
}
