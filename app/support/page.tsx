

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Center | BoltCreator AI Creator Tools Help",

  description:
    "Get help with BoltCreator AI tools including the AI thumbnail generator, YouTube tag generator, keyword tools, and account support.",

  keywords: [
    "BoltCreator support",
    "AI thumbnail generator support",
    "YouTube tag generator help",
    "YouTube SEO tools support",
    "creator tools help center",
    "AI tools support",
    "BoltCreator help center"
  ],

  alternates: {
    canonical: "https://boltcreator.online/support",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "BoltCreator Support Center",
    description:
      "Find help and support for BoltCreator AI thumbnail generator, tag extractor, and SEO tools.",
    url: "https://boltcreator.online/support",
    siteName: "BoltCreator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoltCreator Support Center",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BoltCreator Support Center",
    description:
      "Get help with BoltCreator AI tools and creator dashboard features.",
    images: ["/og-image.png"],
  },
};
export default function SupportPage() {
  return (
    <div className="container max-w-5xl py-20 mx-auto">
      {/* Hero */}
      <div className=" mb-16">
        <h1 className="text-4xl font-bold mb-4">Support Center</h1>
        <p className="text-muted-foreground text-lg">
          Need help with thumbnails, tags, keywords, or downloads? We’re here to
          help.
        </p>
      </div>

      {/* Quick Help Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {[
          {
            title: "FAQs",
            desc: "Find answers to common questions",
            link: "/faq",
          },
          {
            title: "How it Works",
            desc: "Learn how our AI tools generate results",
            link: "/#features",
          },
          {
            title: "Report a Bug",
            desc: "Something not working? Let us know",
            link: "#contact",
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="border rounded-2xl p-6 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </a>
        ))}
      </div>

      {/* Common Issues */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 ">
          Common Issues
        </h2>

        <ul className="space-y-3 text-muted-foreground max-w-3xl text-sm">
          <li>
            • Thumbnail not generating → Try refreshing or reducing prompt size
          </li>
          <li>• Tags not loading → Check internet or retry after 10 seconds</li>
          <li>• API timeout → Server may be busy, try again later</li>
          <li>
            • Download failed → Disable ad blockers or try another browser
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div id="contact" className="max-w-2xl mx-auto border rounded-2xl p-8">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Contact Support
        </h2>

        <form className="space-y-4">
          <div>
            <Label className="mb-2">Name</Label>
            <Input placeholder="Your name" />
          </div>

          <div>
            <Label className="mb-2">Email</Label>
            <Input type="email" placeholder="you@email.com" />
          </div>

          <div>
            <Label className="mb-2">Message</Label>
            <Textarea placeholder="Describe your issue..." rows={4} />
          </div>

          <Button className="w-full">Send Message</Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Or email us directly at support@boltcreator.online
        </p>
      </div>
    </div>
  );
}
