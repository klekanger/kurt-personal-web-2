import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
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
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([] as HTMLDivElement[]);
  revealRefs.current = [];

  const addToRefs = (el: HTMLDivElement) => {
    revealRefs.current.push(el);
  };

  useEffect(() => {
    revealRefs.current.forEach((el, i) => {
      gsap.from(el, {
        y: 100,
        scrollTrigger: {
          id: `section-${i + 1}`,
          trigger: el,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <>
      <Meta />

      <>
        <Layout preview={false}>
          <Hero content={heroText} />
          <div className='scroll-reveal' ref={addToRefs}>
            <Feature content={featureText} />
          </div>
          <div className='scroll-reveal' ref={addToRefs}>
            <AboutMe content={aboutMeText} />
          </div>
          <div className='scroll-reveal' ref={addToRefs}>
            <CustomerStory content={customerStoryText} />
          </div>
          <div className='scroll-reveal' ref={addToRefs}>
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
