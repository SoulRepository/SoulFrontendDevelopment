import { useCallback } from 'react';

import { useWallet } from '@app/api/web3/providers/WalletProvider';

import { DEFAULT_CHAIN_ID, getAddChainParameters } from '@app/api/web3/chains';
import type { txType } from '@app/types/web3Types';
import {useToast} from "@chakra-ui/react";

export const useNetworkConfig = () => {
  const { chainId } = useWallet();
  const toast = useToast();

  const parameters = getAddChainParameters(chainId ?? DEFAULT_CHAIN_ID);
  const scanTransaction = useCallback(
    (hash?: string, type: txType = 'tx') => {
      if (typeof parameters === 'object' && hash) {
        window.open(parameters.blockExplorerUrls + `${type}/` + hash);
      } else {
        toast({
          title: 'Network error',
          description: `You need to switch to Mumbai network`,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-left',
          colorScheme: 'whatsapp',
        });
      }
    },
    [parameters],
  );

  return { scanTransaction };
};
