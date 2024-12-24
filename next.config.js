/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
    },
  ],
};

module.exports = nextConfig;
