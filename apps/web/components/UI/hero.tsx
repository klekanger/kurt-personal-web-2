import Image from 'next/image';
import Link from 'next/link';
// import kurtPortrait from '../../public/kurt-kvadratisk-transparent.png';
import thinking from '../../public/thinking.svg';
import kurtPortrait from '../../public/kurt-wide-transparent-2.webp';
import { HeroProps } from '../../types/interfaces';
import HeadingWithMarks from '../content-renderers/heading-with-marks';
import SimpleText from '../content-renderers/simple-text';
import Container from './container';

export default function Hero({ content }: HeroProps) {
  const headingToRender = content?.title;

  return (
    <article className='bg-brand-main1-10 dark:bg-brand-dark-main1-10'>
      <Container>
        <div className='default-spacing flex flex-col-reverse justify-between pb-2 md:flex-row md:pb-0'>
          <section className='w-full px-2 pt-8 md:w-7/12 md:pb-16 md:pt-16'>
            <div className='pb-4 md:pb-8'>
              <HeadingWithMarks heading={headingToRender} />
            </div>
            <SimpleText text={content?.textBlocks[0]} />

            <div className='flex justify-around space-x-4 py-8 sm:px-32 md:justify-start md:px-0'>
              <Link href='/about-me'>
                <a className='btn btn-primary'>Om meg</a>
              </Link>

              <Link href='/projects'>
                <a className='btn btn-secondary'>Prosjekter</a>
              </Link>
            </div>
          </section>
          <div className='relative mt-8 w-full self-center md:relative md:m-0 md:mt-0 md:block md:w-5/12'>
            <Image
              objectFit='cover'
              src={kurtPortrait}
              layout='intrinsic'
              alt='Kurt Lekanger'
              priority={true}
              placeholder='blur'
              className='rounded-b-md'
            />
            <div className='thought-bubble absolute top-0 right-0 h-1/2 w-1/2 opacity-40'>
              <Image src={thinking} alt='tenkeboble' layout='fill' />
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
