import { useWallet } from '@app/api/web3/providers/WalletProvider';
import { useQuery } from 'react-query';
import { QueryKeys } from '@app/api/http/queryKeys';
import SoulSearchApi from '@app/api/http/apiServices';

export const useCompanyBySoulId = ({ soulId }: { soulId?: string }) => {
  const { account, chainId } = useWallet();

  return useQuery(
    [QueryKeys.useCompany, account, chainId, soulId],
    () => SoulSearchApi.getCompanyBySoulId(soulId!),
    {
      retry: 2,
      staleTime: 10000,
      enabled: !!soulId,
    },
  );
};
