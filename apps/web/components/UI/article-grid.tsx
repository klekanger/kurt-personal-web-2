import Image from 'next/image';
import Link from 'next/link';
import { BLURDATA } from '../../lib/blurdata';
import { imageBuilder } from '../../lib/sanity';
import { Post } from '../../types/interfaces';

export default function ArticleGrid({ posts }: { posts: Post[] }) {
  return (
    <>
      <div className='space-y-8 py-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3'>
          {posts.map((post) => (
            <div
              className='group transform transition duration-500'
              key={post._id}
            >
              <Link href={`/blog/${post?.slug?.current}`} passHref>
                <div className='relative aspect-[16/10]'>
                  <Image
                    className='cursor-pointer rounded-md object-cover'
                    layout='fill'
                    src={
                      imageBuilder(post?.mainImage)
                        .width(800)
                        .height(450)
                        .url() || '#'
                    }
                    alt={post?.mainImage?.alt}
                    placeholder='blur'
                    blurDataURL={BLURDATA}
                  />
                </div>
              </Link>

              <Link href={`/blog/${post?.slug?.current}`} passHref>
                <h2 className='cursor-pointer pb-2 text-2xl text-brand-main2 group-hover:text-brand-secondary2'>
                  {post?.title}
                </h2>
              </Link>
              <p>
                {post?.excerpt &&
                  `${post?.excerpt[0]?.children[0]?.text.slice(0, 200)}${
                    post?.excerpt[0]?.children[0]?.text.length > 200
                      ? '...'
                      : ''
                  }`}
              </p>
            </div>
          ))}
        </div>
        <div className='text-md mt-4 font-semibold text-brand-main2 hover:text-brand-secondary2'>
          <Link href='/blogposts/1' passHref>
            <a>Les flere artikler »</a>
          </Link>
        </div>
      </div>
    </>
  );
}
