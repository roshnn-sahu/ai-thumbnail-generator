import { NextResponse } from "next/server";
import axios from "axios";
export async function POST(req: Request) {
  const { topic } = await req.json();

  const prompt = `
You are a professional hashtag generator.

Return ONLY hashtags separated by space.

Topic: ${topic}
Platform: YouTube
Tone: youtube seo optimized
Language: English
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
