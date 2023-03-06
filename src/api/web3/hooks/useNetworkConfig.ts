import { useCallback } from 'react';

import { useWallet } from '@app/api/web3/providers/WalletProvider';

import { DEFAULT_CHAIN_ID, getAddChainParameters } from '@app/api/web3/chains';

export const useNetworkConfig = () => {
  const { chainId } = useWallet();

  const parameters = getAddChainParameters(chainId ?? DEFAULT_CHAIN_ID);
  const scanTransaction = useCallback(
    (hash?: string) => {
      if (typeof parameters === 'object' && hash) {
        window.open(parameters.blockExplorerUrls + 'tx/' + hash);
      }
    },
    [parameters],
  );

  return { scanTransaction };
};
