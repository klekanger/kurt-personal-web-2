import type { GetStaticProps, NextPage } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Meta from '../components/meta';
import Container from '../components/UI/container';
import FeaturedBlogPosts from '../components/UI/featured-blog-posts';
import Layout from '../components/UI/layout';
import PostArticle from '../components/UI/post-article';
import PostTitle from '../components/UI/post-title';
import { getAllPostsForHome, getPrivacyText } from '../lib/api';
import { PrivacyPageProps } from '../types/interfaces';

const PrivacyPage: NextPage<PrivacyPageProps> = ({ privacyText, allPosts }) => {
  const router = useRouter();

  if (!router.isFallback && !privacyText?.title) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Meta
        titleTag={`${privacyText?.title}`}
        ogUrl='https://www.lekanger.no/privacy'
        description='Cookies og personvern'
      />
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
        <aside className='mt-8 bg-gray-100 pb-8 dark:bg-brand-dark-main1-10 md:mt-24'>
          <FeaturedBlogPosts content={allPosts} />
        </aside>
      </Layout>
    </>
  );
};

export default PrivacyPage;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const privacyText = await getPrivacyText();
  const allPosts = await getAllPostsForHome({
    preview,
    numberOfPosts: 4,
    offset: 0,
  });

  return {
    props: { privacyText, allPosts, preview },
    revalidate: 1,
  };
};
