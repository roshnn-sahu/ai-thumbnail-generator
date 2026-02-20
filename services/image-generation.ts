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
export const generateThumbnails = async (params: {
  prompt: string;
  count: number;
  aspectRatio: string;
  isRemix: boolean;
  remixImages?: File[];
  mainImageBase64: string;
}): Promise<string[]> => {
  const { prompt, count, aspectRatio, isRemix, remixImages, mainImageBase64 } =
    params;

  // Optimize remix images if present
  const optimizedRemix =
    isRemix && remixImages && remixImages.length > 0
      ? await Promise.all(
          remixImages.map(async (file) => (await optimizeImage(file)).base64),
        )
      : [];

  const res = await fetch("/api/generate-thumbnail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      instruction: prompt,
      imageBase64: mainImageBase64,
      count,
      aspectRatio,
      isRemix,
      remixImages: optimizedRemix,
    }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Failed to generate");
  }

  const data = await res.json();
  return data.images;
};
