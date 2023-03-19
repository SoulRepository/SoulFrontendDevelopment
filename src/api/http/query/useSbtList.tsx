import { useCallback } from 'react';
import { useWallet } from '@app/api/web3/providers/WalletProvider';
import { useQuery } from 'react-query';
import { QueryKeys } from '@app/api/http/queryKeys';
import SoulSearchApi from '@app/api/http/apiServices';

export const useSbtList = ({
  souldId,
  digiProof,
  limit,
}: {
  souldId: string;
  digiProof: string;
  limit?: number;
}) => {
  const { account, chainId } = useWallet();

  const sbtList = useQuery(
    [QueryKeys.useSbtList, account, chainId, souldId, digiProof],
    () => SoulSearchApi.getSbtList({ souldId, digiProof, limit }),
    {
      retry: 2,
      staleTime: 10000,
      enabled: !!souldId && !!digiProof
    },
  );

  const getDigiProofWith = useCallback(
    () => (sbtList.data ? sbtList.data.map(item => item.companies[0].logo) : []),
    [sbtList.data],
  );

  return { getDigiProofWith, ...sbtList };
};
