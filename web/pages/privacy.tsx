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
import { getFeatureText, getPrivacyText } from '../lib/api';

interface PrivacyPageProps {
  privacyText: {
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
    webContentType: string;
    preview: boolean;
  };
  customerStoryText: {
    title: string;
    images: {
      alt?: string;
      asset: object;
      caption?: string;
    }[];
    textBlocks: string[];
    webFrontPageIdentifier: string;
  };
  featureText: {
    title: string;
    textBlocks: string[];
  };
  preview: boolean;
}

const PrivacyPage: NextPage<PrivacyPageProps> = ({
  privacyText,
  featureText,
  preview,
}) => {
  const router = useRouter();

  if (!router.isFallback && !privacyText?.title) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Meta titleTag={`Lekanger tekst & kode - ${privacyText?.title}`} />
      <Layout preview={false}>
        <Container>
          <article>
            {router.isFallback ? (
              <PostTitle>Laster innhold...</PostTitle>
            ) : (
              <PostArticle
                title={privacyText?.title}
                coverImage={privacyText.mainImage}
                content={privacyText.body}
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

export default PrivacyPage;

export async function getStaticProps({ preview = false }) {
  const privacyText = await getPrivacyText();
  const featureText = await getFeatureText();

  return {
    props: { privacyText, featureText, preview },
    revalidate: 1,
  };
}
