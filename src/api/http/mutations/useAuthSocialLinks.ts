import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

import type { IPatchCompanyRequest } from '@app/types/httpTypes';

export const useAuthSocialLinks = () => {
  const queryClient = useQueryClient();

  // return useMutation(apiServices.patchCompanyBySoulId, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries();
  //   },
  // });

  return useMutation<unknown, unknown, IPatchCompanyRequest>(
    body => axios.post('/api/social-links', body),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );
};
