import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
    ],
  },
  redirects: async () => [
    {
      source: "/sitemap.xml",
      destination: "/api/sitemap",
      permanent: true,
    },
  ],
};

export default nextConfig;
