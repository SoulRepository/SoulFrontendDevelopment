import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import useLocalStorageState from "use-local-storage-state";
import {QueryKeys} from "@app/api/http/queryKeys";

const Auth = () => {
  const { query } = useRouter();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [metaData] = useLocalStorageState<{ message: string; signature: string }>(
    QueryKeys.metaData,
  );

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (query.code && query.state) {
      console.log(query.code);
      console.log(query.state);
      setIsSuccess(true);
    }
  }, [query.code, query.state]);

  if(!isSuccess) {
    return null
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
