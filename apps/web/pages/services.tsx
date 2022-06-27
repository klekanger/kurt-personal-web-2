import type { NextPage } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Meta from '../components/meta';
import Container from '../components/UI/container';
import CustomerStory from '../components/UI/customer-story';
import Layout from '../components/UI/layout';
import Navbar from '../components/UI/navbar';
import PostArticle from '../components/UI/post-article';
import PostTitle from '../components/UI/post-title';
import { getCustomerStoryText, getServicesText } from '../lib/api';

interface ServicesProps {
  servicesText: {
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

const Services: NextPage<ServicesProps> = ({
  servicesText,
  customerStoryText,
  preview,
}) => {
  const router = useRouter();

  if (!router.isFallback && !servicesText?.title) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Meta titleTag={`Lekanger tekst & kode - ${servicesText?.title}`} />
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
        <aside
          data-gsap='reveal-bottom'
          className='bg-gray-100 dark:bg-brand-dark-main1-10'
        >
          <CustomerStory content={customerStoryText} />
        </aside>
      </Layout>
    </>
  );
};

export default Services;

export async function getStaticProps({ preview = false }) {
  const servicesText = await getServicesText();
  const customerStoryText = await getCustomerStoryText();

  return {
    props: { servicesText, customerStoryText, preview },
    revalidate: 1,
  };
}
