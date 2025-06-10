import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
     // @ts-expect-error: turbopack no está tipado aún
    turbopack: false,
  },
  images: {
    domains: [
      'unsplash.com',
      'www.pexels.com',
      'pixabay.com',
      'www.publicdomainpictures.net',
      'www.freepik.com',
      'images.unsplash.com',
    ],
  },
};

export default nextConfig;
