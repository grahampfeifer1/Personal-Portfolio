import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  basePath: '/Personal-Portfolio',
  assetPrefix: '/Personal-Portfolio/',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
