import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "simpleicons.org",
      }
    ],
  },
  /* config options here */
};

export default nextConfig;
