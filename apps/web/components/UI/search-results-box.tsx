import Link from 'next/link';
import { MdArticle, MdContactPage } from 'react-icons/md';
import useScrollLock from '../../hooks/useScrollLock';

export default function SearchResultsBox({ searchResults }: any) {
  useScrollLock();

  return (
    <>
      <div className='absolute right-0 top-12 bottom-0 left-0 z-10 py-12 backdrop-blur-3xl transition duration-150 ease-in-out md:top-32'>
        <div className='relative mx-auto w-11/12 rounded border border-gray-400 bg-white py-8 px-2 shadow-md dark:border-gray-700 dark:bg-gray-800 md:px-8 xl:w-1/2'>
          <h1 className='mb-4 text-left text-brand-main2 dark:text-brand-dark-main2'>
            Søkeresultater
          </h1>
          <div className='max-h-[22rem] overflow-y-auto md:max-h-full '>
            {searchResults.map((result: any) => (
              <Link href={`${result?.href}`} passHref key={result._id}>
                <a className='md:text-md block transform transition duration-100 hover:text-brand-main2 hover:dark:text-brand-dark-main2 sm:text-base'>
                  {result.webContentType === 'blogpost' ? (
                    <>
                      <MdArticle className='mr-2 inline' />{' '}
                      {result.title
                        .replace(/<mark>/g, '')
                        .replace(/<\/mark>/g, '')}
                    </>
                  ) : (
                    <>
                      <MdContactPage className='mr-2 inline' />{' '}
                      {result.title
                        .replace(/<mark>/g, '')
                        .replace(/<\/mark>/g, '')}
                    </>
                  )}
                </a>
              </Link>
            ))}
          </div>
          <div className='pt-8 text-brand-secondary2  dark:text-brand-dark-secondary2 '>
            <Link href='/blogposts/1'>
              <a className='read-more'>Gå til blogg-arkiv »</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}