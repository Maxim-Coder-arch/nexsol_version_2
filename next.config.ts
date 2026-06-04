import type { NextConfig } from "next";

const path = require('path');

const nextConfig: NextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'global_styles')],
  },
};

export default nextConfig;
