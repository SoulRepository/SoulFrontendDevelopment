import { useQuery } from 'react-query';

import { QueryKeys } from '@app/api/http/queryKeys';
import { useWallet } from '@app/api/web3/providers/WalletProvider';
import SoulSearchApi from '@app/api/http/apiServices';

export const useCompany = (addressOrSoulId: string) => {
  const { account, chainId } = useWallet();

  const { data: companyResp, ...companyQuery } = useQuery(
    [QueryKeys.useCompany, account, chainId, addressOrSoulId],
    () => SoulSearchApi.getCompany(addressOrSoulId),
    {
      retry: 2,
      enabled: !!addressOrSoulId,
      select: (data) => data.length > 0 ? data[0] : null
    },
  );

  return {
    companyResp,
    ...companyQuery,
  };
};
