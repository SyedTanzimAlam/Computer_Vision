import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",

        hostname: "visionforge.ai",
      },
      {
        protocol: "https",
        hostname: "assets.visionforge.ai",
      },
    ],
  },
};

export default nextConfig;
