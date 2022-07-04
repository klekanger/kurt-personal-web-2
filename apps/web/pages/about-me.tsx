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
import { getAboutMePageText, getFeatureText } from '../lib/api';
import { AboutMe } from '../types/interfaces';

interface AboutMeProps {
  aboutMeText: AboutMe;
  featureText: {
    title: string;
    textBlocks: string[];
  };
  alternativeHeading?: string;
  preview: boolean;
}

const AboutMe: NextPage<AboutMeProps> = ({
  aboutMeText,
  featureText,
  preview,
}) => {
  const router = useRouter();

  if (!router.isFallback && !aboutMeText?.title) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Meta titleTag={`Lekanger tekst & kode - ${aboutMeText?.title}`} />
      <Layout preview={false}>
        <Container>
          <article>
            {router.isFallback ? (
              <PostTitle>Laster innhold...</PostTitle>
            ) : (
              <PostArticle
                title={aboutMeText?.title}
                coverImage={aboutMeText.mainImage}
                content={aboutMeText.body}
              />
            )}
          </article>
        </Container>
        <div className='pt-8'>
          <Feature
            content={featureText}
            alternativeHeading='Les mer om <mark>mine tjenester</mark>'
          />
        </div>
      </Layout>
    </>
  );
};

export default AboutMe;

export async function getStaticProps({ preview = false }) {
  const aboutMeText = await getAboutMePageText();
  const featureText = await getFeatureText();

  return {
    props: { aboutMeText, featureText },
    revalidate: 1,
  };
}
