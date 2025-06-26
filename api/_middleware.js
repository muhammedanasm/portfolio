export function middleware(req) {
  const ua = req.headers.get("user-agent")?.toLowerCase();
  const blocked = ["httrack", "wget", "curl", "python", "scrapy"];

  if (blocked.some((bot) => ua?.includes(bot))) {
    return new Response("Access Denied", { status: 403 });
  }

  return;
}
