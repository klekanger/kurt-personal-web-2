import Head from 'next/head';
import { HOME_OG_IMAGE_URL } from '../lib/constants';

export default function Meta({
  titleTag,
  ogImage,
  ogUrl,
  description,
}: {
  titleTag?: string;
  ogImage?: string;
  ogUrl?: string;
  description?: string;
}) {
  return (
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/icons/apple-touch-icon.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='theme-color' content='#fff' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      <meta
        name='description'
        content={`${
          description
            ? description
            : 'Mer enn 30 års erfaring som journalist, redaktør og innholdsprodusent. Koder i JavaScript, TypeScript og React – fordi det er gøy.'
        }`}
      />
      <meta
        property='og:image'
        content={
          ogImage ? ogImage : `https://www.lekanger.no/${HOME_OG_IMAGE_URL}`
        }
        key='ogimage'
      />

      <title>
        {`${
          titleTag
            ? titleTag
            : 'Kurt Lekanger - journalist og fullstack hobbyutvikler'
        }`}
      </title>

      {/* Twitter */}
      <meta name='twitter:card' content='summary' key='twcard' />
      <meta name='twitter:creator' content='@lekanger' key='twhandle' />

      {/* Open Graph */}
      <meta
        property='og:url'
        content={ogUrl || 'https://www.lekanger.no'}
        key='ogurl'
      />
      <meta property='og:locale' content='nb-NO' key='oglocale' />

      <meta property='og:site_name' content='Kurt Lekanger' key='ogsitename' />
      <meta
        property='og:title'
        content={`${
          titleTag
            ? titleTag
            : 'Lekanger tekst & kode - tekstforfatter, innholdsprodusent og utvikler'
        }`}
        key='ogtitle'
      />
      <meta
        property='og:description'
        content={`${
          description
            ? description
            : 'Tekstforfatter, innholdsprodusent, oversetter og utvikler. Javascript, React, Next.js, Gatsby.'
        }`}
        key='ogdesc'
      />
      <meta property='og:type' content='website' key='ogtype' />
    </Head>
  );
}
