import axios from "axios";

export interface ImageData {
  file: File;
  preview: string; // UI only — keeps the data: prefix
  optimized: string; // API only — raw base64, no prefix
  width?: number;
  height?: number;
}

/**
 * Resizes & compresses an image file.
 * Returns raw base64 (no data URI prefix), and original dimensions.
 */
export const optimizeImage = (
  file: File,
): Promise<{ base64: string; width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();

      img.onload = () => {
        const MAX = 1024;
        const scale = Math.min(MAX / img.width, MAX / img.height, 1);

        const canvas = document.createElement("canvas");
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas context failed"));

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const dataUrl = canvas.toDataURL("image/jpeg", 0.75);
        resolve({
          base64: dataUrl.split(",")[1], // strip prefix for API
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };

      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = reader.result as string;
    };

    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
};

/**
 * Higher-level helper that optimizes an image and returns a full ImageData object.
 */
export const processImageUpload = async (
  file: File,
  preview: string,
): Promise<ImageData> => {
  const { base64, width, height } = await optimizeImage(file);
  return {
    file,
    preview,
    optimized: base64,
    width,
    height,
  };
};

/**
 * Handles the logic for calling the generation API.
 */
const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

const fileToBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });

export const generateThumbnails = async (
  token: string,
  params: {
    prompt: string;
    count: number;
    aspectRatio: string;
    isRemix: boolean;
    remixImages?: File[];
    mainImageBase64: string;
  },
): Promise<string[]> => {
  const {
    prompt,
    count,
    aspectRatio,
    isRemix,
    remixImages = [],
    mainImageBase64,
  } = params;

  // 🔥 convert files → base64
  const remixBase64 = await Promise.all(remixImages.map(fileToBase64));

  const { data } = await axios.post(
    `${API_BASE}/api/generate/generate-thumbnail`,
    {
      instruction: prompt,
      imageBase64: mainImageBase64,
      count,
      aspectRatio,
      isRemix,
      remixImages: remixBase64,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );
  return data.images;
};
