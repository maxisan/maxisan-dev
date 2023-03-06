import type { AppProps } from 'next/app'
import {NextIntlProvider} from 'next-intl';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'src/themes';
import GlobalStyles from 'styles/GlobalStyles';
import MainLayout from 'components/layout/Main/MainLayout';
import Header from 'components/Header';
import Navbar from 'components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <MainLayout>
          <Header />
          <Navbar />
          <Component {...pageProps} />
      </MainLayout>
      </ThemeProvider>
    </NextIntlProvider>
  )
}

export default MyApp
