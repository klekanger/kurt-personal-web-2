import { PostArticleProps } from '../../types/interfaces';
import HeadingWithMarks from '../content-renderers/heading-with-marks';
import CoverImage from './cover-image';
import DateAndAuthor from './date-and-author';
import Hashtags from './hashtags';
import PostBody from './post-body';
import PostTitle from './post-title';

export default function PostArticle({
  title,
  coverImage,
  content,
  keywords,
  date,
  author,
}: PostArticleProps) {
  return (
    <>
      <PostTitle>
        <HeadingWithMarks heading={title} />
      </PostTitle>
      <CoverImage mainImage={coverImage} />
      <PostBody content={content} />
      <div className='text-gray-500 dark:text-gray-400'>
        <DateAndAuthor date={date} author={author} />
      </div>
      <div className='mt-8'>
        <Hashtags keywords={keywords} />
      </div>
    </>
  );
}
