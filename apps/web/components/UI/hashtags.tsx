import Link from 'next/link';
import { HashtagsProps } from '../../types/interfaces';

export default function Hashtags({ keywords = [] }: HashtagsProps) {
  if (!Array.isArray(keywords)) {
    console.warn('[hashtags.tsx] Warning: Keywords prop must be an array');
    return null;
  }

  return (
    <div aria-label='Liste med nøkkelord'>
      {keywords.map((keyword, index) => {
        if (typeof keyword !== 'string') {
          console.error(`Keyword at index ${index} is not a string`);
          return null;
        }

        return (
          <Link
            href={`/blog/keyword/${keyword.toLowerCase()}`}
            key={`${index} ${keyword}`}
          >
            <span className='mr-2 mb-2 inline-block rounded-md bg-brand-secondary1/30 px-2 py-1  text-xs text-brand-black transition duration-500 hover:text-brand-secondary2 dark:bg-brand-dark-secondary1-70 dark:text-brand-dark-black hover:dark:text-brand-dark-secondary2 cursor-pointer'>
              #{keyword.toLowerCase()}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
