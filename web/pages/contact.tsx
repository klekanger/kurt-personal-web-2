import type { NextPage } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Meta from '../components/meta';
import Container from '../components/UI/container';
import Feature from '../components/UI/feature';
import Layout from '../components/UI/layout';
import Navbar from '../components/UI/navbar';
import PostArticle from '../components/UI/post-article';
import PostTitle from '../components/UI/post-title';
import { getContactText, getFeatureText } from '../lib/api';

interface ContactProps {
  contactText: {
    title: string;
    body: Object[];
    mainImage: {
      alt: string;
      asset: {
        _ref: string;
        _type: string;
      };
      caption: string;
      _type: string;
    };
    preview: boolean;
  };
  featureText: {
    title: string;
    textBlocks: string[];
  };
  preview: boolean;
}

const Contact: NextPage<ContactProps> = ({
  contactText,
  featureText,
  preview,
}) => {
  const router = useRouter();

  if (!router.isFallback && !contactText?.title) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Meta titleTag={`Lekanger tekst & kode - ${contactText?.title}`} />
      <Layout preview={false}>
        <Container>
          <article>
            {router.isFallback ? (
              <PostTitle>Laster innhold...</PostTitle>
            ) : (
              <PostArticle
                title={contactText?.title}
                coverImage={contactText.mainImage}
                content={contactText.body}
              />
            )}
          </article>
        </Container>
        <div data-gsap='reveal-bottom' className='pt-8'>
          <Feature
            content={featureText}
            alternativeHeading='Les mer om <mark>mine tjenester</mark>'
          />
        </div>
      </Layout>
    </>
  );
};

export default Contact;

export async function getStaticProps({ preview = false }) {
  const contactText = await getContactText();
  const featureText = await getFeatureText();

  return {
    props: { contactText, featureText },
    revalidate: 1,
  };
}
