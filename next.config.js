/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/vocabularies/my',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
