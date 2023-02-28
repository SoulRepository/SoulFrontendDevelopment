import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from '@app/providers/ThemeProvider';
import { mainTheme } from '@app/styles/theme';
import { Inter } from 'next/font/google'

import type { AppProps } from 'next/app';

import '@app/styles/globals.css';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: { queries: { refetchOnWindowFocus: false } },
    });
  }

  return (
    <ThemeProvider theme={mainTheme}>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <main className={inter.className}>
            <Component {...pageProps} />
          </main>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
