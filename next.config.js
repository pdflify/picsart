/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  distDir: 'build',
  images: {
    formats: ['image/avif'],
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig
