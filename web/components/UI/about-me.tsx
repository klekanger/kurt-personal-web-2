import Image from 'next/image';
import Link from 'next/link';
import { imageBuilder } from '../../lib/sanity';
import HeadingWithMarks from '../content-renderers/heading-with-marks';
import SimpleText from '../content-renderers/simple-text';
import Container from './container';

interface AboutMeProps {
  content: {
    title: string;
    images: {
      alt?: string;
      asset: object;
      caption?: string;
    }[];
    textBlocks: string[];
  };
}

export default function AboutMe({ content }: AboutMeProps) {
  const headingToRender = content?.title;

  const topImage =
    imageBuilder(content?.images[0]?.asset).width(1600).format('webp').url() ||
    '#';
  const secondImage =
    imageBuilder(content?.images[1]?.asset).width(1600).format('webp').url() ||
    '#';

  return (
    <div className='dark:bg-brand-dark-main1-10 bg-brand-main1-10 relative mt-16 overflow-hidden pb-8 sm:pb-0'>
      <Container>
        <article className='mb-16'>
          <section className='pt-8 md:pt-16'>
            <div className='px-2 pb-4 md:pb-8'>
              <HeadingWithMarks heading={headingToRender} />
            </div>
            <div
              className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:pb-12'
              data-gsap='reveal-right'
            >
              <div className='w-full md:pr-6 xl:pr-20'>
                <div className='py-2 px-2'>
                  <div className='pb-4'>
                    <SimpleText text={content?.textBlocks[0]} />
                  </div>
                </div>
              </div>
              <div className='relative h-80 w-full lg:h-96'>
                <Image
                  className='round absolute inset-0 h-full w-full rounded-md object-cover object-center'
                  src={topImage}
                  alt={content?.images[0]?.alt}
                  layout='fill'
                />
              </div>
            </div>
          </section>
          <section>
            <div
              className='grid grid-cols-1 gap-4 pt-8 md:grid-cols-2 md:pt-0'
              data-gsap='reveal-left'
            >
              <div className='relative order-2 h-80 w-full md:order-1 lg:h-96'>
                <Image
                  className='absolute inset-0 h-full w-full rounded-md object-cover object-center '
                  src={secondImage}
                  alt={content?.images[1]?.alt}
                  layout='fill'
                />
              </div>
              <div className='order-1 w-full pl-0 md:order-2'>
                <div className='py-0 px-2 md:py-2'>
                  <SimpleText text={content?.textBlocks[1]} />
                  <br />
                  <Link href='/about-me'>
                    <a className='read-more'>Les mer...</a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>
      </Container>
    </div>
  );
}
