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
    <>
      <div className='pt-12 md:pb-12'>
        <div className='justify-center lg:flex'>
          {firstPost && (
            <div className='group relative w-full transform pb-8 transition duration-500  md:pb-0 lg:mr-4 lg:w-8/12 2xl:w-8/12'>
              <Link href={`/blog/${firstPost?.slug?.current}`} passHref>
                <div className='relative aspect-[16/10] h-full w-full overflow-hidden 2xl:aspect-square'>
                  <Image
                    className='cursor-pointer rounded-md object-cover'
                    layout='fill'
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
              <div className='left-0 w-full md:absolute  md:top-2/4 md:bg-brand-black/50 md:px-6 md:py-4 md:shadow-lg md:backdrop-blur-lg lg:top-[10%] lg:w-2/3'>
                <Link href={`/blog/${firstPost?.slug?.current}`} passHref>
                  <h2 className='transform cursor-pointer pb-2 text-2xl text-brand-main2 transition duration-500 hover:text-brand-secondary1 dark:text-brand-dark-main2 dark:hover:text-brand-dark-secondary1 md:font-extrabold md:text-brand-main1 md:dark:text-brand-dark-main1 lg:text-4xl'>
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

          <div className='mt-7 flex w-full flex-col items-start justify-between sm:flex-row lg:ml-4 lg:mt-0 lg:w-4/12 lg:flex-col 2xl:w-4/12'>
            {secondPost && (
              <div className='group transform pb-8 transition duration-500  sm:w-1/2 lg:w-auto'>
                <Link href={`/blog/${secondPost?.slug?.current}`} passHref>
                  <div className='relative aspect-video'>
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
                    <h2 className='cursor-pointer pb-2 text-2xl text-brand-main2 group-hover:text-brand-secondary2 dark:text-brand-dark-main2 dark:group-hover:text-brand-dark-secondary2'>
                      <a>{secondPost?.title}</a>
                    </h2>
                  </Link>
                  <p className='mt-2'>
                    {secondPost?.excerpt &&
                      `${secondPost?.excerpt[0]?.children[0]?.text.slice(
                        0,
                        500
                      )}${
                        secondPost?.excerpt[0]?.children[0]?.text.length > 500
                          ? '...'
                          : ''
                      }`}
                  </p>
                </div>
              </div>
            )}

            {thirdPost && (
              <div className='group mt-6 transform pb-8 transition duration-500 sm:mt-0 sm:ml-6 sm:w-1/2 md:pb-0 lg:mt-6 lg:ml-0 lg:w-auto'>
                <Link href={`/blog/${thirdPost?.slug?.current}`} passHref>
                  <div className='relative aspect-video'>
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
                    <h2 className='cursor-pointer pb-2 text-2xl text-brand-main2 group-hover:text-brand-secondary2 dark:text-brand-dark-main2 dark:group-hover:text-brand-dark-secondary2'>
                      <a>{thirdPost?.title}</a>
                    </h2>
                  </Link>
                  <p className='mt-2'>
                    {thirdPost?.excerpt &&
                      `${thirdPost?.excerpt[0]?.children[0]?.text.slice(
                        0,
                        500
                      )}${
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
      </div>
    </>
  );
}
