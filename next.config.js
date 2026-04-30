/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Webpack (kills Turbopack error)
  webpack: (config) => {
    return config;
  },
  
  // Optional: extra stability
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
