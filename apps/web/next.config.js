/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

module.exports = {
  i18n: {
    locales: ['no'],
    defaultLocale: 'no',
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/project/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
    ];
  },
};
