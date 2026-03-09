
import axios from "axios";


export const createSubscription = async () => {};
export const cancelSubscription = async (token: string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subscription/cancel-subscription`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
