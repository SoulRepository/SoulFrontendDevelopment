import { useEffect, useMemo } from 'react';
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
import { useCompanyBySoulId } from '@app/api/http/query/useCompanyBySoulId';
import { Loader } from '@app/components/ui/loader/Loader';
import { useCategories } from '@app/api/http/query/useCategories';

const EditPage = () => {
  const { checkIsOwner, signer } = useWallet();
  const toast = useToast();
  const router = useRouter();
  const { companySoulId } = router.query;

  const { data, isLoading, isSuccess, isError, getActiveCategory } = useCompanyBySoulId({
    soulId: companySoulId?.toString(),
  });

  const { getOptions } = useCategories();

  const categoryOptions = useMemo(() => getOptions(), [getOptions]);
  const activeCategoryOptions = useMemo(() => getActiveCategory(), [getActiveCategory]);

  const isOwner = checkIsOwner(data?.address);

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

  useEffect(() => {
    if ((isSuccess && !isOwner) || isError) {
      toast({
        title: 'Error',
        description: `something went wrong`,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-left',
        colorScheme: 'whatsapp',
      });
      router.push('/');
    }
  }, [isOwner, isSuccess, isError]);

  if (isLoading || !isSuccess || !isOwner) {
    return (
      <Flex h="700px" w="100%" alignItems="center" justifyContent="center">
        <Loader />
      </Flex>
    );
  }

  const { name, backgroundImageUrl, logoImageUrl, featuredImageUrl, description } = data!;

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
            <Flex borderRadius="full">
              <FileInput h='150px' w='150px' isRounded activeImgUrl={logoImageUrl} />
            </Flex>
          </Flex>
          <Flex w='600px' className="file-input-section" borderRadius="full">
            <Text>Featured image</Text>
            <Text className="advice">
              This image will be used for featuring your collection on the homepage, category pages,
              or other promotional areas of SoulSearch. 650 x 650 recommended
            </Text>
            <FileInput h='600px' w='600px' activeImgUrl={featuredImageUrl} />
          </Flex>
          <Flex className="file-input-section" borderRadius="full">
            <Text>Banner image</Text>
            <Text w='600px' className="advice">
              This image will appear at the top of your main page. Avoid including too much text in
              this banner image, as the dimensions change on different devices. 1400 x 280
              recommended
            </Text>
            <FileInput h='280px' activeImgUrl={backgroundImageUrl} />
          </Flex>
        </VStack>
        <VStack>
          <Flex w="100%" flexDirection="column" mb="2px">
            <Text>Company name</Text>
            <Input type="text" defaultValue={name} isDisabled />
          </Flex>

          <Flex w="100%" flexDirection="column" mb="2px">
            <Text>Category</Text>
            <Select
              instanceId="edit_select"
              chakraStyles={selectStyles}
              isMulti
              name="colors"
              options={categoryOptions}
              defaultValue={activeCategoryOptions}
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
          <Textarea
            placeholder="Here is a sample placeholder"
            size="sm"
            resize="vertical"
            defaultValue={description}
          />
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
