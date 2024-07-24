// CORS headers for localhost
export const corsHeaders = {
  "Access-Control-Allow-Origin": "tunnel.sushilsampangrai.com.np",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Handle OPTIONS requests for CORS preflight
export function handleOptions() {
  return new Response(null, { headers: corsHeaders });
}
