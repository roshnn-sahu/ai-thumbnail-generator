import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const OPENROUTER_API_KEY = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
    }

    // Convert image to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString("base64");
    const mime = file.type;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "nvidia/nemotron-nano-12b-v2-vl:free",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: "Analyze this image and convert it into a cinematic AI image prompt with lighting, composition, colors, and ultra-realistic quality tags. Output only the prompt.",
                },
                {
                  type: "image_url",
                  image_url: {
                    url: `data:${mime};base64,${base64}`,
                  },
                },
              ],
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("OpenRouter Error:", errorData);
      return NextResponse.json(
        { error: "failed to generate prompt from AI" },
        { status: 500 },
      );
    }

    const data = await response.json();
    const result = data.choices?.[0]?.message?.content;

    console.log("AI Prompt:", result);
    return NextResponse.json({ prompt: result });
  } catch (error) {
    console.error("Image-to-prompt error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
