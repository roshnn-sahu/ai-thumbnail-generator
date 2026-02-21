export const generateTags = async (topic: string) => {
  const res = await fetch("/api/youtube/generate-tags", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ topic }),
  });

  return res.json();
};
