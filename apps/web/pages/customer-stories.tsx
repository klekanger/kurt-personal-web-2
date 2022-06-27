import type { NextPage } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Meta from '../components/meta';
import Container from '../components/UI/container';
import Layout from '../components/UI/layout';
import Navbar from '../components/UI/navbar';
import PostArticle from '../components/UI/post-article';
import PostTitle from '../components/UI/post-title';
import { getCustomerStoriesText } from '../lib/api';

interface CustomerStoriesProps {
  customerStoriesText: {
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
  preview: boolean;
}

const CustomerStories: NextPage<CustomerStoriesProps> = ({
  customerStoriesText,
  preview,
}) => {
  const router = useRouter();

  if (!router.isFallback && !customerStoriesText?.title) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Meta
        titleTag={`Lekanger tekst & kode - ${customerStoriesText?.title}`}
      />
      <Layout preview={false}>
        <Container>
          <article>
            {router.isFallback ? (
              <PostTitle>Laster innhold...</PostTitle>
            ) : (
              <PostArticle
                title={customerStoriesText?.title}
                coverImage={customerStoriesText.mainImage}
                content={customerStoriesText.body}
              />
            )}
          </article>
        </Container>
      </Layout>
    </>
  );
};

export default CustomerStories;

export async function getStaticProps({ preview = false }) {
  const customerStoriesText = await getCustomerStoriesText();

  return {
    props: { customerStoriesText, preview },
    revalidate: 1,
  };
}
