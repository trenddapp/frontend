/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/main',
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  rewrites() {
    return [{ source: '/main/_next/:path*', destination: '/_next/:path*' }]
  },
}

module.exports = nextConfig
