import { useCallback } from 'react';

import { useWallet } from '@app/api/web3/providers/WalletProvider';
import { useCustomToast } from '@app/hooks/useCustomToast';

import { DEFAULT_CHAIN_ID, getAddChainParameters } from '@app/api/web3/chains';

import type { txType } from '@app/types/web3Types';

export const useNetworkConfig = () => {
  const { chainId } = useWallet();
  const { networkErrorToast } = useCustomToast();

  const parameters = getAddChainParameters(chainId ?? DEFAULT_CHAIN_ID);
  const scanTransaction = useCallback(
    (hash?: string, type: txType = 'tx') => {
      if (typeof parameters === 'object' && hash) {
        window.open(parameters.blockExplorerUrls + `${type}/` + hash);
      } else {
        networkErrorToast();
      }
    },
    [parameters, networkErrorToast],
  );

  return { scanTransaction };
};
