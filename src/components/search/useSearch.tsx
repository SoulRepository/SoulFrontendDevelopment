import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCompany } from '@app/api/http/query/useCompany';
import { useToast } from '@chakra-ui/react';

export const useSearch = () => {
  const [query, setQuery] = useState('');

  const router = useRouter();
  const company = useCompany(query);
  const toast = useToast();

  useEffect(() => {

    if (!company.isSuccess) {
      return;
    }

    setQuery('')

    if (company.companyResp) {
      router.push('/company/' + company.companyResp.soulId);

      return;
    }

    toast({
      title: 'Search',
      description: `Company ${query} not found`,
      status: 'warning',
      duration: 5000,
      isClosable: true,
      position: 'top-left',
      colorScheme: 'whatsapp',
    });
  }, [company.companyResp, company.isSuccess, query, toast]);

  const getQuery = (query: string) => setQuery(query);

  return { getQuery };
};
