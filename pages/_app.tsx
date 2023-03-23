import Header from 'components/Header';
import Navbar from 'components/Navbar';
import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import MainLayout from 'src/layout/Main/index';
import { defaultTheme } from 'src/themes';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';

import { Quicksand } from 'next/font/google';
const quicksand = Quicksand({subsets: ['latin']})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <MainLayout className={quicksand.className}>
          <Header />
          <Navbar />
          <Component {...pageProps} />
      </MainLayout>
      </ThemeProvider>
    </NextIntlProvider>
  )
}

export default MyApp
