import { useWallet } from '@app/api/web3/providers/WalletProvider';
import { useQuery } from 'react-query';
import { QueryKeys } from '@app/api/http/queryKeys';
import SoulSearchApi from '@app/api/http/apiServices';

export const useDigiProofs = () => {
  const { account, chainId } = useWallet();

  return useQuery(
    [QueryKeys.useDigiProofs, account, chainId],
    () => SoulSearchApi.getDigiProofs(),
    {
      retry: 2,
      staleTime: 10000,
    },
  );
};
