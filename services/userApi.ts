import axios from "axios";

const BACKEND_URL: string =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

export const getUser = async (token: string) => {
  const { data } = await axios.get(`${BACKEND_URL}/api/users/get-user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
