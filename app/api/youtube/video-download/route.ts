import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    console.log(process.env.RAPIDAPI_KEY);
    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }
    const response = await axios.post(
      "https://yt-downloader9.p.rapidapi.com/start",
      {
        urls: [url],
        onlyAudio: false,
        ignorePlaylists: true,
        videoQuality: "best",
      },
      {
        headers: {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host": "yt-downloader9.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        timeout: 10000,
      },
    );

    const data = response.data;
    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to download video" },
      { status: 500 },
    );
  }
}
