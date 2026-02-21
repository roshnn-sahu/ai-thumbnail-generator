
export const  generateKeywords = async (topic: string) => {
    const res = await fetch("/api/youtube/generate-keywords", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ topic }),
  });

  return res.json();
};

