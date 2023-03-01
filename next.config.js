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
}

module.exports = nextConfig
