import Link from "next/link";
import React from "react";

const HeroAbout = () => {
  return (
    <>
      <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Section 1 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI YouTube Thumbnail Generator Built for
              
                Clicks & Rankings
            
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our <strong>AI YouTube thumbnail generator</strong> creates
              high-CTR, scroll-stopping thumbnails in seconds. No complex design
              tools. No Photoshop skills. Just enter your video idea and
              generate optimized visuals instantly.
            </p>
          </div>

          {/* Grid Feature Blocks */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Why Thumbnails Matter for YouTube Growth
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Your thumbnail directly impacts your
                <strong> YouTube click-through rate (CTR)</strong>, which is one
                of the strongest ranking signals in the YouTube algorithm.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Even great content won’t perform if your thumbnail fails to grab
                attention. Our AI analyzes modern design trends to generate
                bold, engaging visuals that improve discoverability and increase
                views.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
              <h4 className="text-xl font-semibold mb-4">
                All-in-One YouTube Growth Suite
              </h4>

              <ul className="space-y-3 text-gray-600 list-disc pl-3">
                <li>
                  <Link href="/youtube/ai-thumbnail-generator">
                    🚀 AI Thumbnail Generator
                  </Link>
                </li>
                <li>
                  <Link href="/youtube/tags-generator">
                    🏷️ YouTube Tags Generator
                  </Link>
                </li>
                <li>
                  <Link href="/youtube/tags-extractor">
                    🔍 Tags Extractor Tool
                  </Link>
                </li>
                <li>
                  <Link href="/youtube/keywords-generator">
                    📈 Smart Keyword Finder
                  </Link>
                </li>
                <li>⚡ SEO Optimization for Faster Ranking</li>
              </ul>
            </div>
          </div>

          {/* Who It’s For */}
          <div className="bg-black text-white rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">
              Built for Creators Who Want to Grow Faster
            </h3>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're a gaming creator, educator, business owner, or
              beginner YouTuber, our AI tools help you generate professional
              thumbnails, optimized tags, and ranking keywords — all in one
              place.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAbout;
