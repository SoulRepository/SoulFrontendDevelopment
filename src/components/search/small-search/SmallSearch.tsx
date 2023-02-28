import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import { SearchIcon } from '@app/components/ui/icons';

import { smallSearchStyles } from '@app/components/search/small-search/smallSearchStyles';

export const SmallSearch = () => (
  <InputGroup sx={smallSearchStyles}>
    <InputLeftElement pointerEvents="none">
      <SearchIcon color='white' />
    </InputLeftElement>
    <Input className="search-input" type="tel" placeholder="Search here" />
  </InputGroup>
);
