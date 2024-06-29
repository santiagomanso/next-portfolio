/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn3.iconfinder.com', 'media.licdn.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
