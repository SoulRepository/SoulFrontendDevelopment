import { useQuery } from 'react-query';
import { QueryKeys } from '@app/api/http/queryKeys';
import { useWallet } from '@app/api/web3/providers/WalletProvider';
import { v4 as uuidv4 } from 'uuid';
import { useCallback } from 'react';

export const useNonce = ({ soulId }: { soulId?: string }) => {
  const { account, chainId } = useWallet();

  const nonceData = useQuery(
    [QueryKeys.useNonce, account, chainId],
    () => {
      const nonce = uuidv4();

      return new Promise<{ nonce: string }>(resolve => setTimeout(() => resolve({ nonce }), 500));
      // return SoulSearchApi.getNonce({ soulId: soulId!, address: account! })
    },
    {
      retry: 2,
      staleTime: Infinity,
      enabled: !!account && !!soulId,
    },
  );

  const getNonce = useCallback(
    () => (nonceData.data ? nonceData.data.nonce : void 0),
    [nonceData.data],
  );

  return {
    getNonce,
  };
};
