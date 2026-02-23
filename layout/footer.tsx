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

            <p className="my-3 text-sm text-muted-foreground">
              AI-powered thumbnails, tags & keywords to help creators grow
              faster on YouTube and Instagram.
            </p>

            <div>
              <h4 className="mb-4 font-semibold">Follow Us</h4>

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

          {/* YOUTUBE */}
          <div>
            <h3 className="mb-4 font-semibold">Youtube</h3>
            <nav className="space-y-2 text-sm text-muted-foreground">
              <Link
                href="/youtube/video-downloader"
                className="block hover:text-primary"
              >
                Youtube Video Download
              </Link>
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

              <Link
                href="/youtube/tags-extractor"
                className="block hover:text-primary"
              >
                Tag Extractor
              </Link>

              <Link
                href="/youtube/keywords-generator"
                className="block hover:text-primary"
              >
                Keywords Generator
              </Link>
            </nav>
          </div>

          {/* INSTAGRAM */}
          <div>
            <h3 className="mb-4 font-semibold">Instagram</h3>
            <nav className="space-y-2 text-sm text-muted-foreground">
              <Link href="/instagram/tag-generator" className="block hover:text-primary">
                Tag Generator
              </Link>
              <Link href="/instagram/keywords-generator" className="block hover:text-primary">
               Keywords Generator
              </Link>
           
            </nav>
          </div>

          {/* QUICK LINK */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm text-muted-foreground">
              <Link href="/about" className="block hover:text-primary">
                About Us
              </Link>
              <Link href="/pricing" className="block hover:text-primary">
                Pricing
              </Link>
        
              <Link href="/support" className="block hover:text-primary">
                Support
              </Link>
            
            </nav>
          </div>

          {/* SOCIAL + THEME */}
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ThumbnailAI. All rights reserved.</p>

          <div className="flex gap-4 text-xs">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms Of Services
            </Link>
            <Link href="/cookies-policy" className="hover:text-primary">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
