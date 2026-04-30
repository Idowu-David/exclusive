import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.137.1", "192.168.190.11", "196.220.245.22"],
  webpack: (
    config: { watchOptions?: { poll?: number; aggregateTimeout?: number } },
    { dev }: { dev: boolean },
  ) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
};

export default nextConfig;
