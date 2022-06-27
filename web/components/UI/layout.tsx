import Footer from './footer';

interface LayoutProps {
  preview: boolean;
  children: React.ReactNode;
}

export default function Layout({ preview, children }: LayoutProps) {
  return (
    <>
      <div className='min-h-screen pt-32 lg:pt-48'>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
