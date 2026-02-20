
import axios from "axios";

export const extractTags = async (url: string) => {
  const { data } = await axios.post("/api/extract-tags", { url });
  return data;
};

