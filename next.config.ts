import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

module.exports = {
  allowedDevOrigins: ["192.168.137.1"],
};

export default nextConfig;
