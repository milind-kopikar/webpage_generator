import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cloudflare Workers has no built-in Next image optimizer (that's a Vercel
    // feature). We serve images as-is: the logo is small and the Unsplash
    // photos are already sized/optimized via their URL query params, so there
    // is no visual difference. Keeps local dev and Cloudflare identical.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

// Enables Cloudflare bindings (KV/R2/D1/secrets) during `next dev` so local
// development matches the Workers runtime. Safe no-op when no bindings exist.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
