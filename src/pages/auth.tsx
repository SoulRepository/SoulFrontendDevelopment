import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import useLocalStorageState from 'use-local-storage-state';
import { QueryKeys } from '@app/api/http/queryKeys';
import { IMetaData, socialMediaTypes } from '@app/types';
import { useVerificationSocialLink } from '@app/api/http/mutations/useVerificationSocialLink';

const Auth = () => {
  const { query } = useRouter();
  const [metaData] = useLocalStorageState<IMetaData>(QueryKeys.metaData);

  const { mutate } = useVerificationSocialLink();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (query.code && query.state && metaData) {
      setIsSuccess(true);
      const { signature, message, soulId, account } = metaData;
      mutate({
        soulId,
        type: String(query.state).substring(1) as socialMediaTypes,
        code: String(query.code),
        accessData: { message, address: account, sign: signature },
      });
    }
  }, [query.code, query.state, metaData]);

  if (!isSuccess) {
    return null;
  }

  return (
    <Flex
      sx={{
        w: '100%',
        h: '50vh',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
        color: '#40dc78',
      }}
    >
      Successful verification.
    </Flex>
  );
};

export default Auth;
