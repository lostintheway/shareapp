import { message } from "antd";
import axios from "axios";

export const myHeaders = () => ({
  headers: { Authorization: localStorage.getItem("token") },
});

export const checkApiError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    message.error(error.message);
  } else {
    message.error("Failed! No error message.");
  }
};
