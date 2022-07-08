import Image from 'next/image';
import Link from 'next/link';
import { imageBuilder } from '../../lib/sanity';
import { CustomerStoryProps } from '../../types/interfaces';
import HeadingWithMarks from '../content-renderers/heading-with-marks';
import SimpleText from '../content-renderers/simple-text';
import Container from './container';

export default function CustomerStory({
  content,
  noXPadding = false,
}: CustomerStoryProps) {
  const headingToRender = content?.title;
  const featuredImage = { src: '', alt: '' };

  if (!content.images) {
    featuredImage.src = '/#';
  } else {
    featuredImage.src =
      imageBuilder(content?.images[0]?.asset)
        .width(1600)
        .format('webp')
        .url() || '#';

    featuredImage.alt = content?.images[0]?.alt || '';
  }

  return (
    <Container>
      <article className='default-spacing'>
        <div className='grid grid-cols-1 gap-4 gap-x-4 md:grid-cols-2 md:flex-nowrap'>
          <div className={`w-full pr-4 ${noXPadding ? '' : 'px-2'}`}>
            <div className='py-0'>
              <div className='pb-4 md:pb-8'>
                <HeadingWithMarks heading={headingToRender} />
              </div>
              <div className=''>
                <SimpleText text={content?.textBlocks[0]} />
              </div>
            </div>
            <br />
            <Link href='/projects'>
              <a className='read-more'>
                Les mer om dette og flere prosjekter her »
              </a>
            </Link>
          </div>
          <div className='relative my-auto h-80 w-full'>
            {featuredImage && (
              <Image
                className='absolute inset-0 h-full w-full rounded-md object-cover object-center'
                src={featuredImage.src}
                alt={featuredImage.alt}
                layout='fill'
              />
            )}
          </div>
        </div>
      </article>
    </Container>
  );
}
