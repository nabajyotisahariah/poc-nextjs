import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Enables optimized Lambda deployment
};

export default nextConfig;