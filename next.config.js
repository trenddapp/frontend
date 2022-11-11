/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
    esmExternals: 'loose',
  },
}

module.exports = nextConfig
