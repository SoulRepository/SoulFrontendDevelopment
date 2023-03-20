import { useMutation, useQueryClient } from 'react-query';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import apiServices from '@app/api/http/apiServices';
import { useCustomToast } from '@app/hooks/useCustomToast';

import { AxiosError } from 'axios';
import { isErrorResponse } from '@app/types/typeGurards';

export const usePatchCompanyBySoulId = () => {
  const { successToast, errorToast } = useCustomToast();
  const queryClient = useQueryClient();

  return useMutation(apiServices.patchCompanyBySoulId, {
    onSuccess: () => {
      successToast();
      queryClient.invalidateQueries();
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
