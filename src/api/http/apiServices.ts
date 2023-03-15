import { $soulHttpClient } from '@app/api/http/client';

import type {
  ICompanyResponse,
  IDigiProofResponse,
  ISbtCompanyResponse,
} from '@app/types/httpTypes';

const SoulSearchApi = {
  getCompany: async (addressOrSoulId: string) => {
    const { data } = await $soulHttpClient.get<ICompanyResponse[]>('/api/companies', {
      params: { query: addressOrSoulId },
    });

    return data;
  },
  getCompanyBySoulId: async (soulId: string) => {
    const { data } = await $soulHttpClient.get<ICompanyResponse>(`/api/companies/${soulId}`);

    return data;
  },
  getDigiProofs: async () => {
    const { data } = await $soulHttpClient.get<IDigiProofResponse[]>(
      '/api/digi-proofs/digi-proofs',
    );

    return data;
  },
  getSbtList: async ({ digiProof, souldId }: { digiProof: string; souldId: string }) => {
    const { data } = await $soulHttpClient.get<ISbtCompanyResponse[]>('api/sbt', {
      params: { digiProof, souldId },
    });

    return data;
  },
  getSbtCompany: async ({ soulId, sbtId }: { soulId: string; sbtId: string }) => {
    const { data } = await $soulHttpClient.get<ISbtCompanyResponse>(`api/sbt/${sbtId}`, {
      params: { souldId: soulId },
    });

    return data;
  },
};

export default SoulSearchApi;
