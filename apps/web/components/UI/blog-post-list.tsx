import Image from 'next/image';
import Link from 'next/link';
import { BLURDATA } from '../../lib/blurdata';
import { formatDate } from '../../lib/format-date';
import { imageBuilder } from '../../lib/sanity';
import { Post } from '../../types/interfaces';
import DateAndAuthor from './date-and-author';
import Hashtags from './hashtags';

export default function BlogPostList({ posts }: { posts: Post[] }) {
  return (
    <div className='mt-8 space-y-8'>
      {posts.map((post) => {
        const dateToShow = formatDate({
          created: post?._createdAt,
          updated: post?._updatedAt,
        });

        return (
          <div key={post._id}>
            <div className=' grid-cols-12 gap-2 pb-2 md:grid md:pb-8 lg:gap-8'>
              <Link
                href={`/blog/${post?.slug?.current}`}
                passHref
                legacyBehavior
              >
                <div className=' self-top order-last cursor-pointer rounded-md md:col-span-5 lg:col-span-6'>
                  <Image
                    className='rounded-md'
                    width={1600}
                    height={1000}
                    layout='responsive'
                    src={
                      imageBuilder(post?.mainImage)
                        .width(1600)
                        .height(1000)
                        .url() || '#'
                    }
                    alt={post?.mainImage?.alt}
                    placeholder='blur'
                    blurDataURL={BLURDATA}
                  />
                </div>
              </Link>
              <div className='md:col-span-7 md:pr-8 lg:col-span-6'>
                <Link
                  href={`/blog/${post?.slug?.current}`}
                  passHref
                  legacyBehavior
                >
                  <h2
                    className='m4-4 transform cursor-pointer pt-0 pb-2 text-2xl text-brand-main2 transition duration-500 hover:text-brand-secondary2 dark:text-brand-dark-main2 dark:hover:text-brand-dark-secondary2 md:mt-0 '
                    tabIndex={0}
                  >
                    {post?.title}
                  </h2>
                </Link>
                <p className='mt-2'>
                  {post?.excerpt &&
                    `${post?.excerpt[0]?.children[0]?.text.slice(0, 500)}${
                      post?.excerpt[0]?.children[0]?.text.length > 500
                        ? '...'
                        : ''
                    }`}
                  <Link href={`/blog/${post?.slug?.current}`}>
                    <span className='cursor-pointer hidden text-brand-secondary2 no-underline dark:text-brand-dark-secondary2 md:block'>
                      Les&nbsp;mer »
                    </span>
                  </Link>
                </p>
                <div className='hidden space-y-2 text-gray-500 dark:text-gray-400 lg:block'>
                  <DateAndAuthor
                    date={dateToShow}
                    author={post?.author?.name || null}
                  />
                  {/* Show only 5 first keywords */}
                  <Hashtags keywords={post?.keywords?.slice(0, 5)} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
