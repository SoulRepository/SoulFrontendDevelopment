import { $soulHttpClient } from '@app/api/http/client';
import axios from 'axios';

import type {
  IAccessData,
  ICategoryResponse,
  ICompanyResponse,
  IDigiProofResponse,
  IImageCredentialResponse,
  IPatchCompanyRequest,
  ISbtCompanyResponse,
} from '@app/types/httpTypes';
import type { socialMediaTypes } from '@app/types';

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
      {
        headers: {
          'x-web3-sign': sign,
          'x-web3-message': message,
          'x-web3-address': address,
        },
      },
    );

    return data;
  },
  getImageCredentials: async ({
    soulId,
    imageType,
    accessData: { message, address, sign },
    isProxy,
  }: {
    soulId: string;
    accessData: IAccessData;
    imageType: Partial<Record<'forBackground' | 'forFeatured' | 'forLogo', boolean>>;
    isProxy?: boolean;
  }) => {
    if (isProxy) {
      try {
        const { data } = await axios.post<IImageCredentialResponse>('/api/get-credentials', {
          soulId,
          imageType,
          accessData: { message, address, sign },
        });

        return data;
      } catch (e) {
        console.log(e);
      }
    }

    try {
      const { data } = await $soulHttpClient.post<IImageCredentialResponse>(
        `/api/companies/${soulId}/image-credentials`,
        imageType,
        {
          headers: { 'x-web3-sign': sign, 'x-web3-message': message, 'x-web3-address': address },
        },
      );

      return data;
    } catch (e) {
      console.log(e);
    }
  },
  getDigiProofs: async () => {
    const { data } = await $soulHttpClient.get<IDigiProofResponse[]>(
      '/api/digi-proofs/digi-proofs',
    );

    return data;
  },
  postVerificationSocialLink: async ({
    soulId,
    code,
    accessData: { message, address, sign },
    type,
  }: {
    type: socialMediaTypes;
    soulId: string;
    code: string;
    accessData: IAccessData;
  }) => {
    try {
      const { data } = await $soulHttpClient.post(
        `/api/social-links`,
        { code, soulId, type },
        {
          headers: { 'x-web3-sign': sign, 'x-web3-message': message, 'x-web3-address': address },
        },
      );

      return data;
    } catch (e) {
      console.log(e);
    }
  },
  getSocialLink: async (type: socialMediaTypes) => {
    const { data } = await $soulHttpClient.get<{ link?: string }>(`/api/social-links/${type}`);

    return data;
  },
  getSbtList: async ({
    digiProof,
    souldId,
    limit,
  }: {
    digiProof?: string;
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

  getNonce: async ({ soulId, address }: { soulId: string; address: string }) => {
    const { data } = await $soulHttpClient.post<{ nonce: string }>(
      `api/companies/${soulId}/nonce`,
      {},
      {
        headers: { 'x-web3-address': address },
      },
    );

    return data;
  },
};

export default SoulSearchApi;
