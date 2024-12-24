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
  images: {
    domains: [
      'ascii.jp',
      'images.unsplash.com',
      'storage.googleapis.com',
      'www.newsweekjapan.jp',
      'news.mynavi.jp',
      'image.itmedia.co.jp'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
