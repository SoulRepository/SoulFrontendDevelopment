import { useWallet } from '@app/api/web3/providers/WalletProvider';
import { useQuery } from 'react-query';
import { QueryKeys } from '@app/api/http/queryKeys';
import SoulSearchApi from '@app/api/http/apiServices';

export const useSbtList = ({ souldId, digiProof }: { souldId: string; digiProof: string }) => {
  const { account, chainId } = useWallet();

  return useQuery(
    [QueryKeys.useSbtList, account, chainId, souldId, digiProof],
    () => SoulSearchApi.getSbtList({ souldId, digiProof }),
    {
      retry: 2,
      staleTime: 10000,
    },
  );
};
