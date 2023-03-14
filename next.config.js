/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.soulsearch.blaize.technology'],
  }
}

module.exports = nextConfig
