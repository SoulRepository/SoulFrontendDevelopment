import { useRef } from 'react';

import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@app/components/ui/icons';
import { MainSearchStyles } from '@app/components/search/main-search/mainSearchStyles';
import { useSearch } from '@app/components/search/useSearch';

export const MainSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { getQuery } = useSearch();

  return (
    <InputGroup sx={MainSearchStyles} size="sm">
      <Input
        ref={inputRef}
        pl="20px"
        onKeyDown={e => {
          if (e.key === 'Enter' && inputRef.current?.value) {
            getQuery(inputRef.current.value);
          }
        }}
      />
      <InputRightElement pr="20px" mt="10px">
        <SearchIcon
          color="#515151"
          boxSize="20px"
          cursor="pointer"
          onClick={() => {
            if (inputRef.current?.value) {
              getQuery(inputRef.current.value);
            }
          }}
        />
      </InputRightElement>
    </InputGroup>
  );
};
