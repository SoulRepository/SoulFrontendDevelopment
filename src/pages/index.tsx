import { Flex, Text } from '@chakra-ui/react';
import { HomeStyles } from '@app/styles/pages/homeStyles';
import { MainSearch } from '@app/components/search/main-search/MainSearch';
import { Blur } from '@app/components/ui/blur/Blur';

export default function Home() {
  return (
    <Flex sx={HomeStyles}>
      <Blur />
      <Text as="h1" mb="50px">
        Soul Search
      </Text>
      <MainSearch />
    </Flex>
  );
}
