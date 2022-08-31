/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    domains: ['blog.podobro.pl', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
