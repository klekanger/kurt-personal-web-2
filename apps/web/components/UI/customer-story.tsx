import Image from 'next/image';
import Link from 'next/link';
import { imageBuilder } from '../../lib/sanity';
import HeadingWithMarks from '../content-renderers/heading-with-marks';
import SimpleText from '../content-renderers/simple-text';
import Container from './container';

interface CustomerStoryProps {
  content: {
    title: string;
    images: {
      alt?: string;
      asset: object;
      caption?: string;
    }[];
    textBlocks: string[];
  };
  noXPadding?: boolean; // Skip padding on left and right of text
}

export default function CustomerStory({
  content,
  noXPadding = false,
}: CustomerStoryProps) {
  const headingToRender = content?.title;
  let featuredImage;

  if (!content?.images) {
    featuredImage = null;
  } else {
    featuredImage =
      imageBuilder(content?.images[0]?.asset)
        .width(1600)
        .format('webp')
        .url() || '#';
  }

  return (
    <div className='relative mt-16 overflow-hidden pb-8 sm:pb-0'>
      <Container>
        <article className='mb-16'>
          <div className='pt-8 md:pt-16'>
            <div className='grid grid-cols-1 gap-4 gap-x-4 pb-12 md:grid-cols-2 md:flex-nowrap'>
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
                <Link href='/customer-stories'>
                  <a className='read-more'>
                    Les mer om dette og flere prosjekter her »
                  </a>
                </Link>
              </div>
              <div className='relative my-auto h-80 w-full'>
                {featuredImage && (
                  <Image
                    className='absolute inset-0 h-full w-full rounded-md object-cover object-center'
                    src={featuredImage}
                    alt={content?.images[0]?.alt}
                    layout='fill'
                  />
                )}
              </div>
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
}
