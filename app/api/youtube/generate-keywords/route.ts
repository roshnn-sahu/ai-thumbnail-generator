import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();
    const year = new Date().getFullYear();

    const prompt = `You are an expert YouTube and SEO keyword research specialist.

TASK:
Generate high-search, SEO-optimized keywords based on the topic.

STRICT RULES:
- Return ONLY keywords
- No explanations
- No headings
- No numbering
- No bullets
- No hashtags
- No sentences
- Do NOT add quotes
- Output must be a simple comma-separated list
- Each keyword should be 2–5 words long
- Mix short-tail + long-tail keywords
- Avoid duplicates
- Include the current year ${year} naturally in 20–30% of keywords

FORMAT EXAMPLE:
keyword one, keyword two, keyword three

Generate 25–40 keywords for:

Topic: ${topic}
Platform: YouTube
Language: English
Intent: search traffic growth
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
       model: "openrouter/free",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 10000, 
      },
    );

    const data = response.data.choices[0].message.content;
    const res = data.split(",");

    return NextResponse.json({
      success: true,
      keywords: res,
    });
  } catch (err: any) {
    // ✅ Timeout handling
    if (err.code === "ECONNABORTED") {
      return NextResponse.json(
        { success: false, error: "Request timed out. Please try again." },
        { status: 408 },
      );
    }

    console.error("Keyword API error:", err.message);

    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 },
    );
  }
}
