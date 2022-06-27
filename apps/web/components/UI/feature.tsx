import Link from 'next/link';
import { FaGlobe, FaLanguage, FaNewspaper, FaPenFancy } from 'react-icons/fa';
import HeadingWithMarks from '../content-renderers/heading-with-marks';
import SimpleText from '../content-renderers/simple-text';
import Container from './container';

interface FeatureProps {
  content: {
    title: string;
    textBlocks: string[];
  };
  alternativeHeading?: string; // Heading if you don't want to use the default heading fetched from the CMS
}

export default function Feature({ content, alternativeHeading }: FeatureProps) {
  const headingToRender = content?.title;

  return (
    <Container>
      <article className='text-brand-black container mx-auto py-16'>
        <div className='flex flex-col items-center justify-center px-2 text-sm'>
          <div className='text-4xl font-black md:text-5xl lg:text-6xl'>
            <HeadingWithMarks heading={alternativeHeading || headingToRender} />
          </div>
          <div className='grid grid-cols-1 gap-8 pt-8 sm:pt-16 md:grid-cols-2 lg:grid-cols-4'>
            <Link passHref href='/services#h7a09c45aab3a'>
              <a className='dark:highlight-white-30 text-md bg-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 shadow-brand-secondary1-70 group hover:shadow-brand-secondary1-70 aspect-auto transform cursor-pointer rounded-md py-6 px-4 shadow-lg transition duration-500 hover:scale-[var(--scale-min)] dark:shadow-none dark:hover:shadow-none sm:text-sm xl:px-4'>
                <div className='flex justify-center text-4xl'>
                  <FaGlobe aria-hidden='true' />
                </div>
                <div className='text-center'>
                  <SimpleText text={content.textBlocks[1]} />
                </div>
              </a>
            </Link>
            <Link passHref href='/services#h8dffc8bf60f0'>
              <a className='dark:highlight-white-30 text-md bg-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 shadow-brand-secondary1-70 group hover:shadow-brand-secondary1-70  aspect-auto transform cursor-pointer rounded-md py-6 px-4 shadow-lg transition duration-500 hover:scale-[var(--scale-min)] dark:shadow-none dark:hover:shadow-none sm:text-sm xl:px-4'>
                <div className='flex justify-center text-4xl'>
                  <FaPenFancy aria-hidden='true' />
                </div>
                <div className='text-center'>
                  <SimpleText text={content.textBlocks[2]} />
                </div>
              </a>
            </Link>
            <Link passHref href='/services#h9fb9783ce276'>
              <a className='dark:highlight-white-30 text-md bg-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 shadow-brand-secondary1-70 group hover:shadow-brand-secondary1-70 aspect-auto transform cursor-pointer rounded-md py-6 px-4 shadow-lg transition duration-500 hover:scale-[var(--scale-min)] dark:shadow-none dark:hover:shadow-none sm:text-sm xl:px-4'>
                <div className='flex justify-center text-4xl'>
                  <FaLanguage aria-hidden='true' />
                </div>
                <div className='text-center'>
                  <SimpleText text={content.textBlocks[3]} />
                </div>
              </a>
            </Link>
            <Link passHref href='/services#h501d96744adc'>
              <a className='dark:highlight-white-30 text-md bg-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 shadow-brand-secondary1-70 group hover:shadow-brand-secondary1-70 aspect-auto transform cursor-pointer rounded-md py-6 px-4 shadow-lg transition duration-500 hover:scale-[var(--scale-min)] dark:shadow-none  dark:hover:shadow-none sm:text-sm xl:px-4'>
                <div className='flex justify-center text-4xl'>
                  <FaNewspaper aria-hidden='true' />
                </div>
                <div className='text-center'>
                  <SimpleText text={content.textBlocks[4]} />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </article>
    </Container>
  );
}
