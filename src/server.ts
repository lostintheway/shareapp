import * as fastify from "fastify";
import cors from "@fastify/cors";
import { publicRoutes } from "./routes/routes";
// import { superAdminAuth, MyReqUser } from "./routes/Users";
const multer = require("fastify-multer");
// import { s3Routes } from "./s3_upload/s3_upload";
// import { authAdmin } from "./auth/authS3";
import helmet from "@fastify/helmet";
import compress from "@fastify/compress";
import path from "path";
import env from "dotenv";
import { startServer } from "./server/startServer";
import { MyRateLimter } from "./config/myRateLimiter";
import { connectToDB } from "./config/connectToDB";
import { initializeFirebase } from "./firebase/firebaseSetup";
// import { collections } from "./constants/constants";
// import { BackupToBucket } from "./backup/backup";

import firebaseAdmin from "firebase-admin";
import { createTablesInit } from "./db/CreateTables";

const envPath = path.join(__dirname, "../.env.development");
env.config({ path: envPath });

// Configure HTTP server
export const app = fastify.default({ logger: true });

app.register(
  helmet,
  // Example disables the `contentSecurityPolicy` middleware but keeps the rest.
  { contentSecurityPolicy: false }
);

app.register(compress);
app.register(multer.contentParser);

app.register(cors);

MyRateLimter();

app.get("/", (_req: fastify.FastifyRequest<any>, res: any) =>
  res.send("Deals Nodejs! You are at the root endpoint 😉")
);
app.get("/test", (_req: fastify.FastifyRequest<any>, res: any) =>
  res.send("Deals Nodejs! You are at the test endpoint 😉")
);

initializeFirebase();
export const firebaseAuth = firebaseAdmin.auth();

publicRoutes.forEach((route) => {
  app.route(route);
});

// adminRoutes.forEach((route) => {
//   app.route({
//     ...route,
//     preHandler: (req, res, next) => authFirebase(req as MyReqUser, res),
//   });
// });

// s3Routes.forEach((route) => {
//   app.route({
//     ...route,
//     preValidation: (req, res, next) => authAdmin(req, res, next),
//   });
// });

// app.swagger();

startServer();
connectToDB();
createTablesInit();
