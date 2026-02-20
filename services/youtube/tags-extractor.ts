export const extractTags = async (url) => {
  const res = await fetch("/api/extract-tags", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  return res.json();
};
