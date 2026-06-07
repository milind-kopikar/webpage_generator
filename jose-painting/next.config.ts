import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Royalty-free stock (Unsplash) used as temporary, swappable project
    // imagery. Replace with Jose's own photos before launch — then this
    // remote pattern can be removed.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
