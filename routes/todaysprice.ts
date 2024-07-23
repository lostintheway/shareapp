import { asc } from "drizzle-orm";
import { db } from "../db/db";
import { stockPrice } from "../db/schema";
import { corsHeaders } from "../utils/cors";

export async function getTodaysPrice(req: Request): Promise<Response> {
  const url = new URL(req.url);
  if (url.pathname === "/todaysprice") {
    const data = await db
      .select()
      .from(stockPrice)
      .orderBy(asc(stockPrice.symbol));
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: corsHeaders,
    });
  }
  return new Response("Not Found", { status: 404 });
}
