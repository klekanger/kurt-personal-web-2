import Image from 'next/image';
import Link from 'next/link';
import kurtPortrait from '../../public/kurt-kvadratisk-transparent.png';
import HeadingWithMarks from '../content-renderers/heading-with-marks';
import Container from './container';

interface HeroProps {
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

export default function Hero({ content }: HeroProps) {
  const headingToRender = content?.title;

  return (
    <article className='dark:bg-brand-dark-main1-10 bg-brand-main1-10'>
      <Container>
        <div className='my-0 flex justify-between sm:my-8 md:my-16'>
          <section className='w-full px-2 pt-8 pb-16 md:w-7/12 md:pt-16 lg:pt-32'>
            <div className=''>
              <HeadingWithMarks heading={headingToRender} wrap />
            </div>
            <p className='py-8 md:pr-2'>{content.textBlocks[0]}</p>
            <div className='flex justify-around space-x-4 py-8 sm:px-32 md:justify-start md:px-0'>
              <Link href='/services'>
                <a className='btn btn-primary'>Les mer</a>
              </Link>

              <Link href='/contact'>
                <a className='btn btn-secondary'>Kontakt meg</a>
              </Link>
            </div>
          </section>
          <div className='relative hidden md:block md:w-5/12'>
            <Image
              objectFit='cover'
              src={kurtPortrait}
              layout='fill'
              alt='Kurt Lekanger'
              priority={true}
            />
          </div>
        </div>
      </Container>
    </article>
  );
}
