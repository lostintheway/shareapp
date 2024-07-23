// CORS headers for localhost
export const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:5173",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Handle OPTIONS requests for CORS preflight
export function handleOptions() {
  return new Response(null, { headers: corsHeaders });
}
