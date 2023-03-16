/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.soulsearch.blaize.technology', 'gateway.pinata.cloud'],
  }
}

module.exports = nextConfig
