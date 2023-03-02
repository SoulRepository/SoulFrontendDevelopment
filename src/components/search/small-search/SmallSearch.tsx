import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FC } from 'react';

import { SearchIcon } from '@app/components/ui/icons';

import { smallSearchStyles } from '@app/components/search/small-search/smallSearchStyles';

interface SmallSearchProps {
  rgbaBg?: boolean;
}

export const SmallSearch: FC<SmallSearchProps> = ({ rgbaBg }) => (
  <InputGroup sx={smallSearchStyles(rgbaBg)}>
    <InputLeftElement pointerEvents="none">
      <SearchIcon color="white" />
    </InputLeftElement>
    <Input className="search-input" type="tel" placeholder="Search here" />
  </InputGroup>
);
