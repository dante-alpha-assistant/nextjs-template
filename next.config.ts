import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack is stable in Next.js 15 — enabled via `next dev --turbopack`
  // (production builds always use Webpack — this config has no effect on `next build`)
};

export default nextConfig;
