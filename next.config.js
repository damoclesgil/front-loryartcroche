/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.loryartcroche.com.br'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**'
        // pathname: 'localhost:1337',
      }
    ]
  }
}

module.exports = nextConfig
