import { useMutation, useQueryClient } from 'react-query';

import apiServices from '@app/api/http/apiServices';
import { useCustomToast } from '@app/hooks/useCustomToast';

import type { AxiosError } from 'axios';
import { isErrorResponse } from '@app/types/typeGurards';

export const useVerificationSocialLink = () => {
  const { successToast, errorToast } = useCustomToast();
  const queryClient = useQueryClient();

  return useMutation(apiServices.postVerificationSocialLink, {
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
