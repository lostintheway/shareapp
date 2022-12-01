// Register Swagger

import { app } from "../server";

// app.register(swagger, Swagger);
export const startServer = async (): Promise<void> => {
  // const host = process.env.NODE_ENV === "development" ? "localhost" : "0.0.0.0";
  try {
    await app.listen({ port: process.env.PORT as any, host: process.env.HOST });
    // app.swagger();
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
