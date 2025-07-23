/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configuración para GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/labarraweb' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/labarraweb' : '',
}

module.exports = nextConfig
