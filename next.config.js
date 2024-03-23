/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   unoptimized: false
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**'
      }
    ]
  },
  // images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
