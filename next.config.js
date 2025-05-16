/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  
  // Configure output based on environment - Netlify prefers static output
  output: process.env.NETLIFY ? 'export' : 'standalone',
  
  // Configure images for Netlify
  images: {
    unoptimized: true,
    domains: ['supernovanetwork.xyz'],
  },
  
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },
  
  // Turn off ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Turn off TypeScript checking during builds
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 