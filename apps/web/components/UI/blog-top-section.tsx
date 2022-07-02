import Image from 'next/image';
import Link from 'next/link';
import { imageBuilder } from '../../lib/sanity';
import { Post } from '../../types/interfaces';
//import {Suspense} from 'react';

interface BlogTopSectionProps {
  posts: Post[];
}

export default function BlogTopSection({ posts }: BlogTopSectionProps) {
  if (!posts) {
    return null;
  }

  const firstPost = posts[0] || null;
  const secondPost = posts[1] || null;
  const thirdPost = posts[2] || null;

  return (
    <div className='grid grid-flow-row grid-rows-2 gap-4 md:mb-16 md:grid-flow-col md:grid-cols-12'>
      <div className='md:col-span-8 md:row-span-2 xl:col-span-6'>
        {firstPost && (
          <div className='relative'>
            <Link href={`/blog/${firstPost?.slug?.current}`} passHref>
              <div className='relative aspect-[16/10] w-full md:aspect-[4/7]'>
                <Image
                  className='cursor-pointer rounded-md'
                  layout='fill'
                  objectFit='cover'
                  src={
                    imageBuilder(firstPost?.mainImage)
                      .width(800)
                      .height(450)
                      .url() || '#'
                  }
                  alt={firstPost?.mainImage?.alt}
                  priority={true}
                />
              </div>
            </Link>
            <div className='left-0 md:absolute md:top-4 md:bg-brand-black/50 md:px-6 md:py-4 md:shadow-lg md:backdrop-blur-lg lg:top-[10%] lg:w-2/3'>
              <Link href={`/blog/${firstPost?.slug?.current}`} passHref>
                <h2 className='transform cursor-pointer pb-2 text-2xl text-brand-main2 transition duration-500 hover:text-brand-secondary2 dark:text-brand-dark-main2  dark:hover:text-brand-dark-secondary1 md:font-extrabold md:text-brand-main1 md:hover:text-brand-secondary1 md:dark:text-brand-dark-main1 lg:text-4xl'>
                  <a>{firstPost?.title}</a>
                </h2>
              </Link>
              <p className='mt-2 md:text-brand-dark-white '>
                {firstPost?.excerpt &&
                  `${firstPost?.excerpt[0]?.children[0]?.text.slice(0, 500)}${
                    firstPost?.excerpt[0]?.children[0]?.text.length > 500
                      ? '...'
                      : ''
                  }`}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className='md:col-span-4 xl:col-span-6'>
        {secondPost && (
          <div className=''>
            <Link href={`/blog/${secondPost?.slug?.current}`} passHref>
              <div className='relative aspect-[16/10] md:aspect-video'>
                <Image
                  className='cursor-pointer rounded-md object-cover'
                  layout='fill'
                  src={
                    imageBuilder(secondPost?.mainImage)
                      .width(800)
                      .height(450)
                      .url() || '#'
                  }
                  alt={secondPost?.mainImage?.alt}
                  priority={true}
                />
              </div>
            </Link>
            <div className='mt-4'>
              <Link href={`/blog/${secondPost?.slug?.current}`} passHref>
                <h2 className='cursor-pointer pb-2 text-2xl text-brand-main2 hover:text-brand-secondary2 dark:text-brand-dark-main2 dark:hover:text-brand-dark-secondary2'>
                  <a>{secondPost?.title}</a>
                </h2>
              </Link>
              <p className='mt-2 md:text-base'>
                {secondPost?.excerpt &&
                  `${secondPost?.excerpt[0]?.children[0]?.text.slice(0, 500)}${
                    secondPost?.excerpt[0]?.children[0]?.text.length > 500
                      ? '...'
                      : ''
                  }`}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className='md:col-span-4 xl:col-span-6'>
        {thirdPost && (
          <div className=''>
            <Link href={`/blog/${thirdPost?.slug?.current}`} passHref>
              <div className='relative aspect-[16/10] md:aspect-video'>
                <Image
                  className='cursor-pointer rounded-md object-cover'
                  layout='fill'
                  src={
                    imageBuilder(thirdPost?.mainImage)
                      .width(800)
                      .height(450)
                      .url() || '#'
                  }
                  alt={thirdPost?.mainImage?.alt}
                  priority={true}
                />
              </div>
            </Link>
            <div className='mt-4'>
              <Link href={`/blog/${secondPost?.slug?.current}`} passHref>
                <h2 className='cursor-pointer pb-2 text-2xl text-brand-main2 hover:text-brand-secondary2 dark:text-brand-dark-main2 dark:hover:text-brand-dark-secondary2'>
                  <a>{thirdPost?.title}</a>
                </h2>
              </Link>
              <p className='mt-2 md:text-base'>
                {thirdPost?.excerpt &&
                  `${thirdPost?.excerpt[0]?.children[0]?.text.slice(0, 500)}${
                    thirdPost?.excerpt[0]?.children[0]?.text.length > 500
                      ? '...'
                      : ''
                  }`}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
