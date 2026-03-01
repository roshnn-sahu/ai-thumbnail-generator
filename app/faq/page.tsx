import { CallToAction } from '@/components/cta'
import Faq from '@/components/faq'
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | AI YouTube Thumbnail & Tag Generator",
  description:
    "Frequently asked questions about our AI thumbnail generator, YouTube tag extractor, and keyword tools.",
  keywords: [
    "ai thumbnail generator faq",
    "youtube tag generator questions",
    "youtube seo tool help",
  ],
};

const page = () => {
  return (
<>
          <Faq />
          <CallToAction/>
</>
  )
}

export default page