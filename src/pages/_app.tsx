import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@app/providers/ThemeProvider';
import { mainTheme } from '@app/styles/theme';

import { MainLayout } from '@app/components/ui/layout';

import '@app/styles/globals.css';

import type { AppProps } from 'next/app';
import { ConnectWalletModalProvider } from '@app/providers/ConnectWalletModalProvider';
import { Web3Wrapper } from '@app/api/web3/providers/web3Wrapper';

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
      <Web3Wrapper>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <ConnectWalletModalProvider>
              <MainLayout className={inter.className}>
                <Component {...pageProps} />
              </MainLayout>
            </ConnectWalletModalProvider>
          </Hydrate>
        </QueryClientProvider>
      </Web3Wrapper>
    </ThemeProvider>
  );
}
