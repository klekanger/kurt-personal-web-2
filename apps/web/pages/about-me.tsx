import { imageBuilder } from 'lib/sanity';
import type { NextPage, GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Meta from '../components/meta';
import Container from '../components/UI/container';
import Layout from '../components/UI/layout';
import PostArticle from '../components/UI/post-article';
import PostTitle from '../components/UI/post-title';
import { getAboutMePageText } from '../lib/api';
import { AboutMePageProps } from '../types/interfaces';

const AboutMe: NextPage<AboutMePageProps> = ({ aboutMeText }) => {
  const router = useRouter();

  if (!router.isFallback && !aboutMeText?.title) {
    return <ErrorPage statusCode={404} />;
  }

  const ogImageUrl =
    imageBuilder(aboutMeText.mainImage?.asset).width(1200).height(630).url() ||
    '#';

  return (
    <>
      <Meta
        titleTag={`${aboutMeText?.title}`}
        ogImage={ogImageUrl}
        ogUrl='https://www.lekanger.no/about-me'
      />
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
      </Layout>
    </>
  );
};

export default AboutMe;

export const getStaticProps: GetStaticProps = async (
  {
    /* preview = false */
  }
) => {
  const aboutMeText = await getAboutMePageText();

  return {
    props: { aboutMeText },
    revalidate: 1,
  };
};
