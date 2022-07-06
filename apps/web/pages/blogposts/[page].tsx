import type { NextPage } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import HeadingWithMarks from '../../components/content-renderers/heading-with-marks';
import Meta from '../../components/meta';
import BlogPostList from '../../components/UI/blog-post-list';
import BlogTopSection from '../../components/UI/blog-top-section';
import Container from '../../components/UI/container';
import Layout from '../../components/UI/layout';
import Navbar from '../../components/UI/navbar';
import Pagination from '../../components/UI/pagination';
import PostTitle from '../../components/UI/post-title';
import Spinner from '../../components/UI/spinner';
import { getAllPostsForHome, getNumberOfPosts } from '../../lib/api';
import { BlogProps } from '../../types/interfaces';

const POSTS_PER_PAGE = 6;

const Blog: NextPage<BlogProps> = ({
  firstPosts,
  restOfThePosts,
  page,
  numberOfPages,
  preview,
}) => {
  const router = useRouter();

  if (!router.isFallback && !firstPosts) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Meta
        titleTag={`Lekanger tekst & kode - siste blogginnlegg -  side ${page}`}
      />
      <Layout preview={preview}>
        <Container>
          <article>
            {router.isFallback ? (
              <Spinner />
            ) : (
              <>
                <PostTitle>
                  <HeadingWithMarks
                    heading={`Siste <mark>blogg&shy;poster</mark> - side&nbsp;${page}`}
                  />
                </PostTitle>
                {/* Show featured blogposts only on first page */}
                {page === '1' && <BlogTopSection posts={firstPosts} />}{' '}
                <BlogPostList posts={restOfThePosts} />
              </>
            )}

            <div className='mt-8'>
              <Pagination
                numberOfPages={numberOfPages}
                startPage={Number(page)}
              />
            </div>
          </article>
        </Container>
      </Layout>
    </>
  );
};

export default Blog;

export async function getStaticProps({
  params,
  preview = false,
}: {
  params: { page: string };
  preview?: boolean;
}) {
  // Get the three first posts if we're on the first page
  // We'll make these the featured posts
  let firstPosts: string[] = [];
  if (params.page === '1') {
    firstPosts = await getAllPostsForHome({
      numberOfPosts: 3,
      offset: 0,
    });
  }

  const restOfThePosts = await getAllPostsForHome({
    numberOfPosts: POSTS_PER_PAGE,
    offset: 3 + (Number(params.page) - 1) * POSTS_PER_PAGE,
  });

  const numberOfPosts = await getNumberOfPosts();
  const numberOfPages = Math.ceil(numberOfPosts / POSTS_PER_PAGE);

  return {
    props: {
      firstPosts,
      restOfThePosts,
      page: params.page,
      numberOfPages,
    },
    revalidate: 1,
  };
}

// Make a number of static pages, depending on how many posts we have and POSTS_PER_PAGE
export async function getStaticPaths() {
  const numberOfPosts = await getNumberOfPosts();
  const numberOfPages = Math.ceil(numberOfPosts / POSTS_PER_PAGE) - 1;

  // Create paths for all pages
  const paths = Array.from({ length: numberOfPages }, (_, i) => {
    return {
      params: {
        page: (i + 1).toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
