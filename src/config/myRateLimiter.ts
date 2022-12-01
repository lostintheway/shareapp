// @ts-ignore
import RateLimit from "@fastify/rate-limit";
import Redis from "ioredis";
import { app } from "../server";

export function MyRateLimter() {
  if (process.env.NODE_ENV === "production") {
    const redis = new Redis({
      connectionName: "ratelimiter",
      host: "localhost",
      port: 6379,
      connectTimeout: 500,
      maxRetriesPerRequest: 1,
    });
    app.register(RateLimit, {
      global: true,
      max: 45,
      timeWindow: 1000 * 60 * 2,
      cache: 1000 * 60 * 15,
      // allowList: ["127.0.0.1"], // global allowList access ( ACL based on the key from the keyGenerator)
      redis: redis, // connection to redis
      // skipOnError: false, // default false
    });
  } else {
    app.register(RateLimit, {
      // global: true,
      max: 45,
      timeWindow: 1000 * 60 * 2,
    });
  }
}
