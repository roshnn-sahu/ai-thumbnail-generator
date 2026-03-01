import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Access Your AI Creator Dashboard",
  description:
    "Sign in to access your AI thumbnail generator, YouTube tag tools, and keyword dashboard.",
  keywords: [
    "login ai thumbnail tool",
    "creator dashboard login",
    "youtube seo tool sign in",
  ],
};
export default function Page() {
  return <SignIn />;
}
