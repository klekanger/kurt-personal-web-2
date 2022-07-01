import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Meta from '../components/meta';
import AboutMe from '../components/UI/about-me';
import ContactMe from '../components/UI/contact-me';
import CustomerStory from '../components/UI/customer-story';
import Feature from '../components/UI/feature';
import Hero from '../components/UI/hero';
import Layout from '../components/UI/layout';

import {
  getAboutMeText,
  getAllPostsForHome,
  getCustomerStoryText,
  getFeatureText,
  getHeroText,
  getMenuItems,
} from '../lib/api';
import { HomePageProps } from '../types/interfaces';

const Home: NextPage<HomePageProps> = ({
  allPosts,
  heroText,
  aboutMeText,
  featureText,
  customerStoryText,
  preview,
}: HomePageProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Meta />

      <>
        <Layout preview={false}>
          <Hero content={heroText} />

          <div data-gsap='reveal-bottom'>
            <Feature content={featureText} />
          </div>
          <div data-gsap='reveal-bottom'>
            <AboutMe content={aboutMeText} />
          </div>
          <div data-gsap='reveal-bottom'>
            <CustomerStory content={customerStoryText} />
          </div>
          <div data-gsap='reveal-bottom'>
            <ContactMe />
          </div>

          <br />
        </Layout>
      </>
    </>
  );
};

export default Home;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome({
    preview,
    numberOfPosts: 6,
    offset: 0,
  });

  const heroText = await getHeroText();
  const aboutMeText = await getAboutMeText();
  const featureText = await getFeatureText();
  const customerStoryText = await getCustomerStoryText();

  return {
    props: {
      allPosts,
      heroText,
      aboutMeText,
      featureText,
      customerStoryText,
    },
    revalidate: 1,
  };
}
