/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',   // Enables standalone mode for clean start
  webpack: (config) => config,
  experimental: { turbopack: false },
};

module.exports = nextConfig;
