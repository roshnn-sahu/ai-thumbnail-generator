import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const { url } = await req.json();

  const { data } = await axios.get(
    `https://rappid.in/apis/youtube_tags_extract.php?url=${url}`,
    { timeout: 8000 },
  );

  return NextResponse.json(data);
}
