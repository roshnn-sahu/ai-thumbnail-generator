import axios from "axios";
const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

const toBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export const imageToPrompt = async (image: File, token: String) => {
  try {
    // Convert image to Base64 to avoid using Multi-part (multer) on backend
    const base64 = await toBase64(image);

    const response = await axios.post(
      `${API_BASE}/api/generate/image-to-prompt`,
      { image: base64 },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error: any) {
    console.error("imageToPrompt error:", error);
    throw error;
  }
};
