import { useWallet } from '@app/api/web3/providers/WalletProvider';
import { useQuery } from 'react-query';
import { QueryKeys } from '@app/api/http/queryKeys';
import SoulSearchApi from '@app/api/http/apiServices';

import type { socialMediaTypes } from '@app/types';

export const useSocialLinks = (type: socialMediaTypes) => {
  const { account, chainId } = useWallet();

  return useQuery(
    [QueryKeys.useSocialLinks, account, chainId, type],
    () => SoulSearchApi.getSocialLink(type),
    {
      retry: 2,
      staleTime: 10000,
      enabled: type !== 'site' && type !== 'twitter' && !!type,
    },
  );
};
