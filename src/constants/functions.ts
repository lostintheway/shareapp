import { ZodError } from "zod";
import { ResDefault } from "../@types/types";
import { myMsg } from "./variables";

export const catchError = (
  error: unknown,
  message: string
): { data: null; message: string } => {
  const mymsg = error instanceof Error ? error.message : message;
  return { data: null, message: mymsg };
};

export const zodErrFn = (error: ZodError): { data: null; message: string } => {
  return {
    data: null,
    message: error.errors[0].path[0].toString() + " " + error.errors[0].message,
  };
};

export class ErrIDlength extends Error {
  statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
