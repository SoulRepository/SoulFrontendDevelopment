import { useRef } from 'react';
import { useRouter } from 'next/router';

import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@app/components/ui/icons';
import { MainSearchStyles } from '@app/components/search/main-search/mainSearchStyles';

export const MainSearch = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <InputGroup sx={MainSearchStyles} size="sm">
      <Input
        ref={inputRef}
        pl="20px"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            router.push('company/' + inputRef.current?.value);
          }
        }}
      />
      <InputRightElement pr="20px" mt="10px">
        <SearchIcon color="#515151" boxSize="20px" />
      </InputRightElement>
    </InputGroup>
  );
};
