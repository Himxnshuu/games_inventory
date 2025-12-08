import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.akamai.steamstatic.com",
        
        pathname: "/steam/apps/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "cdn2.unrealengine.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.contentstack.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "shared.fastly.steamstatic.com",
        pathname: "/**",
      },
      
    ],
  },
};

export default nextConfig;
