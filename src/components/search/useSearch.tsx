import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useSearchCompany } from '@app/api/http/query/useSearchCompany';
import { useCustomToast } from '@app/hooks/useCustomToast';

export const useSearch = () => {
  const [query, setQuery] = useState('');

  const router = useRouter();
  const company = useSearchCompany(query);
  const { searchToast } = useCustomToast();

  useEffect(() => {
    if (!company.isSuccess) {
      return;
    }

    setQuery('');

    if (company.companyResp) {
      router.push('/company/' + company.companyResp.soulId);

      return;
    }
    searchToast(query);
  }, [company.companyResp, company.isSuccess, query, searchToast]);

  const getQuery = (query: string) => setQuery(query);

  return { getQuery };
};
