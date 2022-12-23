/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "./src/styles")],
    prependData: `@import "index.scss";`
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_DOMAIN_URL || "localhost", "127.0.0.1"]
  }
};

module.exports = nextConfig;
