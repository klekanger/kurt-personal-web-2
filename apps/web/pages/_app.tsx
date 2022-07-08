import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Navbar from '../components/UI/navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
