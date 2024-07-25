import { BASE_URL } from "@/api/api";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

// get Asia/Kathmandu time and is from sunday to thursday 11am to 3pm else return fals
export const isLive = async (): Promise<boolean> => {
  try {
    const res: { data: boolean } = await axios.get(BASE_URL + "/islive");
    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error || error instanceof AxiosError) {
      toast(error.message);
    }
    return false;
  }
};
