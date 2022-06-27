import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

interface PaginationProps {
  numberOfPages: number;
  startPage: number;
}

export default function Pagination({
  numberOfPages,
  startPage,
}: PaginationProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(startPage);
  const [outOfRange, setOutOfRange] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputFieldValue = Number(e.target.value);
    setCurrentPage(inputFieldValue);

    if (inputFieldValue > numberOfPages - 1 || inputFieldValue < 1) {
      setOutOfRange(true);
      return;
    }

    setOutOfRange(false);
  };

  const handleEnter = () => {
    if (currentPage > numberOfPages - 1) {
      setCurrentPage(numberOfPages - 1);
      setOutOfRange(false);
      return;
    }

    if (currentPage < 1) {
      setCurrentPage(1);
      setOutOfRange(false);
      return;
    }

    router.push(`/blogposts/${currentPage}`);
  };

  return (
    <>
      <div className='max-w-8xl mx-auto h-20'>
        <div
          className='flex flex-row items-center justify-center'
          role='navigation'
          aria-label='Paginering'
        >
          <Link href={`/blogposts/1`} passHref>
            <button
              type='button'
              aria-label='Gå til forrige side'
              disabled={currentPage <= 1}
              className='shadow-brand-main1/70 text-brand-white bg-brand-main1 hover:bg-brand-main1/80 hover:shadow-brand-main1/90 flex h-8  w-8 cursor-pointer items-center justify-center rounded-full border border-transparent align-middle text-lg shadow-lg transition duration-500 ease-in-out disabled:bg-gray-200 disabled:text-gray-400 dark:shadow-none'
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                  router.push(`/blogposts/${currentPage - 1}`);
                }
              }}
            >
              <div className='pr-1'>
                <AiOutlineCaretLeft />
              </div>
            </button>
          </Link>
          <div className='mx-4'>
            <input
              type='number'
              value={currentPage !== 0 ? currentPage : ''}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleEnter();
                }
              }}
              role='searchbox'
              aria-label={`Søk etter side ${currentPage}. Enter for å søke.`}
              placeholder='Side'
              onChange={(e) => handleChange(e)}
              className='border-brand-main1/50 mx-1 w-12 cursor-pointer rounded border py-1 text-center leading-tight transition duration-150 ease-in-out focus:outline-none'
            />

            <span>{` av ${numberOfPages - 1}`}</span>
          </div>
          <Link href={`/blogposts/${numberOfPages - 1}`} passHref>
            <button
              type='button'
              aria-label='Gå til neste side'
              disabled={currentPage >= numberOfPages - 1}
              className='shadow-brand-main1/70 text-brand-white bg-brand-main1 hover:bg-brand-main1/80 hover:shadow-brand-main1/90 flex h-8 w-8  cursor-pointer items-center justify-center rounded-full border border-transparent align-middle text-lg shadow-lg transition duration-500 ease-in-out disabled:bg-gray-200 disabled:text-gray-400 dark:shadow-none'
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < numberOfPages - 1) {
                  setCurrentPage(currentPage + 1);
                  router.push(`/blogposts/${currentPage + 1}`);
                }
              }}
            >
              <div className='pl-1'>
                <AiOutlineCaretRight />
              </div>
            </button>
          </Link>
        </div>

        {outOfRange && (
          <div className='bg-brand-main1 text-brand-white m-auto mt-2 w-max rounded-md px-2 py-1 text-center text-sm'>
            {`Må være mellom 1 og ${numberOfPages - 1}`}
          </div>
        )}
      </div>
    </>
  );
}
