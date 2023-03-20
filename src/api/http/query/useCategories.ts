import { useWallet } from '@app/api/web3/providers/WalletProvider';
import { useQuery } from 'react-query';
import { QueryKeys } from '@app/api/http/queryKeys';
import SoulSearchApi from '@app/api/http/apiServices';
import { useCallback } from 'react';
import { IOption } from '@app/types';

export const useCategories = () => {
  const { account, chainId } = useWallet();

  const { data } = useQuery(
    [QueryKeys.useCategories, account, chainId],
    () => SoulSearchApi.getCategories(),
    {
      retry: 2,
      staleTime: 10000,
    },
  );

  const getOptions = useCallback(
    () =>
      data
        ? data.map<IOption>(({ name, shortName, id }) => ({
            label: `${name} (${shortName})`,
            value: id,
          }))
        : [],
    [data],
  );

  return { getOptions };
};
