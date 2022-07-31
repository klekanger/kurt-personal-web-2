import { LayoutProps } from '../../types/interfaces';
import Footer from './footer';

export default function Layout({ children, preview }: LayoutProps) {
  return (
    <>
      <div className='min-h-screen pt-32 lg:pt-48'>
        {preview && (
          <div className='m-auto my-0 w-64 rounded-md bg-brand-secondary2 pt-4 pb-1 text-center text-white'>
            <p>
              <strong>FORHÅNDSVISNING</strong>
            </p>
          </div>
        )}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
