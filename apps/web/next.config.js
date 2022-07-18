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
  async redirects() {
    return [
      {
        source: '/project/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
      {
        source: '/archive',
        destination: '/blogposts/1',
        permanent: true,
      },
    ];
  },
};
