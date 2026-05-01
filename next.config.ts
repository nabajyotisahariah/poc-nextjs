import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //output: "standalone", // Enables optimized Lambda deployment
   assetPrefix: "https://s3-nextjs-bucket.s3.ap-south-1.amazonaws.com",
};

export default nextConfig;