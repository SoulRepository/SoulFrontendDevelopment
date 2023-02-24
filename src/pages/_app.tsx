import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from '@app/providers/ThemeProvider';
import { mainTheme } from '@app/styles/theme';

import type { AppProps } from 'next/app';

import '@app/styles/globals.css';

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
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
