import type { NextPage } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Meta from '../components/meta';
import Container from '../components/UI/container';
import Layout from '../components/UI/layout';
import PostArticle from '../components/UI/post-article';
import PostTitle from '../components/UI/post-title';
import { getAboutMePageText } from '../lib/api';
import { AboutMeProps } from '../types/interfaces';

const AboutMe: NextPage<AboutMeProps> = ({ aboutMeText, preview }) => {
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
      </Layout>
    </>
  );
};

export default AboutMe;

export async function getStaticProps({ preview = false }) {
  const aboutMeText = await getAboutMePageText();

  return {
    props: { aboutMeText },
    revalidate: 1,
  };
}
