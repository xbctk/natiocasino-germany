import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  reactStrictMode: true,
  agentRules: false,
};

export default nextConfig;
