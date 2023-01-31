/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.API_HOST],
  }
}

module.exports = nextConfig
