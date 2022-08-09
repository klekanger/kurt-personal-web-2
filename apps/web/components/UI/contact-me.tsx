import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import Container from './container';

export default function ContactMe() {
  return (
    <div className='default-spacing bg-brand-main1-10 dark:bg-brand-dark-main1-10'>
      <Container>
        <article className='my-8 flex flex-col items-center justify-center bg-[url(/images/coffee-transparent.webp)] bg-contain bg-right bg-no-repeat text-sm md:my-16'>
          <h1 className='pb-8 text-center font-extrabold text-brand-secondary2 dark:text-brand-dark-secondary2 '>
            Her finner du meg
          </h1>
          <p className='text-center text-lg'>
            ...eller stikk innom for en kaffe!
          </p>

          <div className='mt-8 grid grid-cols-1 gap-8 pb-8 text-brand-black md:grid-cols-2 lg:grid-cols-3'>
            <section className='hover:wiggle dark:highlight-white-30 text-md group aspect-auto transform cursor-pointer rounded-md bg-brand-secondary1-70 py-6 px-4 shadow-lg shadow-brand-secondary1-70 backdrop-blur-md transition duration-500 hover:shadow-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 dark:shadow-none dark:hover:shadow-none sm:text-sm xl:px-4'>
              <a className='cursor-pointer' href='tel:+4740210140'>
                <div className='flex justify-center text-4xl'>
                  <FaPhone aria-hidden='true' />
                </div>
                <div className='text-center'>
                  <h2 className='text-lg'>Telefon</h2>
                  <br />
                  +47 - 4021 0140
                </div>
              </a>
            </section>

            <section className='hover:wiggle dark:highlight-white-30 text-md group aspect-auto transform cursor-pointer rounded-md bg-brand-secondary1-70 py-6 px-4 shadow-lg shadow-brand-secondary1-70 backdrop-blur-md transition duration-500 hover:shadow-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 dark:shadow-none dark:hover:shadow-none sm:text-sm xl:px-4'>
              <a className='cursor-pointer' href='mailto:kurt@lekanger.no'>
                <div className='flex justify-center text-4xl'>
                  <FaEnvelope aria-hidden='true' />
                </div>
                <div className='text-center'>
                  <h2 className='text-lg'>Epost</h2>
                  <br />
                  kurt@lekanger.no
                </div>
              </a>
            </section>

            <section className='hover:wiggle dark:highlight-white-30 text-md group aspect-auto transform cursor-pointer rounded-md bg-brand-secondary1-70 py-6 px-4 shadow-lg shadow-brand-secondary1-70 backdrop-blur-md transition duration-500 hover:shadow-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 dark:shadow-none dark:hover:shadow-none sm:text-sm  xl:px-4'>
              <a className='cursor-pointer' href='https://github.com/klekanger'>
                <div className='flex justify-center text-4xl'>
                  <FaGithub aria-hidden='true' />
                </div>
                <div className='break-words text-center'>
                  <h2 className='text-lg'>Github</h2>
                  <br />
                  github.com/klekanger
                </div>
              </a>
            </section>
            <section className='hover:wiggle dark:highlight-white-30 text-md group aspect-auto transform cursor-pointer rounded-md bg-brand-secondary1-70 py-6 px-4 shadow-lg shadow-brand-secondary1-70 backdrop-blur-md transition duration-500 hover:shadow-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 dark:shadow-none dark:hover:shadow-none sm:text-sm  xl:px-4'>
              <a
                className='cursor-pointer'
                href='https://www.linkedin.com/in/lekanger/'
              >
                <div className='flex justify-center text-4xl'>
                  <FaLinkedin aria-hidden='true' />
                </div>
                <div className='break-words text-center'>
                  <h2 className='text-lg'>LinkedIn</h2>
                  <br />
                  linkedin.com/in/lekanger/
                </div>
              </a>
            </section>
            <section className='hover:wiggle dark:highlight-white-30 text-md group aspect-auto transform cursor-pointer rounded-md bg-brand-secondary1-70 py-6 px-4 shadow-lg shadow-brand-secondary1-70 backdrop-blur-md transition duration-500 hover:shadow-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 dark:shadow-none dark:hover:shadow-none sm:text-sm  xl:px-4'>
              <a className='cursor-pointer' href='https://twitter.com/lekanger'>
                <div className='flex justify-center text-4xl'>
                  <FaTwitter aria-hidden='true' />
                </div>
                <div className='break-words text-center'>
                  <h2 className='text-lg'>Twitter</h2>
                  <br />
                  twitter.com/lekanger
                </div>
              </a>
            </section>
            <section className='hover:wiggle dark:highlight-white-30 text-md group aspect-auto transform cursor-pointer rounded-md bg-brand-secondary1-70 py-6 px-4 shadow-lg shadow-brand-secondary1-70 backdrop-blur-md transition duration-500 hover:shadow-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 dark:shadow-none dark:hover:shadow-none sm:text-sm  xl:px-4'>
              <a
                className='cursor-pointer'
                href='https://www.facebook.com/lekanger'
              >
                <div className='flex justify-center text-4xl'>
                  <FaFacebook aria-hidden='true' />
                </div>
                <div className='break-words text-center'>
                  <h2 className='text-lg'>Facebook</h2>
                  <br />
                  facebook.com/lekanger
                </div>
              </a>
            </section>
          </div>
        </article>
      </Container>
    </div>
  );
}
