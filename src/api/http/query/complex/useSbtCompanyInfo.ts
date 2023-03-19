import { useMemo } from 'react';

import { useSbtCompany } from '@app/api/http/query/useSbtCompany';
import { useCompanyBySoulId } from '@app/api/http/query/useCompanyBySoulId';

import type { ISbtCompany } from '@app/types/httpTypes';

export const useSbtCompanyInfo = ({ soulId, sbtId }: { soulId?: string; sbtId?: string }) => {
  const sbtCompany = useSbtCompany({ soulId, sbtId });
  const companyAdditionalInfo = useCompanyBySoulId({ soulId });

  const mainCompany: ISbtCompany = useMemo(
    () => ({
      logo: companyAdditionalInfo.data?.logoImageUrl,
      soulId: companyAdditionalInfo.data?.soulId ?? '',
      name: companyAdditionalInfo.data?.name ?? '',
      address: '',
      verified: false
    }),
    [
      companyAdditionalInfo.data?.logoImageUrl,
      companyAdditionalInfo.data?.name,
      companyAdditionalInfo.data?.soulId,
    ],
  );

  const company = useMemo(
    () => sbtCompany.dataSbtCompany.companies[0],
    [sbtCompany.dataSbtCompany.companies],
  );

  return useMemo(
    () => ({
      isSuccess: sbtCompany.isSuccess && companyAdditionalInfo.isSuccess,
      isLoading: sbtCompany.isLoading || companyAdditionalInfo.isLoading,
      isError: sbtCompany.isError || companyAdditionalInfo.isError,
      data: {
        description: sbtCompany.dataSbtCompany.description,
        digiProofType: sbtCompany.dataSbtCompany.digiProofType,
        companies: [...sbtCompany.dataSbtCompany.companies, mainCompany],
        sbtName: company.name,
        companyName: companyAdditionalInfo.data?.name,
        featuredImage: company.featuredImage,
        logo: company.logo,
      },
    }),
    [
      company.featuredImage,
      company.logo,
      company.name,
      companyAdditionalInfo.data?.name,
      mainCompany,
      sbtCompany.dataSbtCompany.companies,
      sbtCompany.dataSbtCompany.description,
      sbtCompany.dataSbtCompany.digiProofType,
      sbtCompany.isError,
      sbtCompany.isLoading,
      sbtCompany.isSuccess,
    ],
  );
};
