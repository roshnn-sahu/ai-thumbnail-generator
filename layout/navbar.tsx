"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Sparkles,
  ChevronDown,
  Image,
  Hash,
  Key,
  X,
  Tag,
  Video,
} from "lucide-react";

import { RiMenu3Line } from "@remixicon/react";
import Link from "next/link";
import { useState, useEffect } from "react";

import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

import { User } from "lucide-react";

const navLinks = [
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

const toolsMenuData = [
  {
    platform: "YouTube",

    tools: [
      {
        icon: Video,
        title: "Youtube Video Download",
        description: "Download youtube videos",
        href: "/youtube/video-downloader",
      },
      {
        icon: Image,
        title: "AI Thumbnail Generator",
        description: "Create stunning thumbnails with AI",
        href: "/youtube/ai-thumbnail-generator",
      },
      {
        icon: Hash,
        title: "Tags Generator",
        description: "Generate optimized tags for videos",
        href: "/youtube/tags-generator",
      },
      {
        icon: Tag,
        title: "Tags Extractor ",
        description: "Extract tags form youtube videos",
        href: "/youtube/tags-extractor",
      },
      {
        icon: Key,
        title: "Keywords Generator",
        description: "Find trending keywords",
        href: "/youtube/keywords-generator",
      },
    ],
  },
  {
    platform: "Instagram",

    tools: [
      {
        icon: Hash,
        title: "Tags Generator",
        description: "Generate trending hashtags",
        href: "/instagram/tags-generator",
      },
      {
        icon: Key,
        title: "Keywords Generator",
        description: "Discover popular keywords",
        href: "/instagram/keywords-generator",
      },
    ],
  },
];

import { useAuth, useUser } from "@clerk/nextjs";
import { syncUser } from "@/services/userApi";

function Navbar() {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileToolsOpen, setIsMobileToolsOpen] = useState(false);

  const { isSignedIn } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    const sync = async () => {
      const token = await getToken();
      if (!isSignedIn || !token) return;
      const res = await syncUser(token);
      console.log(res)
    };
    sync();
  }, [isSignedIn]);

  return (
    <>
      <nav className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg text-foreground">
                ThumbnailAI
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {/* Tools Dropdown */}
            <motion.div
              className="relative"
              onClick={() => setIsToolsOpen(!isToolsOpen)}
              onMouseEnter={() => setIsToolsOpen(true)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 cursor-pointer">
                Tools
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isToolsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isToolsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-2 w-[600px] bg-white border border-border rounded-lg shadow-lg p-6 z-50"
                  onMouseLeave={() => setIsToolsOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-6">
                    {toolsMenuData.map((section, sectionIndex) => {
                      return (
                        <motion.div
                          key={section.platform}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: sectionIndex * 0.05,
                            duration: 0.2,
                          }}
                        >
                          <div className="flex items-center gap-2 mb-4">
                            <h4 className="text-sm font-semibold text-foreground">
                              {section.platform}
                            </h4>
                          </div>
                          <div className="space-y-2">
                            {section.tools.map((tool, toolIndex) => {
                              const ToolIcon = tool.icon;
                              return (
                                <motion.div
                                  key={tool.title}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay:
                                      sectionIndex * 0.05 + toolIndex * 0.03,
                                    duration: 0.2,
                                  }}
                                >
                                  <Link
                                    href={tool.href}
                                    className="flex items-start gap-2 p-3 rounded-md hover:bg-neutral-50 transition-colors"
                                  >
                                    <ToolIcon className="mt-1 w-4 h-4 text-muted-foreground" />
                                    <div className="flex-1">
                                      <div className="text-sm font-medium text-foreground">
                                        {tool.title}
                                      </div>
                                      <div className="text-xs text-muted-foreground">
                                        {tool.description}
                                      </div>
                                    </div>
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Normal Nav Links */}
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-2"
          >
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" className="border shadow-lg">
                  Sign in
                </Button>
              </SignInButton>

              <SignUpButton mode="modal">
                <Button className=" cursor-pointer">Sign Up</Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/">
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="Profile & Plan"
                    labelIcon={<User className="w-4 h-4" />}
                    href="/settings"
                  />
                </UserButton.MenuItems>
              </UserButton>
            </SignedIn>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="md:hidden p-2 text-foreground mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <RiMenu3Line className="w-6 h-6" />
              )}
            </button>
            <SignedIn>
              <UserButton afterSignOutUrl="/">
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="Profile & Plan"
                    labelIcon={<User className="w-4 h-4" />}
                    href="/settings"
                  />
                </UserButton.MenuItems>
              </UserButton>
            </SignedIn>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border bg-white px-2"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Tools Section */}
              <div>
                <button
                  onClick={() => setIsMobileToolsOpen(!isMobileToolsOpen)}
                  className="w-full flex items-center justify-between text-sm font-medium text-foreground py-2"
                >
                  Tools
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isMobileToolsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileToolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 space-y-4 pl-4"
                  >
                    {toolsMenuData.map((section) => (
                      <div key={section.platform}>
                        <h4 className="text-xs font-semibold text-muted-foreground mb-2">
                          {section.platform}
                        </h4>
                        <div className="space-y-2">
                          {section.tools.map((tool) => {
                            const ToolIcon = tool.icon;
                            return (
                              <Link
                                key={tool.title}
                                href={tool.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-start gap-2 p-2 rounded-md hover:bg-neutral-50 transition-colors"
                              >
                                <ToolIcon className="mt-1 w-4 h-4 text-muted-foreground" />
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-foreground">
                                    {tool.title}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {tool.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Mobile Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="pt-4 space-y-2 border-t border-border flex gap-3 justify-end">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button variant="outline" className="border shadow-lg">
                      Sign in
                    </Button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <Button className=" cursor-pointer">Sign Up</Button>
                  </SignUpButton>
                </SignedOut>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
