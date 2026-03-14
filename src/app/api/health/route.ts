// Health check endpoint — verify your app is running
// Extend /src/app/api/ with your own routes following this pattern
export async function GET() {
  return Response.json({ status: "ok", timestamp: new Date().toISOString() });
}
