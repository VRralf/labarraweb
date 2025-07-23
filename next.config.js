/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configuración para GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/la-barra-web' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/la-barra-web' : '',
}

module.exports = nextConfig
