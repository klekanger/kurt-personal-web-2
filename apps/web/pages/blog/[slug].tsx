import type { NextPage } from 'next';
import ErrorPage from 'next/error';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Meta from '../../components/meta';
import Container from '../../components/UI/container';
import Layout from '../../components/UI/layout';
import PostArticle from '../../components/UI/post-article';
import PostTitle from '../../components/UI/post-title';
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
  getRelatedPosts,
} from '../../lib/api';
import { formatDate } from '../../lib/format-date';
import { PostProps } from '../../types/interfaces';
import { imageBuilder } from '../../lib/sanity';

const Post: NextPage<PostProps> = ({
  post,
  //  morePosts,
  relatedPosts,
  preview,
}) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const dateToShow = formatDate({
    created: post?._createdAt,
    updated: post?._updatedAt,
  });

  const ogImageUrl =
    imageBuilder(post.mainImage?.asset).width(1200).height(630).url() || '#';
  const ogUrl = `https://www.lekanger.no/blog/${post.slug.current}`;
  const description = post.excerpt ? post.excerpt[0]?.children[0]?.text : '';

  return (
    <>
      <Meta
        titleTag={`${post?.title}`}
        ogImage={ogImageUrl}
        ogUrl={ogUrl}
        description={description}
      />
      <Layout preview={preview}>
        <Container>
          {router.isFallback ? (
            <PostTitle>Laster innhold...</PostTitle>
          ) : (
            <>
              <article>
                <PostArticle
                  title={post.title}
                  coverImage={post.mainImage}
                  content={post.body}
                  date={dateToShow}
                  author={post?.author?.name || ''}
                  keywords={post?.keywords}
                />
              </article>
              {relatedPosts && (
                <aside className='dark:highlight-white-10 mt-16 rounded-md bg-gray-200 px-8 pt-4 pb-8 shadow-lg dark:bg-brand-dark-background2'>
                  <h2 className='pb-4 text-brand-main2 dark:text-brand-dark-main2 '>
                    Relaterte artikler
                  </h2>
                  <ul>
                    {relatedPosts.map((post) => {
                      return (
                        <li key={post._id} className='list-inside list-disc'>
                          <Link href={`/blog/${post?.slug?.current}`}>
                            <span className='cursor-pointer transform transition duration-100 hover:text-brand-main2 hover:dark:text-brand-dark-main2'>
                              {post?.title}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </aside>
              )}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default Post;

export async function getStaticProps({
  params,
  preview = false,
}: {
  params: { slug: string };
  preview?: boolean;
}) {
  const data = await getPostAndMorePosts({
    slug: params.slug,
    preview: false,
  });

  const relatedPosts = await getRelatedPosts({
    slug: params.slug,
    preview: false,
  });

  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
      relatedPosts,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts: { slug: string }[] = await getAllPostsWithSlug();

  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: false,
  };
}
