import Image from 'next/image';
import Link from 'next/link';
import { imageBuilder } from '../../lib/sanity';
import { Post } from '../../types/interfaces';

export default function BlogTopSection({ posts }: { posts: Post[] }) {
  if (!posts) {
    return null;
  }

  const firstPost = posts[0] || null;

  return (
    <div className='mt-8 md:mt-16 md:pb-8'>
      {firstPost && (
        <div className='relative pb-2 md:pb-0'>
          <Link href={`/blog/${firstPost?.slug?.current}`} passHref>
            <div className='relative aspect-[16/10]'>
              <Image
                className='rounded-md'
                layout='fill'
                objectFit='cover'
                src={
                  imageBuilder(firstPost?.mainImage)
                    .width(3200)
                    .height(1800)
                    .url() || '#'
                }
                alt={firstPost?.mainImage?.alt}
                priority={true}
              />
            </div>
          </Link>
          <div className='relative md:absolute md:bottom-0 md:left-0 md:bg-brand-black/50 md:px-6 md:py-4 md:shadow-lg md:backdrop-blur-lg '>
            <h2 className='transform cursor-pointer pb-2 text-2xl text-brand-main2 transition duration-500 hover:text-brand-secondary2 dark:text-brand-dark-main2  dark:hover:text-brand-dark-secondary1 md:font-extrabold md:text-brand-white md:hover:text-brand-secondary1 md:dark:text-brand-dark-main1 lg:text-4xl'>
              <Link href={`/blog/${firstPost?.slug?.current}`}>
                {firstPost?.title}
              </Link>
            </h2>
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
  );
}
