import Image from 'next/image';
import Link from 'next/link';
import kurtPortrait from '../../public/kurt-kvadratisk-transparent.png';
import { HeroProps } from '../../types/interfaces';
import HeadingWithMarks from '../content-renderers/heading-with-marks';
import SimpleText from '../content-renderers/simple-text';
import Container from './container';

export default function Hero({ content }: HeroProps) {
  const headingToRender = content?.title;

  return (
    <article className='bg-brand-main1-10 dark:bg-brand-dark-main1-10'>
      <Container>
        <div className='default-spacing flex justify-between'>
          <section className='w-full px-2 pt-8 md:w-7/12 md:pb-16 md:pt-16'>
            <div className='pb-4 md:pb-8'>
              <HeadingWithMarks heading={headingToRender} />
            </div>
            <SimpleText text={content?.textBlocks[0]} />

            <div className='flex justify-around space-x-4 py-8 sm:px-32 md:justify-start md:px-0'>
              <Link href='/about-me?button_hero_Om meg'>
                <a className='btn btn-primary'>Om meg</a>
              </Link>

              <Link href='/projects'>
                <a className='btn btn-secondary'>Prosjekter</a>
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
              placeholder='blur'
              className='rounded-b-md'
            />
          </div>
        </div>
      </Container>
    </article>
  );
}
