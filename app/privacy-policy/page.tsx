import React from 'react'

const page = () => {
  return (
   <>
    <main className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="text-sm text-muted-foreground mb-12">
          Last updated: February 23, 2026
        </p>

        <div className="space-y-10 text-muted-foreground leading-7">

          <section>
            <p>
              Your privacy is important to us. This Privacy Policy explains how we
              collect, use, and protect your information when you use our AI tools
              such as thumbnail generation, hashtag generation, keyword research,
              and download utilities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              1. Information We Collect
            </h2>

            <h3 className="font-medium text-foreground mt-4 mb-2">
              Information you provide
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Video titles or topics</li>
              <li>Keywords and hashtags</li>
              <li>Prompts or text inputs</li>
              <li>URLs</li>
              <li>Uploaded images</li>
            </ul>

            <h3 className="font-medium text-foreground mt-4 mb-2">
              Automatically collected
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>IP address</li>
              <li>Browser & device type</li>
              <li>Usage analytics</li>
              <li>Cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              2. How We Use Information
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Generate thumbnails, tags, and keywords</li>
              <li>Improve AI results and performance</li>
              <li>Fix bugs and optimize experience</li>
              <li>Analyze traffic and usage</li>
              <li>Provide support</li>
            </ul>
            <p className="mt-3 font-medium text-foreground">
              We never sell your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              3. AI Processing
            </h2>
            <p>
              Your prompts may be processed by secure third-party AI providers to
              generate results. We do not permanently store your prompts unless
              required for service improvement or debugging.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              4. Cookies & Analytics
            </h2>
            <p>
              We may use cookies and analytics services such as{" "}
              <span className="font-medium">
                Google Analytics
              </span>{" "}
              to understand how visitors use the site and improve performance.
            </p>
            <p className="mt-2">
              You can disable cookies anytime in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              5. Advertising
            </h2>
            <p>
              To keep our tools free, we may display ads through services like{" "}
              <span className="font-medium">
                Google AdSense
              </span>
              . These services may use cookies to show relevant ads.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              6. Data Sharing
            </h2>
            <p>
              We do not sell or trade your information. Data may only be shared
              with trusted service providers for hosting, analytics, or AI
              processing, or when legally required.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              7. Security
            </h2>
            <p>
              We use HTTPS encryption, secure servers, and limited access controls
              to protect your information. However, no system is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              8. Children’s Privacy
            </h2>
            <p>
              Our services are not intended for children under 13. We do not
              knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              9. Your Rights
            </h2>
            <p>
              You may request access, correction, or deletion of your data by
              contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              10. Contact Us
            </h2>
            <p>
              For any questions regarding this policy:
              <br />
              Email: support@yourdomain.com
            </p>
          </section>

        </div>
      </div>
    </main>

   
   </>
  )
}

export default page