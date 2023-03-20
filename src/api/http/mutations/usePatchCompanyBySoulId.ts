import { useMutation, useQueryClient } from 'react-query';
import { IPatchCompanyRequest } from '@app/types/httpTypes';
import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import apiServices from "@app/api/http/apiServices";

export const usePatchCompanyBySoulId = () => {
  const queryClient = useQueryClient();

  // return useMutation(apiServices.patchCompanyBySoulId, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries();
  //   },
  // });

  return useMutation<unknown, unknown, IPatchCompanyRequest>(
    body => axios.post('/api/edit-company', body),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );
};
