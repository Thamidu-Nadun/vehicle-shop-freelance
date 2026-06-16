import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
