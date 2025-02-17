/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'DonnyPr0xy registry',
    description: 'The official store for Donnyproxy workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://donegamattia.github.io/kasm-registry/',
    contactUrl: 'https://registry.donega.eu/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
