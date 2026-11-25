import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  redirects: async () => [
    {
      source: "/direitos-financas",
      destination: "/orientacao-juridica",
      permanent: true,
    },
    {
      source: "/rotina-organizacao",
      destination: "/familia",
      permanent: true,
    },
    {
      source: "/saude-mental",
      destination: "/saude-emocional",
      permanent: true,
    },
  ],
};

export default nextConfig;
