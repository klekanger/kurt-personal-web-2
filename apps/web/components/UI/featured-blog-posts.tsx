import Image from 'next/image';
import Link from 'next/link';
import { imageBuilder } from '../../lib/sanity';
import { Post } from '../../types/interfaces';
import HeadingWithMarks from '../content-renderers/heading-with-marks';
import Container from './container';

export default function FeaturedBlogPosts({ content }: { content: Post[] }) {
  return (
    <Container>
      <div className='default-spacing relative pb-0'>
        <div className='pb-4 md:pb-8'>
          <HeadingWithMarks heading='Siste <mark>blogginnlegg</mark>' />
        </div>
        <div className='grid grid-rows-2 md:grid-cols-2 md:gap-16 4xl:grid-cols-4'>
          {content.map((post) => (
            <div className='relative' key={post._id}>
              <div className='relative aspect-[4/3] w-full rounded-lg shadow-lg shadow-brand-secondary1 dark:shadow-none'>
                <Image
                  className='rounded-lg'
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

              <div className='left-0 m-auto w-full px-0'>
                <div className='transform rounded-b-lg py-6 duration-500 hover:text-brand-secondary1 dark:bg-brand-dark-main2/60 md:absolute md:bottom-0 md:bg-brand-black/50 md:bg-gradient-to-t md:px-6 md:text-brand-white md:shadow-lg md:backdrop-blur-lg'>
                  <Link href={`/blog/${post.slug.current}`}>
                    <a>
                      <h2 className='mt-0  md:text-left lg:text-2xl'>
                        {post.title.length > 90
                          ? post.title.slice(0, 90).concat('[...]')
                          : post.title}
                      </h2>
                    </a>
                  </Link>
                  <p className='mt-2 md:hidden md:text-brand-dark-white'>
                    {post.excerpt &&
                      `${post.excerpt[0]?.children[0]?.text.slice(0, 500)}${
                        post.excerpt[0]?.children[0]?.text.length > 500
                          ? '...'
                          : ''
                      }`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-end pr-4'>
        <Link href='http://localhost:3000/blogposts/1'>
          <a className='dark:highlight-white-5  m-2 rounded-md border border-transparent bg-brand-secondary1-70 py-1 px-2 text-sm text-brand-black shadow-md shadow-brand-main1-70 transition duration-500 ease-in-out hover:bg-brand-secondary1/50 hover:text-brand-black/70 hover:shadow-brand-main1/50 dark:bg-brand-dark-secondary1-70 '>
            Se alle blogginnlegg ›
          </a>
        </Link>
      </div>
    </Container>
  );
}
