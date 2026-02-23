import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();
    const year = new Date().getFullYear();

    const prompt = `You are an Instagram SEO and content discovery specialist.

TASK:
Generate searchable Instagram keywords for captions, reels, and post optimization.

STRICT RULES:
- Return ONLY keywords
- No hashtags
- No explanations
- No numbering
- No bullets
- No quotes
- Output must be comma-separated
- Each keyword should be 2–5 words
- Mix short-tail + long-tail
- High search intent only
- Avoid duplicates
- Generate 25–40 keywords

Topic: ${topic}
Platform: Instagram
Intent: reach growth + discoverability
Language: English
Year: ${year}
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "arcee-ai/trinity-large-preview:free",
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
