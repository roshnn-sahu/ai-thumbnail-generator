import { NextResponse } from "next/server";
import axios from "axios";

const REVE_API_KEY = process.env.REVE_API_KEY;

export async function POST(req: Request) {
  try {
    const {
      imageBase64,
      instruction,
      count,
      isRemix,
      aspectRatio,
      remixImages,
    } = await req.json();

    if (!imageBase64) {
      return NextResponse.json(
        { error: "Image base64 is required" },
        { status: 400 },
      );
    }
    if (!instruction) {
      return NextResponse.json(
        { error: "Edit instruction is required" },
        { status: 400 },
      );
    }

    // Clean base64 strings (remove data URI prefix if present)
    const cleanMainImage = imageBase64.replace(/^data:image\/\w+;base64,/, "");
    const cleanRemixImages = (remixImages || []).map((img: string) =>
      img.replace(/^data:image\/\w+;base64,/, ""),
    );

    // Combine main image and remix images for the reference array
    const referenceImagesArray = [cleanMainImage, ...cleanRemixImages];

    const headers = {
      Authorization: `Bearer ${REVE_API_KEY}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    const numImages = Math.min(Math.max(count || 1, 1), 4);

    if (isRemix === true) {
      const payload = {
        prompt: instruction,
        reference_images: referenceImagesArray,
        aspect_ratio: aspectRatio,
        version: "latest-fast",
      };

      const imagePromises = Array.from({ length: numImages }).map(async () => {
        try {
          const { data } = await axios.post(
            "https://api.reve.com/v1/image/remix",
            payload,
            { headers },
          );

          return data.image.startsWith("data:") ? data.image : `data:image/png;base64,${data.image}`;
        } catch (error: any) {
          const errorData = error.response?.data;
          throw new Error(
            `REVE Remix API error! status: ${error.response?.status} ${JSON.stringify(errorData || error.message)}`,
          );
        }
      });
      const images = await Promise.all(imagePromises);

      return NextResponse.json({ images });

    } else {
      
      const payload = {
        edit_instruction: instruction,
        reference_image: cleanMainImage,
        aspect_ratio: aspectRatio,
        version: "latest-fast",
      };

      const imagePromises = Array.from({ length: numImages }).map(async () => {
        try {
          const { data } = await axios.post(
            "https://api.reve.com/v1/image/edit",
            payload,
            { headers },
          );

          return data.image.startsWith("data:")
            ? data.image
            : `data:image/png;base64,${data.image}`;
        } catch (error: any) {
          const errorData = error.response?.data;
          throw new Error(
            `REVE Edit API error! status: ${error.response?.status} ${JSON.stringify(errorData || error.message)}`,
          );
        }
      });
      const images = await Promise.all(imagePromises);

      return NextResponse.json({ images });
    }
  } catch (error: any) {
    console.error("REVE API Request failed:", error);
    return NextResponse.json(
      { error: error.message || "Failed to edit image" },
      { status: 500 },  
    );
  }
}
