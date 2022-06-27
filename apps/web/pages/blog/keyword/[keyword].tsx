import type { NextPage } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import ArticleGrid from '../../../components/UI/article-grid';
import Container from '../../../components/UI/container';
import Layout from '../../../components/UI/layout';
import Navbar from '../../../components/UI/navbar';
import PostTitle from '../../../components/UI/post-title';
import { getAllKeywords, getAllPostsWithKeyword } from '../../../lib/api';
import { Post } from '../../../types/interfaces';

interface PostKeywordProps {
  posts: Post[];
  keyword: string;
  preview: boolean;
}

const PostKeyword: NextPage<PostKeywordProps> = ({
  posts,
  keyword,
  preview,
}) => {
  const router = useRouter();
  if (!posts || !keyword) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Laster innhold...</PostTitle>
        ) : (
          <div>
            <h1 className='leading-relaxed text-brand-main2'>
              Artikler tagget med{' '}
              <span className='text-brand-secondary2'>#{`${keyword}`}</span>
            </h1>

            <ArticleGrid posts={posts} />
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default PostKeyword;

export async function getStaticProps({
  params,
  preview = false,
}: {
  params: { keyword: string };
  preview?: boolean;
}) {
  const posts = await getAllPostsWithKeyword(params.keyword);

  return {
    props: {
      preview,
      posts,
      keyword: params.keyword,
    },
  };
}

export async function getStaticPaths() {
  const allKeywords = await getAllKeywords();

  // Make sure we're only adding unique keywords
  const keywords = new Set<string>();

  allKeywords.forEach((post: any) => {
    post.keywords.forEach((keyword: string) => {
      keywords.add(keyword.toLowerCase());
    });
  });

  const paths = Array.from(keywords).map((keyword) => {
    return {
      params: {
        keyword,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}