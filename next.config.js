/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['es', 'en', 'pt'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['picsum.photos'],
  },
}

module.exports = nextConfig
