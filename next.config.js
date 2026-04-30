/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    return config;
  },
  // Silence Turbopack
  turbopack: {},
  reactStrictMode: true,
};

module.exports = nextConfig;
