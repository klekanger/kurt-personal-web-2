import Image from 'next/image';
import Link from 'next/link';
import { imageBuilder } from '../../lib/sanity';
import { Post } from '../../types/interfaces';
import HeadingWithMarks from '../content-renderers/heading-with-marks';
import Container from './container';

export default function FeaturedBlogPosts({ content }: { content: Post[] }) {
  return (
    <Container>
      <div className='default-spacing relative px-2 pb-0'>
        <div className='pb-4 md:pb-8'>
          <HeadingWithMarks heading='Siste <mark>blogginnlegg</mark>' />
        </div>
        <div className='grid grid-rows-2 md:grid-cols-2 md:gap-16'>
          {content.map((post) => (
            <div className='relative' key={post._id}>
              <div className='relative aspect-[4/3] w-full rounded-lg'>
                <Link href={`/blog/${post.slug.current}`}>
                  <div>
                    <Image
                      className='cursor-pointer rounded-lg'
                      layout='fill'
                      objectFit='cover'
                      src={
                        imageBuilder(post?.mainImage)
                          .width(800)
                          .height(450)
                          .url() || '#'
                      }
                      alt={post?.mainImage?.alt}
                    />
                  </div>
                </Link>
              </div>

              <div className='left-0 bottom-0 w-full transform rounded-b-lg px-0 py-0 duration-500 hover:text-brand-secondary1 md:absolute md:bg-brand-black/60 md:bg-gradient-to-t md:px-6 md:pb-2  md:text-brand-white md:shadow-lg md:backdrop-blur-lg'>
                <Link href={`/blog/${post.slug.current}`}>
                  <h2 className='mb:pb-0 transform cursor-pointer pb-2 text-xl text-brand-main2 transition duration-500 hover:text-brand-secondary2 dark:text-brand-dark-main2 dark:hover:text-brand-dark-secondary1 md:mt-4 md:text-brand-white md:hover:text-brand-secondary1 md:dark:text-brand-dark-main1 lg:text-2xl'>
                    {post.title.length > 90
                      ? post.title.slice(0, 90).concat('[...]')
                      : post.title}
                  </h2>
                </Link>
                <p className='mt-2 text-brand-black dark:text-brand-dark-white md:hidden md:text-brand-dark-white'>
                  {post.excerpt &&
                    `${post.excerpt[0]?.children[0]?.text.slice(0, 500)}${
                      post.excerpt[0]?.children[0]?.text.length > 500
                        ? '...'
                        : ''
                    }`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-end pr-4'>
        <Link
          href='/blogposts/1'
          className='dark:highlight-white-5  m-2 rounded-md border border-transparent bg-brand-secondary1-70 py-1 px-2 text-sm text-brand-black shadow-md shadow-brand-main1-70 transition duration-500 ease-in-out hover:bg-brand-secondary1/50 hover:text-brand-black/70 hover:shadow-brand-main1/50 dark:bg-brand-dark-secondary1-70 '
        >
          Se alle blogginnlegg ›
        </Link>
      </div>
    </Container>
  );
}
