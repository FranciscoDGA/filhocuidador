import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
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
