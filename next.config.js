/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "tailwindui.com",
      "mockproducts.s3.amazonaws.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/jobs",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
