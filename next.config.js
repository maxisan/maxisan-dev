/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['es', 'en', 'pt'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['picsum.photos'],
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
