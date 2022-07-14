import { imageBuilder } from 'lib/sanity';
import type { NextPage, GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Meta from '../components/meta';
import Container from '../components/UI/container';
import FeaturedBlogPosts from '../components/UI/featured-blog-posts';
import Layout from '../components/UI/layout';
import PostArticle from '../components/UI/post-article';
import PostTitle from '../components/UI/post-title';
import { getAllPostsForHome, getProjectsText } from '../lib/api';
import { ProjectsProps } from '../types/interfaces';

const Projects: NextPage<ProjectsProps> = ({
  projectsText: servicesText,
  allPosts,
}) => {
  const router = useRouter();

  if (!router.isFallback && !servicesText?.title) {
    return <ErrorPage statusCode={404} />;
  }

  const ogImageUrl =
    imageBuilder(servicesText.mainImage?.asset).width(1200).height(630).url() ||
    '#';

  return (
    <>
      <Meta
        titleTag={`Lekanger tekst & kode - ${servicesText?.title}`}
        ogImage={ogImageUrl}
        ogUrl='https://www.lekanger.no/projects'
      />
      <Layout preview={false}>
        <Container>
          <article>
            {router.isFallback ? (
              <PostTitle>Laster innhold...</PostTitle>
            ) : (
              <PostArticle
                title={servicesText?.title}
                coverImage={servicesText.mainImage}
                content={servicesText.body}
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

export default Projects;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const projectsText = await getProjectsText();
  const allPosts = await getAllPostsForHome({
    preview,
    numberOfPosts: 4,
    offset: 0,
  });

  return {
    props: { projectsText, allPosts, preview },
    revalidate: 1,
  };
};
