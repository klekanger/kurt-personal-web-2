import type { NextPage, GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Meta from '../components/meta';
import Container from '../components/UI/container';
import Layout from '../components/UI/layout';
import PostArticle from '../components/UI/post-article';
import PostTitle from '../components/UI/post-title';
import { getContactText } from '../lib/api';
import { ContactProps } from '../types/interfaces';

const Contact: NextPage<ContactProps> = ({ contactText }) => {
  const router = useRouter();

  if (!router.isFallback && !contactText?.title) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Meta titleTag={`Lekanger tekst & kode - ${contactText?.title}`} />
      <Layout preview={false}>
        <Container>
          <article>
            {router.isFallback ? (
              <PostTitle>Laster innhold...</PostTitle>
            ) : (
              <PostArticle
                title={contactText?.title}
                coverImage={contactText.mainImage}
                content={contactText.body}
              />
            )}
          </article>
        </Container>
      </Layout>
    </>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async (
  {
    /*  preview = false  */
  }
) => {
  const contactText = await getContactText();

  return {
    props: { contactText },
    revalidate: 1,
  };
};
