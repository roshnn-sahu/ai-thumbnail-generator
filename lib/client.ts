export async function apiFetch(
  url: string,
  options: RequestInit = {},
  timeout = 20000,
  token?: string | null,
) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...(options.headers || {}),
      },
      signal: controller.signal,
    });

    clearTimeout(id);

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Request failed");
    }

    return res.json();
  } catch (err: any) {
    if (err.name === "AbortError") {
      throw new Error("Request timeout. Try again.");
    }
    throw err;
  }
}
