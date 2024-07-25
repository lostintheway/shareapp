import { asc } from "drizzle-orm";
import { db } from "../db/db";
import { stockPrice } from "../db/schema";

export async function getTodaysPrice(req: Request): Promise<Response> {
  const data = await db
    .select()
    .from(stockPrice)
    .orderBy(asc(stockPrice.symbol));
  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
