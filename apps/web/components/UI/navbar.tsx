import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineEnter } from 'react-icons/ai';
import { FaSpinner } from 'react-icons/fa';
import {
  RiCloseLine,
  RiMenu3Line,
  RiMoonFill,
  RiSearchLine,
  RiSunFill,
} from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';
import companyDarkLogo from '../../public/LEKANGER-logo-darkmode.svg';
import companyLogo from '../../public/LEKANGER-logo.svg';
import SearchResultsBox from './search-results-box';

// Navbar menu items
const navigation = [
  { name: 'Tjenester', href: '/services' },
  { name: 'Om meg', href: '/about-me' },
  { name: 'Blogg', href: '/blogposts/1' },
  { name: 'Kontakt', href: '/contact' },
];

// Mappings between pages and webContentType
// Necessary for searching through both articles and pages
const webContentTypeMappings: { [key: string]: string } = {
  service: '/services',
  'about-me': '/about-me',
  blog: '/blog',
  'contact-me': '/contact',
};

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loadingSearchResults, setLoadingSearchResults] = useState(false);
  const [searchInput, setSearchInput] = useState({
    searchValue: '',
    showSearch: false,
  });
  const { setTheme, resolvedTheme } = useTheme();

  // Minimize menu if scrolled more than x % of the screen height
  const handleScroll = () => {
    const yPos: number = window.scrollY || 0;
    const scrHeight: number = window.innerHeight || 900;
    yPos > (scrHeight / 100) * 15 ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    setMounted(true);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Show or hide hamburger menu on small screens
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle search request and call API
  const handleSearch = async () => {
    setLoadingSearchResults(true);
    try {
      const api = fetch(`/api/searchContent?q=${searchInput.searchValue}`);
      const data = await api.then((res) => res.json());

      if (data.result !== '' && searchInput.searchValue !== '') {
        setSearchInput({
          ...searchInput,
          showSearch: false,
        });

        const results = data.result.map((result: any) => {
          if (result?.slug?.current !== undefined) {
            return {
              _id: result._id,
              title: result.title,
              href: `/blog/${result.slug.current}`,
              webContentType: 'blogpost',
            };
          } else {
            return {
              _id: result._id,
              title: result.title,
              href: `${webContentTypeMappings[result.webContentType]}`,
              webContentType: result?.webContentType,
            };
          }
        });

        setSearchResults(results);
        setLoadingSearchResults(false);
        setIsSearchResultsOpen(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const darkModeButton =
    resolvedTheme === 'dark' ? (
      <RiMoonFill
        className={`transform transition duration-200 hover:scale-110 focus:outline-none dark:text-brand-dark-white ${
          isMenuOpen ? 'mt-4 text-4xl' : 'text-2xl'
        }`}
        aria-label='Mørk modus. Klikk for å endre til lys.'
        tabIndex={0}
        onClick={() => setTheme('light')}
      />
    ) : (
      <RiSunFill
        className={`dark:text-brandDark-white transform transition duration-200 hover:scale-110 focus:outline-none ${
          isMenuOpen ? 'mt-4 text-4xl' : 'text-2xl'
        }`}
        aria-label='Lys modus. Klikk for å endre til mørk.'
        tabIndex={0}
        onClick={() => setTheme('dark')}
      />
    );

  return (
    <>
      <header
        className={`navbar fixed ${
          isScrolled
            ? 'navbar-scrolled dark:bg-brand-dark-background/80'
            : 'dark:bg-brand-dark-background'
        } top-0 z-20 bg-white/80 pt-2 backdrop-blur-md`}
      >
        <div className='mx-auto flex flex-row items-center justify-between px-4 md:items-end md:px-7 lg:container'>
          <Link href='/' passHref>
            <a className='logo w-1/2 md:w-4/12 lg:w-3/12'>
              <Image
                className='cursor-pointer'
                src={resolvedTheme === 'light' ? companyLogo : companyDarkLogo}
                alt='Lekanger tekst og kode'
              />
            </a>
          </Link>

          <div className='md:hidden' onClick={handleMenuClick}>
            {isMenuOpen ? (
              <RiCloseLine className='hamburger cursor-pointer text-4xl transition hover:scale-125' />
            ) : (
              <RiMenu3Line className='hamburger cursor-pointer text-4xl transition hover:scale-125' />
            )}
          </div>
          <nav className='hidden sm:ml-6 md:block'>
            <div className='nav-items mt-4 flex space-x-6 pb-1 align-bottom text-sm font-semibold sm:text-base md:mt-0 md:self-end lg:text-lg'>
              {navigation.map((item) => (
                <Link passHref href={item.href} key={item.name}>
                  <a className='link-underline dark:text-brandDark-white transform transition  duration-500 hover:text-brand-main2 dark:hover:text-gray-400'>
                    {item.name}
                  </a>
                </Link>
              ))}
              <div
                tabIndex={0}
                onClick={() =>
                  setSearchInput({
                    ...searchInput,
                    showSearch: !searchInput.showSearch,
                  })
                }
              >
                <RiSearchLine
                  className='transform text-2xl transition duration-200 hover:scale-110'
                  role='search'
                  aria-label='Klikk for å søke på nettstedet'
                />
              </div>
              {mounted ? (
                darkModeButton
              ) : (
                <FaSpinner
                  className={`dark:text-brandDark-white animate-spin text-2xl`}
                />
              )}
            </div>
          </nav>
        </div>
        {searchInput.showSearch && (
          <div
            className='container mx-auto flex justify-end px-4 pb-2 md:px-7'
            role='search'
          >
            <OutsideClickHandler
              onOutsideClick={() =>
                setSearchInput({ searchValue: '', showSearch: false })
              }
            >
              <div className='relative w-72'>
                {loadingSearchResults ? (
                  <FaSpinner
                    className={`dark:text-brandDark-white animate-spin text-2xl`}
                  />
                ) : (
                  <>
                    <input
                      className='w-full rounded-md border border-brand-main2/30 p-2 focus:border-brand-main2 focus:outline-none'
                      type='text'
                      placeholder='Søk (enter for å søke)'
                      value={searchInput.searchValue}
                      onChange={(e) => {
                        setSearchInput({
                          ...searchInput,
                          searchValue: e.target.value,
                        });
                      }}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSearch();
                        }
                      }}
                      autoFocus
                      role='searchbox'
                    />
                    <AiOutlineEnter
                      className='absolute right-2 top-2 text-2xl text-gray-400'
                      aria-hidden
                      onClick={handleSearch}
                    />
                  </>
                )}
              </div>
            </OutsideClickHandler>
          </div>
        )}
        <OutsideClickHandler onOutsideClick={() => setIsMenuOpen(false)}>
          <div
            className={`absolute right-4 top-0 left-0 z-30 mt-0 h-screen w-11/12 transform rounded-tr-md bg-brand-main2/95 shadow-lg shadow-black backdrop-blur-xl transition duration-200 ease-in-out sm:w-3/5 md:hidden md:translate-x-0 ${
              isMenuOpen
                ? 'origin-bottom-left -translate-x-36 rotate-6 '
                : '-translate-x-full'
            }`}
          >
            <div className='flex h-full flex-col items-center justify-center space-y-12 overflow-hidden px-2 pl-24 pb-32 text-xl font-bold sm:text-2xl'>
              {navigation.map((item) => (
                <Link passHref href={item.href} key={item.name}>
                  <span className='text-brand-grey hover:text-brand-main1 '>
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className='text-center text-6xl text-brand-white'>
                <div
                  tabIndex={0}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setSearchInput({
                      ...searchInput,
                      showSearch: !searchInput.showSearch,
                    });
                  }}
                >
                  <RiSearchLine
                    className='transform text-4xl transition duration-200 hover:scale-110'
                    role='search'
                    aria-label='Klikk for å søke på nettstedet'
                  />
                </div>

                {darkModeButton}
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      </header>

      {isSearchResultsOpen && (
        <OutsideClickHandler
          onOutsideClick={() => setIsSearchResultsOpen(false)}
        >
          <div
            onClick={() => {
              setIsSearchResultsOpen(false);
            }}
          >
            <SearchResultsBox searchResults={searchResults} />
          </div>
        </OutsideClickHandler>
      )}
    </>
  );
}

// TODO
// Search should timeout after a certain amount of time
// Show results box straight away if search is done - with spinner inside
// Show "not found" if no results
// Fix max height on search box on smaller screens
// ...
