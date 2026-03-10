
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Thumbnail Size Guide (2026) – Best Dimensions & Tips | BoltCreator",

  description:
    "Discover the perfect YouTube thumbnail size, dimensions, file formats, and best practices for 2026. Learn how to create high-CTR thumbnails that boost views and improve video performance.",

  keywords: [
    "youtube thumbnail size",
    "youtube thumbnail dimensions",
    "best thumbnail size for youtube",
    "youtube thumbnail resolution",
    "youtube thumbnail pixels",
    "youtube thumbnail aspect ratio",
    "youtube thumbnail file size limit",
    "youtube thumbnail guide",
    "perfect youtube thumbnail size",
    "BoltCreator thumbnail guide"
  ],

  alternates: {
    canonical: "https://boltcreator.online/blog/youtube-thumbnail-size",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "YouTube Thumbnail Size Guide (2026)",
    description:
      "Learn the perfect YouTube thumbnail dimensions, resolution, and design tips to increase CTR and views.",
    url: "https://boltcreator.online/blog/youtube-thumbnail-size",
    siteName: "BoltCreator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YouTube Thumbnail Size Guide",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "YouTube Thumbnail Size Guide (2026)",
    description:
      "Learn the perfect thumbnail dimensions and design tips to increase YouTube CTR.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        YouTube Thumbnail Size Guide (2026)
      </h1>

      <p className="mb-6 text-lg">
        Choosing the correct YouTube thumbnail size is crucial for improving
        click-through rate (CTR) and getting more views. A properly sized
        thumbnail ensures your content looks professional across all devices.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        ✅ Official YouTube Thumbnail Dimensions
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Resolution:</strong> 1280 × 720 pixels
        </li>
        <li>
          <strong>Minimum Width:</strong> 640 pixels
        </li>
        <li>
          <strong>Aspect Ratio:</strong> 16:9
        </li>
        <li>
          <strong>Max File Size:</strong> 2MB
        </li>
        <li>
          <strong>Formats:</strong> JPG, PNG, GIF
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        🎯 Why Thumbnail Size Matters
      </h2>

      <p className="mb-4">
        A properly optimized thumbnail improves visibility on mobile, desktop,
        and TV screens. Poorly sized images can appear blurry, cropped, or
        distorted — reducing your CTR significantly.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        🚀 Pro Tips to Increase Clicks
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Use high contrast colors</li>
        <li>Keep text large and readable</li>
        <li>Focus on one clear subject</li>
        <li>Add emotion (faces perform better)</li>
        <li>Avoid too much clutter</li>
      </ul>

      <div className="mt-12 p-6 bg-blue-50 rounded-xl">
        <h3 className="text-xl font-semibold mb-3">
          Want AI to Generate Perfect Thumbnails?
        </h3>
        <p className="mb-4">
          Use our AI Thumbnail Generator to instantly create 1280×720 optimized
          thumbnails in seconds.
        </p>
        <a
          href="/youtube/ai-thumbnail-generator"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Generate Thumbnail Now
        </a>
      </div>
    </div>
  );
}
