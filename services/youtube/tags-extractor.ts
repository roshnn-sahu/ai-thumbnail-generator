export const extractTags = async (url: string) => {
  const res = await fetch("/api/youtube/extract-tags", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  return res.json();
};
