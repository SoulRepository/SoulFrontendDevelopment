import { $soulHttpClient } from '@app/api/http/client';

import type { ICompanyResponse } from '@app/types/httpTypes';

const SoulSearchApi = {
  getCompany: async (addressOrSoulId: string) => {
    const { data } = await $soulHttpClient.get<ICompanyResponse[]>('/api/companies', {
      params: { query: addressOrSoulId },
    });

    return data;
  },
};

export default SoulSearchApi;
