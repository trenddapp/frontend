/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/main',
  reactStrictMode: true,
  rewrites() {
    return [{ source: '/v1/main/_next/:path*', destination: '/_next/:path*' }]
  },
}

module.exports = nextConfig
