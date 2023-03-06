import { ReactNode } from 'react';
import { Web3ReactProvider } from '@web3-react/core';

import { connectors } from '@app/api/web3/connectors';
import { WalletProvider } from '@app/api/web3/providers/WalletProvider';

export const Web3Wrapper = ({ children }: { children: ReactNode }) => (
  <Web3ReactProvider connectors={connectors}>
    <WalletProvider>{children}</WalletProvider>
  </Web3ReactProvider>
);
