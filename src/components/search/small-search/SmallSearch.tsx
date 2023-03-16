import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FC, useRef } from 'react';

import { SearchIcon } from '@app/components/ui/icons';

import { smallSearchStyles } from '@app/components/search/small-search/smallSearchStyles';
import { useSearch } from '@app/components/search/useSearch';

interface SmallSearchProps {
  rgbaBg?: boolean;
}

export const SmallSearch: FC<SmallSearchProps> = ({ rgbaBg }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { getQuery } = useSearch();

  return (
    <InputGroup sx={smallSearchStyles(rgbaBg)}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="white" />
      </InputLeftElement>
      <Input
        ref={inputRef}
        className="search-input"
        type="tel"
        placeholder="Search here"
        onKeyDown={e => {
          if (e.key === 'Enter' && inputRef.current?.value) {
            const value = inputRef.current.value
            getQuery(value);

            inputRef.current.blur()
            inputRef.current.value = ''
          }
        }}
      />
    </InputGroup>
  );
};
