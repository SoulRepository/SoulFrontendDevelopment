import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@app/components/ui/icons';
import { MainSearchStyles } from '@app/components/search/main-search/mainSearchStyles';

export const MainSearch = () => (
  <InputGroup sx={MainSearchStyles} size="sm">
    <Input pl="20px" />
    <InputRightElement pr="20px" mt="10px">
      <SearchIcon color="#515151" boxSize="20px" />
    </InputRightElement>
  </InputGroup>
);
