/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'src/styles')],
  },
  webpack: (config, { isServer }) => {
    // Add alias for components to resolve properly
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.join(__dirname, 'components'),
      '@/styles': path.join(__dirname, 'styles'),
      '@/lib': path.join(__dirname, 'lib'),
      '@/public': path.join(__dirname, 'public'),
      '@/types': path.join(__dirname, 'types'),
      '@/src': path.join(__dirname, 'src'),
    };
    
    return config;
  },
  // Explicitly define TypeScript paths to match tsconfig
  experimental: {
    esmExternals: false,
  }
};

module.exports = nextConfig; 