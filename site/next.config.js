/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'DonnyPr0xy registry',
    description: 'The official store for Donnyproxy workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://registry.donega.eu/',
    contactUrl: 'https://registry.donega.eu/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
