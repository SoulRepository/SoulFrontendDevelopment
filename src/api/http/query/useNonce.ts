import { useQuery } from 'react-query';
import { QueryKeys } from '@app/api/http/queryKeys';
import { useWallet } from '@app/api/web3/providers/WalletProvider';

import { useCallback } from 'react';
import SoulSearchApi from '@app/api/http/apiServices';

export const useNonce = ({ soulId }: { soulId?: string }) => {
  const { account, chainId } = useWallet();

  const nonceData = useQuery(
    [QueryKeys.useNonce, soulId, account, chainId],
    () => SoulSearchApi.getNonce({ soulId: soulId!, address: account! }),
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
