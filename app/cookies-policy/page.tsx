import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | AI Thumbnail Generator",
  description:
    "Read our cookies policy to understand how we use cookies and tracking technologies to improve your experience.",
  keywords: [
    "cookies policy",
    "website cookies policy",
    "ai tool cookies usage",
  ],
};
const page = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

        <p className="text-sm text-muted-foreground mb-12">
          Last updated: February 23, 2026
        </p>

        <div className="space-y-10 text-muted-foreground leading-7">
          <section>
            <p>
              This Cookie Policy explains how we use cookies and similar
              technologies when you use our website and tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device to improve site
              functionality, remember preferences, and analyze traffic.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              2. Types of Cookies We Use
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>
                <span className="font-medium text-foreground">Essential</span> –
                Required for the website to work properly
              </li>
              <li>
                <span className="font-medium text-foreground">Analytics</span> –
                Helps us understand traffic and usage
              </li>
              <li>
                <span className="font-medium text-foreground">Performance</span>{" "}
                – Improves speed and reliability
              </li>
              <li>
                <span className="font-medium text-foreground">Advertising</span>{" "}
                – Shows relevant ads
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              3. Third-Party Cookies
            </h2>
            <p>
              We may use tools such as{" "}
              <span className="font-medium text-foreground">
                Google Analytics
              </span>{" "}
              for traffic analysis and{" "}
              <span className="font-medium text-foreground">
                Google AdSense
              </span>
              for advertisements. These services may place their own cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              4. How We Use Cookies
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Remember user preferences</li>
              <li>Track usage statistics</li>
              <li>Improve performance</li>
              <li>Display relevant ads</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              5. Managing Cookies
            </h2>
            <p>
              You can disable or delete cookies through your browser settings.
              Disabling cookies may affect certain features of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              6. Updates
            </h2>
            <p>
              We may update this policy periodically. Continued use of the
              website means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              7. Contact
            </h2>
            <p>Email: support@boltcreator.online</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default page;
