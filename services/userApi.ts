import axios from "axios";

const BACKEND_URL: string = (
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000"
).replace(/\/$/, ""); // strip trailing slash to avoid double-slash URLs

export const getUser = async (token: string) => {
  const { data } = await axios.get(`${BACKEND_URL}/api/users/get-user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
export const syncUser = async (token: string) => {
  const { data } = await axios.get(`${BACKEND_URL}/api/users/sync`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
