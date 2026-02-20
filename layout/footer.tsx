"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Send,
  Sun,
  Moon,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && theme === "dark";

  return (
    <footer className="border-t bg-background text-foreground">
      <div className="container mx-auto px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND + NEWSLETTER */}
          <div>
            <h2 className="text-2xl font-bold">ThumbnailAI</h2>

            <p className="mt-3 text-sm text-muted-foreground">
              AI-powered thumbnails, tags & keywords to help creators grow
              faster on YouTube and Instagram.
            </p>

            <form className="mt-5 relative">
              <Input
                type="email"
                placeholder="Get growth tips in your inbox"
                className="pr-12"
              />
              <Button
                size="icon"
                type="submit"
                className="absolute right-1 top-1 h-8 w-8 rounded-full"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* TOOLS */}
          <div>
            <h3 className="mb-4 font-semibold">Tools</h3>
            <nav className="space-y-2 text-sm text-muted-foreground">
              <Link
                href="/youtube/ai-thumbnail-generator"
                className="block hover:text-primary"
              >
                AI Thumbnail Generator
              </Link>
              <Link
                href="/youtube/tags-generator"
                className="block hover:text-primary"
              >
                Tag Generator
              </Link>
              <Link href="/hashtags" className="block hover:text-primary">
                Hashtag Finder
              </Link>
              <Link href="/templates" className="block hover:text-primary">
                Thumbnail Templates
              </Link>
              <Link href="/pricing" className="block hover:text-primary">
                Pricing
              </Link>
            </nav>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>
            <nav className="space-y-2 text-sm text-muted-foreground">
              <Link href="/blog" className="block hover:text-primary">
                Blog
              </Link>
              <Link href="/guides" className="block hover:text-primary">
                Creator Guides
              </Link>
              <Link href="/faq" className="block hover:text-primary">
                FAQ
              </Link>
              <Link href="/support" className="block hover:text-primary">
                Support
              </Link>
              <Link href="/contact" className="block hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>

          {/* SOCIAL + THEME */}
          <div>
            <h3 className="mb-4 font-semibold">Follow Us</h3>

            <div className="flex gap-3 mb-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <TooltipProvider key={i}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Icon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Social</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>

            {/* <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div> */}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ThumbnailAI. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-primary">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
