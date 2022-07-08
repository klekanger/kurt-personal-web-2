import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import companyDarkLogo from '../../public/LEKANGER-logo-darkmode.svg';
import companyLogo from '../../public/LEKANGER-logo.svg';

export default function Footer() {
  const { resolvedTheme } = useTheme();
  return (
    <div className='pt-0 sm:pt-12'>
      <footer id='footer' className='relative z-50 pt-12'>
        <div className='mb-32 flex flex-col items-center justify-center'>
          <div className='text-xs leading-none lg:text-sm'>
            <div
              className='mx-auto w-1/2 pb-4 sm:w-1/3 xl:w-1/4'
              role='img'
              aria-label='Lekanger tekst og kode-logo'
            >
              <a href='#'>
                <Image
                  src={resolvedTheme === 'dark' ? companyDarkLogo : companyLogo}
                  alt='Kurt Lekanger'
                />
              </a>
            </div>
            <div className='text-center text-xs'>
              Copyright © {new Date().getFullYear()} – Kurt Lekanger
            </div>
            <Link href='/privacy'>
              <a className='block pt-2 text-center text-xs hover:text-brand-linkHover dark:hover:text-brand-dark-main1'>
                Om personvern og cookies
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
