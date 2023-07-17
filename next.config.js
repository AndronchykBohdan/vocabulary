/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/vocabularies',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
