import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // If you have a custom domain, uncomment and set it here
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
};

export default nextConfig;
