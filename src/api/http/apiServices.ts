import { $soulHttpClient } from '@app/api/http/client';

import type {
  ICompanyResponse,
  IDigiProofResponse,
  ISbtCompanyResponse,
} from '@app/types/httpTypes';
import { ICategoryResponse, IPatchCompanyRequest } from '@app/types/httpTypes';

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
  patchCompanyBySoulId: async ({
    soulId,
    companyInfo,
    accessData: { message, address, sign },
  }: IPatchCompanyRequest) => {
    const { data } = await $soulHttpClient.patch<ICompanyResponse>(
      `/api/companies/${soulId}`,
      companyInfo,
      { headers: { 'x-web3-sign': sign, 'x-web3-message': message, 'x-web3-address': address } },
    );

    return data;
  },
  getDigiProofs: async () => {
    const { data } = await $soulHttpClient.get<IDigiProofResponse[]>(
      '/api/digi-proofs/digi-proofs',
    );

    return data;
  },
  getSbtList: async ({
    digiProof,
    souldId,
    limit,
  }: {
    digiProof: string;
    souldId: string;
    limit?: number;
  }) => {
    const { data } = await $soulHttpClient.get<ISbtCompanyResponse[]>('api/sbt', {
      params: { digiProof, souldId, limit },
    });

    return data;
  },
  getSbtCompany: async ({ soulId, sbtId }: { soulId: string; sbtId: string }) => {
    const { data } = await $soulHttpClient.get<ISbtCompanyResponse>(`api/sbt/${sbtId}`, {
      params: { souldId: soulId },
    });

    return data;
  },
  getCategories: async () => {
    const { data } = await $soulHttpClient.get<ICategoryResponse[]>('api/categories');

    return data;
  },
};

export default SoulSearchApi;
