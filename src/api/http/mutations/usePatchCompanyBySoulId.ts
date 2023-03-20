import { useMutation, useQueryClient } from 'react-query';

import apiServices from '@app/api/http/apiServices';
import { useCustomToast } from '@app/hooks/useCustomToast';

import { isErrorResponse } from '@app/types/typeGurards';
import { QueryKeys } from '@app/api/http/queryKeys';
import { useWallet } from '@app/api/web3/providers/WalletProvider';

import type { AxiosError } from 'axios';

export const usePatchCompanyBySoulId = () => {
  const { account, chainId } = useWallet();
  const { successToast, errorToast } = useCustomToast();
  const queryClient = useQueryClient();

  return useMutation(apiServices.patchCompanyBySoulId, {
    onSuccess: ({ soulId }) => {
      successToast();
      queryClient.invalidateQueries([QueryKeys.useCompany, account, chainId, soulId]);
    },
    onError: e => {
      const error = e as AxiosError;
      const errorData = error.response?.data;

      if (isErrorResponse(errorData)) {
        errorToast({ description: errorData.message.join('\n') });
      }
    },
  });
};
