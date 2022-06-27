import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Container from './container';

export default function ContactMe() {
  return (
    <div className='dark:bg-brand-dark-main1-10 bg-brand-main1-10  mt-16  py-8 sm:py-16 '>
      <Container>
        <article className='flex flex-col items-center justify-center bg-[url(/images/coffee-transparent.png)] bg-contain bg-right bg-no-repeat text-sm'>
          <h1 className='text-brand-secondary2 dark:text-brand-dark-secondary2 pb-8 text-center font-extrabold '>
            Vil du vite mer?
          </h1>
          <p className='text-center text-lg'>
            Ta kontakt for en uforpliktende prat.
          </p>
          <p className='text-center text-lg font-semibold'>
            Jeg spanderer kaffen!
          </p>

          <div className='text-brand-black mt-8 grid grid-cols-1 gap-8 pb-8 md:grid-cols-3'>
            <section className='dark:highlight-white-30 text-md bg-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 shadow-brand-secondary1-70 group hover:shadow-brand-secondary1-70 aspect-auto transform cursor-pointer rounded-md py-6 px-4 shadow-lg backdrop-blur-md transition duration-500 hover:scale-[var(--scale-min)] dark:shadow-none dark:hover:shadow-none sm:text-sm xl:px-4'>
              <div className='flex justify-center text-4xl'>
                <FaPhone aria-hidden='true' />
              </div>
              <div className='text-center'>
                <h5>Telefon</h5>
                <br />
                <a className='cursor-pointer' href='tel:+4740210140'>
                  +47 - 4021 0140
                </a>
              </div>
            </section>

            <section className='dark:highlight-white-30 text-md bg-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 shadow-brand-secondary1-70 group hover:shadow-brand-secondary1-70 aspect-auto transform cursor-pointer rounded-md py-6 px-4 shadow-lg backdrop-blur-md transition duration-500 hover:scale-[var(--scale-min)] dark:shadow-none dark:hover:shadow-none sm:text-sm xl:px-4'>
              <div className='flex justify-center text-4xl'>
                <FaEnvelope aria-hidden='true' />
              </div>
              <div className='text-center'>
                <h5>Epost</h5>
                <br />
                <a className='cursor-pointer' href='mailto:kurt@lekanger.no'>
                  kurt@lekanger.no
                </a>
              </div>
            </section>

            <section className='dark:highlight-white-30 text-md bg-brand-secondary1-70 dark:bg-brand-dark-secondary1-70 shadow-brand-secondary1-70 group hover:shadow-brand-secondary1-70 aspect-auto transform cursor-pointer rounded-md py-6 px-4 shadow-lg backdrop-blur-md transition duration-500 hover:scale-[var(--scale-min)] dark:shadow-none dark:hover:shadow-none sm:text-sm  xl:px-4'>
              <div className='flex justify-center text-4xl'>
                <FaEnvelope aria-hidden='true' />
              </div>
              <div className='text-center'>
                <h5>Adresse</h5>
                <br />
                <address>
                  <div className='font-semibold'>Lekanger tekst & kode AS</div>
                  <div>Gartner Moens vei 32A</div>
                  <div>1809 ASKIM</div>
                </address>
              </div>
            </section>
          </div>
        </article>
      </Container>
    </div>
  );
}
