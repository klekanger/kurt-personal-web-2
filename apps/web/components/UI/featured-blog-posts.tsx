import Container from './container';
import Link from 'next/link';
import { Post } from '../../types/interfaces';
import Image from 'next/image';
import { imageBuilder } from '../../lib/sanity';
import HeadingWithMarks from '../content-renderers/heading-with-marks';
import { BLURDATA } from '../../lib/blurdata';

export default function FeaturedBlogPosts({ content }: { content: Post[] }) {
  return (
    <Container>
      <div className='default-spacing relative'>
        <div className='pb-4 md:pb-8'>
          <HeadingWithMarks heading='Siste <mark>blogginnlegg</mark>' />
        </div>
        <div className='grid-row grid gap-16 lg:grid-cols-2 4xl:grid-cols-4'>
          {content.map((post) => (
            <div
              key={post._id}
              className='relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg shadow-brand-secondary1 dark:shadow-none'
            >
              <Image
                className='rounded-lg'
                layout='fill'
                objectFit='cover'
                src={
                  imageBuilder(post?.mainImage).width(800).height(450).url() ||
                  '#'
                }
                alt={post?.mainImage?.alt}
                priority={true}
                placeholder='blur'
                blurDataURL={BLURDATA}
              />

              <div className='absolute left-0 bottom-0 m-auto w-full transform rounded-b-lg bg-brand-black/50 bg-gradient-to-t py-6 text-brand-white backdrop-blur-lg duration-500 hover:text-brand-secondary1 dark:bg-brand-dark-main2/60 md:px-6 md:shadow-lg'>
                <Link href={`/blog/${post.slug.current}`}>
                  <a>
                    <h2 className='mt-0 px-4 md:px-0 md:text-left lg:text-2xl'>
                      {post.title.length > 90
                        ? post.title.slice(0, 90).concat('[...]')
                        : post.title}
                    </h2>
                  </a>
                </Link>
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
