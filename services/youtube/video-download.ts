import axios from "axios";
export async function downloadVideo(url: string) {
  try {
    const response = await axios.post(
      "https://yt-downloader9.p.rapidapi.com/start",
      {
        urls: [url],
        onlyAudio: false,
        ignorePlaylists: true,
        videoQuality: "best",
      },
      {
        headers: {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host": "yt-downloader9.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        timeout: 10000,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return { error: "Failed to download video" };
  }
}
