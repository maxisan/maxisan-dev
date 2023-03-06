import type { AppProps } from 'next/app'
import {NextIntlProvider} from 'next-intl';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'src/themes';
import GlobalStyles from 'styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </NextIntlProvider>
  )
}

export default MyApp
