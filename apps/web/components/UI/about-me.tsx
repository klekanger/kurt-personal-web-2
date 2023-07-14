import Image from 'next/image';
import Link from 'next/link';
import { imageBuilder } from '../../lib/sanity';
import { AboutMeProps } from '../../types/interfaces';
import HeadingWithMarks from '../content-renderers/heading-with-marks';
import SimpleText from '../content-renderers/simple-text';
import Container from './container';

export default function AboutMe({ content }: { content: AboutMeProps }) {
  const headingToRender = content?.title;

  if (!content.images) {
    return null;
  }

  const topImage =
    imageBuilder(content?.images[0]?.asset).width(1600).format('webp').url() ||
    '#';

  const secondImage =
    imageBuilder(content?.images[1]?.asset).width(1600).format('webp').url() ||
    '#';

  return (
    <div className='default-spacing relative overflow-hidden bg-brand-main1-10 pb-8 dark:bg-brand-dark-main1-10 md:pb-16'>
      <Container>
        <article>
          <section className='pt-8 md:pt-16'>
            <div className='px-2 pb-4 md:pb-8'>
              <HeadingWithMarks heading={headingToRender} />
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:pb-12'>
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
            <div className='grid grid-cols-1 gap-4 pt-8 md:grid-cols-2 md:pt-0'>
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
                  <Link href='/about-me' className='read-more'>
                    Les mer...
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
