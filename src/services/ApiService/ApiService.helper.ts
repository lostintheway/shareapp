import { message } from "antd";

export const myHeaders = () => ({
  headers: { Authorization: localStorage.getItem("token") },
});

export const checkApiError = (error: unknown) => {
  if (error instanceof Error) {
    message.error(error.message);
  } else {
    message.error("Failed! No error message.");
  }
};
