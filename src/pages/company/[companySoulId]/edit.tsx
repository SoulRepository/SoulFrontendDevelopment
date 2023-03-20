import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from 'use-local-storage-state';

import { Select } from 'chakra-react-select';
import { Button, Flex, Input, Text, Textarea, useToast, VStack } from '@chakra-ui/react';

import { editStyles, selectStyles } from '@app/styles/pages/editStyles';
import { FileInput } from '@app/components/ui';

import { useWallet } from '@app/api/web3/providers/WalletProvider';
import { useCompanyBySoulId } from '@app/api/http/query/useCompanyBySoulId';
import { Loader } from '@app/components/ui/loader/Loader';
import { useCategories } from '@app/api/http/query/useCategories';
import { usePatchCompanyBySoulId } from '@app/api/http/mutations/usePatchCompanyBySoulId';
import { IOption } from '@app/types';
import apiServices from '@app/api/http/apiServices';
import axios from 'axios';
import { InputSM } from '@app/components/sm-input/InputSM';
import { QueryKeys } from '@app/api/http/queryKeys';

const Edit = () => {
  const { checkIsOwner, signer, account } = useWallet();
  const toast = useToast();
  const router = useRouter();
  const { companySoulId } = router.query;

  const { mutate } = usePatchCompanyBySoulId();

  const { data, isLoading, isSuccess, isError, getActiveCategory } = useCompanyBySoulId({
    soulId: companySoulId?.toString(),
  });

  const isOwner = checkIsOwner(data?.address);

  const [metaData, setMetaData] = useLocalStorageState<{ message: string; signature: string }>(
    QueryKeys.metaData,
  );

  const [desk, setDesk] = useState('' ?? data?.description);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [twitter, setTwitter] = useState<string | undefined>('');
  const [discord, setDiscord] = useState<string | undefined>('');
  const [instagram, setInstagram] = useState<string | undefined>('');
  const [site, setSite] = useState<string | undefined>('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [logoImageFile, setLogoImageFile] = useState<File>();
  const [featuredImageFile, setFeaturedImageFile] = useState<File>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [backgroundImageFile, setBackgroundImageFile] = useState<File>();
  const [categories, setCategories] = useState<undefined | IOption[]>(undefined);

  const { getOptions } = useCategories();

  const categoryOptions = useMemo(() => getOptions(), [getOptions]);

  const getSignature = useCallback(async () => {
    try {
      const message = 'For editing you need to sign this message.'.padEnd(50) + uuidv4();
      const signature = await signer?.signMessage(message);
      if (!message || !signature) {
        throw new Error();
      }
      setMetaData({ message, signature });
    } catch (e) {
      console.log('no');
    }

    return;
  }, [setMetaData, signer]);

  const onSave = async () => {
    if (!metaData) {
      getSignature();

      return;
    }

    const { message, signature } = metaData;
    try {
      if (typeof companySoulId === 'string' && signature && account) {
        const imagesCredentials = await apiServices.getImageCredentials(
          {
            soulId: companySoulId,
            imageType: {
              forLogo: true,
            },
            accessData: { message, address: account, sign: signature },
          },
          true,
        );
        if (imagesCredentials?.logo && featuredImageFile) {
          const formData = new FormData();
          Object.entries(imagesCredentials?.logo.fields).forEach(([key, value]) => {
            formData.set(key, value);
          });
          formData.set('Content-Type', 'image/png');
          formData.set('file', featuredImageFile, `featuredImageFile-${companySoulId}`);

          try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const data = await axios.post(imagesCredentials?.logo.url, formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
          } catch (e) {
            console.log(e);
          }
        }

        mutate({
          soulId: companySoulId,
          accessData: { message, address: account, sign: signature },
          companyInfo: {
            description: desk,
            categoriesIds: categories?.map(item => Number(item.value)),
          },
        });
      }
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

  useEffect(() => {
    if (isSuccess && !isError && data) {
      const twitter = data.links.find(item => item.type === 'twitter');
      const discord = data.links.find(item => item.type === 'discord');
      const instagram = data.links.find(item => item.type === 'instagram');
      const site = data.links.find(item => item.type === 'site');

      setTwitter(twitter?.url);
      setDiscord(discord?.url);
      setInstagram(instagram?.url);
      setSite(site?.url);

      setDesk(data.description);

      setCategories(getActiveCategory());
    }
  }, [data, isError, isSuccess]);

  if (isLoading || !isSuccess || !isOwner) {
    return (
      <Flex h="700px" w="100%" alignItems="center" justifyContent="center">
        <Loader />
      </Flex>
    );
  }

  const { name, backgroundImageUrl, logoImageUrl, featuredImageUrl } = data!;

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
              <FileInput
                h="150px"
                w="150px"
                isRounded
                activeImgUrl={logoImageUrl}
                onChange={setLogoImageFile}
              />
            </Flex>
          </Flex>
          <Flex w="600px" className="file-input-section" borderRadius="full">
            <Text>Featured image</Text>
            <Text className="advice">
              This image will be used for featuring your collection on the homepage, category pages,
              or other promotional areas of SoulSearch. 650 x 650 recommended
            </Text>
            <FileInput
              h="600px"
              w="600px"
              activeImgUrl={featuredImageUrl}
              onChange={setFeaturedImageFile}
            />
          </Flex>
          <Flex className="file-input-section" borderRadius="full">
            <Text>Banner image</Text>
            <Text w="600px" className="advice">
              This image will appear at the top of your main page. Avoid including too much text in
              this banner image, as the dimensions change on different devices. 1400 x 280
              recommended
            </Text>
            <FileInput
              h="280px"
              activeImgUrl={backgroundImageUrl}
              onChange={setBackgroundImageFile}
            />
          </Flex>
        </VStack>
        <VStack>
          <Flex w="100%" flexDirection="column" mb="2px">
            <Text>Company name</Text>
            <Input type="text" value={name} isDisabled />
          </Flex>

          <Flex w="100%" flexDirection="column" mb="2px">
            <Text>Category</Text>
            <Select
              instanceId="edit_select"
              chakraStyles={selectStyles}
              isMulti
              name="colors"
              options={categoryOptions}
              value={categories}
              onChange={e => setCategories(e as IOption[])}
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
            value={desk}
            onChange={e => setDesk(e.target.value)}
          />
        </Flex>
        <VStack>
          <InputSM
            type="discord"
            onChange={setDiscord}
            value={discord}
            getSignature={getSignature}
            isVerified={true}
          />
          <InputSM type="twitter" onChange={setTwitter} value={''} getSignature={getSignature} />
          <InputSM
            type="instagram"
            onChange={setInstagram}
            value={instagram}
            getSignature={getSignature}
          />
          <InputSM type="site" onChange={setSite} value={site} getSignature={getSignature} />
        </VStack>
        <Button w="20%" h="60px" onClick={onSave}>
          Update
        </Button>
      </VStack>
    </Flex>
  );
};

export default Edit;
