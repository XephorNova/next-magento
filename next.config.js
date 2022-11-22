/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["loremflickr.com", "magentopractice.m2dev.invanos.net"],
  },
};

module.exports = nextConfig;
