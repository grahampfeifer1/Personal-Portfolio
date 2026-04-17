import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Personal-Portfolio',
  assetPrefix: '/Personal-Portfolio/',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
