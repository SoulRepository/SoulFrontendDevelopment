import { useWallet } from '@app/api/web3/providers/WalletProvider';
import { useQuery } from 'react-query';
import { QueryKeys } from '@app/api/http/queryKeys';
import SoulSearchApi from '@app/api/http/apiServices';
import type { ISbtCompanyResponse } from '@app/types/httpTypes';

const initData: ISbtCompanyResponse = {
  sbtId: '',
  description: '',
  uri: '',
  digiProofType: '',
  companies: [{ soulId: '', name: '', logo: '', address: '' }],
};

export const useSbtCompany = ({ soulId, sbtId }: { soulId?: string; sbtId?: string }) => {
  const { account, chainId } = useWallet();

  const { data: dataSbtCompany = initData, ...rest } = useQuery(
    [QueryKeys.useSbtCompany, account, chainId, soulId, sbtId],
    () => SoulSearchApi.getSbtCompany({ soulId: soulId!, sbtId: sbtId! }),
    {
      retry: 2,
      staleTime: 5000,
      enabled: !!soulId && !!sbtId,
    },
  );

  return { dataSbtCompany, ...rest };
};
