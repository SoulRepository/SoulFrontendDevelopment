import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { editStyles } from '@app/styles/pages/editStyles';
import { DiscordIcon, InstagramIcon, SiteIcon, TwitterIcon } from '@app/components/ui/icons';

const EditPage = () => (
  <Flex sx={editStyles}>
    <VStack align="stretch" spacing={5} w="50%">
      <VStack>
        <Flex w='100%' flexDirection='column' mb='2px'>
          <Text>Company name</Text>
          <Input type="text" value='Company name' isDisabled/>
        </Flex >
        <Flex w='100%' flexDirection='column' mb='2px' >
          <Text>Category</Text>
          <Input type="text" value='Category, Category, Category' isDisabled/>
        </Flex>
      </VStack>
      <Flex className="description">
        <Text>Description</Text>
        <Textarea placeholder="Here is a sample placeholder" size="sm" resize="vertical" />
      </Flex>
      <VStack>
        <InputGroup className="inputGroup">
          <InputLeftElement pointerEvents="none">
            <DiscordIcon className="icon" />
          </InputLeftElement>
          <Input type="text" placeholder="Discord" />
        </InputGroup>
        <InputGroup className="inputGroup">
          <InputLeftElement pointerEvents="none">
            <TwitterIcon className="icon" />
          </InputLeftElement>
          <Input type="text" placeholder="Twitter" />
        </InputGroup>
        <InputGroup className="inputGroup">
          <InputLeftElement pointerEvents="none">
            <InstagramIcon className="icon" />
          </InputLeftElement>
          <Input type="text" placeholder="Instagram" />
        </InputGroup>
        <InputGroup className="inputGroup">
          <InputLeftElement pointerEvents="none">
            <SiteIcon className="icon" />
          </InputLeftElement>
          <Input type="text" placeholder="Your site" />
        </InputGroup>
      </VStack>
      <Button>Save</Button>
    </VStack>
  </Flex>
);

export default EditPage;
