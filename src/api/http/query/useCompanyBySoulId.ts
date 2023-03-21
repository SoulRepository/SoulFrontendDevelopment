import { useCallback } from 'react';
import { useQuery } from 'react-query';

import { useWallet } from '@app/api/web3/providers/WalletProvider';
import { QueryKeys } from '@app/api/http/queryKeys';
import SoulSearchApi from '@app/api/http/apiServices';

import type { IOption, socialMediaTypes } from '@app/types';

export const useCompanyBySoulId = ({ soulId }: { soulId?: string }) => {
  const { account, chainId } = useWallet();

  const { data, ...rest } = useQuery(
    [QueryKeys.useCompany, account, chainId, soulId],
    () => SoulSearchApi.getCompanyBySoulId(soulId!),
    {
      retry: 2,
      staleTime: 5000,
      enabled: !!soulId,
      refetchOnWindowFocus: true,
    },
  );

  const getActiveCategory = useCallback(
    () =>
      data
        ? data.categories.map<IOption>(({ name, shortName, id }) => ({
            label: `${name} (${shortName})`,
            value: id,
          }))
        : [],
    [data],
  );

  const getSocialLink = useCallback(
    (type: socialMediaTypes) => data?.links.find(item => item.type === type),
    [data],
  );

  return { data, getSocialLink, getActiveCategory, ...rest };
};
