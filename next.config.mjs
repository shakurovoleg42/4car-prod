/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c3b1-93-188-86-71.ngrok-free.app',
      },
    ],
  },
};

export default nextConfig;
