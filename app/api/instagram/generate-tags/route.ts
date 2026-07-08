import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const { topic } = await req.json();
  const year = new Date().getFullYear();
  const LANG = "English";
  const prompt = `
You are an Instagram growth expert and social media SEO strategist.

TASK:
Generate high-reach Instagram hashtags based on the topic.

GOAL:
Maximize reach, engagement, impressions, and discoverability.

STRICT RULES:
- Return ONLY hashtags
- No explanations
- No sentences
- No numbering
- No bullets
- No duplicates
- Each must start with #
- Mix:
  • trending tags
  • niche tags
  • medium competition tags
  • high-volume tags
- Include both broad + long-tail tags
- Keep tags relevant to topic
- Generate exactly 30 hashtags
- Output must be space-separated in one single line

Topic: ${topic}
Language: ${LANG}
Style: viral + discoverability + growth
Platform: Instagram
Year: ${year}
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
    },
  );

  const data = response.data.choices[0].message.content;
  const res = data.split(" ");

  return NextResponse.json(res);
}
