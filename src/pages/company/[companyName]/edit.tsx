import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Select } from 'chakra-react-select';
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react';

import { editStyles, selectStyles } from '@app/styles/pages/editStyles';

import { DiscordIcon, InstagramIcon, SiteIcon, TwitterIcon } from '@app/components/ui/icons';
import { FileInput } from '@app/components/ui';

import { useWallet } from '@app/api/web3/providers/WalletProvider';

const EditPage = () => {
  const router = useRouter();

  const toast = useToast();

  const { signer } = useWallet();

  const onSave = async () => {
    const message = 'Do you confirm the change?';
    try {
      const signature = await signer?.signMessage(message);

      console.log(signature);
    } catch (e) {
      toast({
        title: 'Wallet',
        description: 'User rejected signing',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'top-left',
        colorScheme: 'whatsapp',
      });
    }
  };

  const colourOptions = useMemo(
    () => [
      { value: 'Blockchain technology', label: 'Blockchain technology' },
      { value: 'Cryptocurrency', label: 'Cryptocurrency' },
      { value: 'DeFi', label: 'DeFi' },
      { value: 'NFTs', label: 'NFTs' },
      { value: 'AI', label: 'AI' },
      { value: 'Machine learning', label: 'Machine learning' },
      { value: 'IoT', label: 'IoT' },
      { value: 'Cybersecurity', label: 'Cybersecurity' },
      { value: 'AR', label: 'AR' },
      { value: 'VR', label: 'VR' },
      { value: 'Gaming', label: 'Gaming' },
      { value: 'Web3', label: 'Web3' },
      { value: 'Web3 Gaming', label: 'Web3 Gaming' },
      { value: 'Finance', label: 'Finance' },
      { value: 'Social media', label: 'Social media' },
      { value: 'E-commerce', label: 'E-commerce' },
      { value: 'Healthcare technology', label: 'Healthcare technology' },
      { value: 'Education technology', label: 'Education technology' },
      { value: 'Renewable energy', label: 'Renewable energy' },
      { value: 'Transportation technology', label: 'Transportation technology' },
      { value: 'Real estate technology', label: 'Real estate technology' },
      { value: 'Media and entertainment', label: 'Media and entertainment' },
    ],
    [],
  );

  return (
    <Flex sx={editStyles}>
      <VStack align="stretch" spacing={8} w="50%">
        <Text fontWeight="600" w="10%" cursor="pointer" onClick={() => router.back()}>
          Go back
        </Text>
        <VStack align="stretch" spacing={5}>
          <Flex className="file-input-section">
            <Text>Logo image</Text>
            <Text className="advice">
              The image will also be used for company avatar. 150*150 recommended
            </Text>
            <Flex boxSize="150px" borderRadius="full">
              <FileInput isRounded />
            </Flex>
          </Flex>
          <Flex className="file-input-section" h="400px" w="600px" borderRadius="full">
            <Text>Featured image</Text>
            <Text className="advice">
              This image will be used for featuring your collection on the homepage, category pages,
              or other promotional areas of SoulSearch. 650 x 650 recommended
            </Text>
            <FileInput />
          </Flex>
          <Flex className="file-input-section" h="280px" borderRadius="full">
            <Text>Banner image</Text>
            <Text className="advice">
              This image will appear at the top of your main page. Avoid including too much text in
              this banner image, as the dimensions change on different devices. 1400 x 280
              recommended
            </Text>
            <FileInput />
          </Flex>
        </VStack>
        <VStack>
          <Flex w="100%" flexDirection="column" mb="2px">
            <Text>Company name</Text>
            <Input type="text" value="Company name" isDisabled />
          </Flex>

          <Flex w="100%" flexDirection="column" mb="2px">
            <Text>Category</Text>
            <Select
              instanceId="edit_select"
              chakraStyles={selectStyles}
              isMulti
              name="colors"
              options={colourOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              components={{
                ClearIndicator: () => null,
              }}
            />
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
        <Button w="20%" h="60px" onClick={onSave}>
          Update
        </Button>
      </VStack>
    </Flex>
  );
};

export default EditPage;