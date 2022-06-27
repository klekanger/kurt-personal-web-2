import Link from 'next/link';

interface HashtagsProps {
  keywords?: string[];
}

export default function Hashtags({ keywords }: HashtagsProps) {
  if (!keywords) {
    return null;
  }

  return (
    <div aria-label='Liste med nøkkelord'>
      {keywords.map((keyword, index) => (
        <div
          key={index}
          className='bg-brand-secondary1/30 dark:bg-brand-dark-secondary1-70 text-brand-black dark:text-brand-dark-black hover:text-brand-secondary2 hover:dark:text-brand-dark-secondary2 mr-2 inline-block rounded-md px-2 py-1 text-xs transition duration-500'
        >
          <Link href={`/blog/keyword/${keyword.toLowerCase()}`}>
            <a>#{keyword.toLowerCase()}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
