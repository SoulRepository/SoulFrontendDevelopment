import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import useLocalStorageState from 'use-local-storage-state';
import { QueryKeys } from '@app/api/http/queryKeys';
import apiServices from '@app/api/http/apiServices';
import { IMetaData, socialMediaTypes } from '@app/types';

const Auth = () => {
  const { query } = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [metaData] = useLocalStorageState<IMetaData>(QueryKeys.metaData);

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (query.code && query.state && metaData) {
      setIsSuccess(true);
      const { signature, message, soulId, account } = metaData;
      apiServices.postVerificationSocialLink({
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
