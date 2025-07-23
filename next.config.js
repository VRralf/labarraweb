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
  // Desactivar linting y type checking en build para deploy
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
