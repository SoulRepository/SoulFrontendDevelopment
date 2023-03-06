import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { Web3ReactProvider } from '@web3-react/core';
import { Inter } from 'next/font/google';


import { ThemeProvider } from '@app/providers/ThemeProvider';
import { mainTheme } from '@app/styles/theme';

import { MainLayout } from '@app/components/ui/layout';

import '@app/styles/globals.css';
import { connectors } from '@app/api/web3/connectors';

import type { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'] });

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
          <Web3ReactProvider connectors={connectors}>
            <MainLayout className={inter.className}>
              <Component {...pageProps} />
            </MainLayout>
          </Web3ReactProvider>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
