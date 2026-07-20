import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "filhocuidador.com.br",
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
