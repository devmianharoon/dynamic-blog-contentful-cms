/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['images.ctfassets.net'],
  },
  experimental: {
      trailingSlash: false,
  },
};

module.exports = nextConfig;
