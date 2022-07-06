import Link from 'next/link';
import { HashtagsProps } from '../../types/interfaces';

export default function Hashtags({ keywords }: HashtagsProps) {
  if (!keywords) {
    return null;
  }

  return (
    <div aria-label='Liste med nøkkelord'>
      {keywords.map((keyword, index) => (
        <div
          key={index}
          className='mr-2 inline-block rounded-md bg-brand-secondary1/30 px-2 py-1 text-xs text-brand-black transition duration-500 hover:text-brand-secondary2 dark:bg-brand-dark-secondary1-70 dark:text-brand-dark-black hover:dark:text-brand-dark-secondary2'
        >
          <Link href={`/blog/keyword/${keyword.toLowerCase()}`}>
            <a>#{keyword.toLowerCase()}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
