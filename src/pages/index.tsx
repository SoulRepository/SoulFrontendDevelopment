import { Flex, Text } from '@chakra-ui/react';
import { HomeStyles } from '@app/styles/pages/homeStyles';
import { MainSearch } from '@app/components/search/main-search/MainSearch';

export default function Home() {
  return (
    <Flex sx={HomeStyles}>
      <Text as="h1" mb="50px">
        Soul Search
      </Text>
      <MainSearch />
    </Flex>
  );
}
