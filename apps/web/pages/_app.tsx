import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Navbar from '../components/UI/navbar';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useScrollReveal();

  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
