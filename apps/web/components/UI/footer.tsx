import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import companyDarkLogo from '../../public/LEKANGER-logo-darkmode.svg';
import companyLogo from '../../public/LEKANGER-logo.svg';

export default function Footer() {
  const { resolvedTheme } = useTheme();
  return (
    <div className='pt-0 sm:pt-12'>
      <footer id='footer' className='relative z-50 pt-24'>
        <div className='border-t border-b border-gray-200 py-16'>
          <div className='container mx-auto px-4 xl:px-12 2xl:px-4'>
            <div className='lg:flex'>
              <div className='mb-16 flex w-full lg:mb-0 lg:w-1/2'>
                <div className='w-full px-6 lg:w-1/2'>
                  <ul>
                    <li>
                      <Link href='/services'>
                        <a className='transform text-xs  leading-none text-brand-black transition duration-500 hover:text-brand-secondary2 dark:text-brand-white dark:hover:text-gray-400 lg:text-sm'>
                          Tjenester
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='/about-me'>
                        <a className='transform text-xs  leading-none text-brand-black transition duration-500 hover:text-brand-secondary2 dark:text-brand-white dark:hover:text-gray-400 lg:text-sm'>
                          Om meg
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='/blogposts/1'>
                        <a className='transform text-xs  leading-none text-brand-black transition duration-500 hover:text-brand-secondary2 dark:text-brand-white dark:hover:text-gray-400 lg:text-sm '>
                          Blogg
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='/customer-stories'>
                        <a className='transform text-xs  leading-none text-brand-black transition duration-500 hover:text-brand-secondary2 dark:text-brand-white dark:hover:text-gray-400 lg:text-sm '>
                          Kundereferanser
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='w-full px-6 lg:w-1/2'>
                  <ul>
                    <li>
                      <Link href='/services#h7a09c45aab3a'>
                        <a className='transform text-xs  leading-none text-brand-black transition duration-500 hover:text-brand-secondary2 dark:text-brand-white dark:hover:text-gray-400 lg:text-sm '>
                          Nettsider
                        </a>
                      </Link>
                    </li>

                    <li className='mt-6'>
                      <Link href='/services#h8dffc8bf60f0'>
                        <a className='transform text-xs  leading-none text-brand-black transition duration-500 hover:text-brand-secondary2 dark:text-brand-white dark:hover:text-gray-400 lg:text-sm '>
                          Innholdsproduksjon
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='/services#h9fb9783ce276'>
                        <a className='transform text-xs leading-none text-brand-black transition duration-500 hover:text-brand-secondary2 dark:text-brand-white dark:hover:text-gray-400 lg:text-sm '>
                          Oversettelser
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='/services#h501d96744adc'>
                        <a className='transform text-xs leading-none text-brand-black transition duration-500 hover:text-brand-secondary2 dark:text-brand-white dark:hover:text-gray-400 lg:text-sm '>
                          Produktbrosjyrer og whitepapere
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='flex w-full lg:w-1/2'>
                <div className='w-full px-6 lg:w-1/2'>
                  <ul>
                    <li>
                      <Link href='/privacy'>
                        <a className='transform text-xs leading-none transition duration-500 hover:text-brand-secondary2 dark:hover:text-gray-400 lg:text-sm'>
                          Personvern&shy;policy
                        </a>
                      </Link>
                    </li>
                    <li className='mt-6'>
                      <Link href='/contact'>
                        <a className='transform text-xs leading-none transition duration-500 hover:text-brand-secondary2 dark:hover:text-gray-400 lg:text-sm'>
                          Kontaktinformasjon
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='flex w-full flex-col justify-between px-6 lg:w-1/2'>
                  <div className='mb-6 flex items-center space-x-4'>
                    <a
                      href='https://www.linkedin.com/in/lekanger/'
                      className='transform text-2xl transition duration-500 hover:text-brand-secondary2 dark:hover:text-gray-400'
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label='LinkedIn'
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href='https://github.com/klekanger/'
                      className='transform text-2xl transition duration-500 hover:text-brand-secondary2 dark:hover:text-gray-400'
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label='GitHub'
                    >
                      <FaGithub />
                    </a>
                    <a
                      href='https://twitter.com/lekanger'
                      className='transform text-2xl transition duration-500 hover:text-brand-secondary2 dark:hover:text-gray-400'
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label='Twitter'
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href='https://www.facebook.com/lekanger'
                      className='transform text-2xl transition duration-500 hover:text-brand-secondary2 dark:hover:text-gray-400'
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label='Facebook'
                    >
                      <FaFacebook />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center pb-16'>
          <div className='pt-16 text-xs leading-none lg:text-sm'>
            <div
              className='mx-auto w-1/2 pb-4 sm:w-1/4'
              role='img'
              aria-label='Lekanger tekst og kode-logo'
            >
              <a href='#'>
                <Image
                  src={resolvedTheme === 'dark' ? companyDarkLogo : companyLogo}
                  alt='Lekanger tekst og kode'
                />
              </a>
            </div>
            <div className='text-center text-xs'>
              <div>
                Copyright © {new Date().getFullYear()} – Lekanger tekst & kode
              </div>
              <div>Org. nummer: xxxxxxxxx</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
