import { initializeConnector } from '@web3-react/core';
import { WalletConnect } from '@web3-react/walletconnect';
import { DEFAULT_CHAIN_ID, URLS } from '@app/api/web3/chains';

export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
  actions =>
    new WalletConnect({
      actions,
      defaultChainId: DEFAULT_CHAIN_ID,
      options: {
        rpc: URLS,
      },
    }),
);

