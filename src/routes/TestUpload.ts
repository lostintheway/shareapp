import { RouteOptions } from "fastify";
import { MyReqUser } from "../@types/types";

export const uploadLargeFile: RouteOptions = {
  method: "POST",
  url: "/uploadlargefile",
  handler: (req, res) => postProductFn(req as MyReqUser, res),
};

const postProductFn = (req: any, res: any) => {};
