/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    async redirects() {
      return [
        {
          source: '/dashboard',
          destination: '/dashboard/accounts',
          permanent: true,
        },
      ]
    },
  }
  
  module.exports = nextConfig
  
