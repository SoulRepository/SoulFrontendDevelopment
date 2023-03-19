import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { IPatchCompanyRequest } from '@app/types/httpTypes';

export const usePatchCompanyBySoulId = () => {
  const queryClient = useQueryClient();

  // return useMutation(apiServices.patchCompanyBySoulId, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries();
  //   },
  // });

  return useMutation<unknown, unknown, IPatchCompanyRequest>(
    body => axios.post('/api/edit', body),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );
};
