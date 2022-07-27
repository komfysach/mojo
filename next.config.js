/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["getkomfy.net","fakestoreapi.com", "links.papareact.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
