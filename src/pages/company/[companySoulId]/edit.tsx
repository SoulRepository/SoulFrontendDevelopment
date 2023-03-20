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
import { IMetaData, IOption } from '@app/types';
import apiServices from '@app/api/http/apiServices';
import { InputSM } from '@app/components/sm-input/InputSM';
import { QueryKeys } from '@app/api/http/queryKeys';
import { sendImageToAWS } from '@app/utils';

const Edit = () => {
  const { checkIsOwner, signer, account } = useWallet();
  const toast = useToast();
  const router = useRouter();
  const { companySoulId } = router.query;

  const { data, isLoading, isSuccess, isError, getActiveCategory, getSocialLink } =
    useCompanyBySoulId({
      soulId: companySoulId?.toString(),
    });
  const { getOptions } = useCategories();

  const { mutate } = usePatchCompanyBySoulId();

  const [metaData, setMetaData] = useLocalStorageState<IMetaData>(QueryKeys.metaData);

  const [desk, setDesk] = useState('' ?? data?.description);
  const [twitter, setTwitter] = useState<string>('');
  const [discord, setDiscord] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [site, setSite] = useState<string>('');

  const [logoImageFile, setLogoImageFile] = useState<File>();
  const [featuredImageFile, setFeaturedImageFile] = useState<File>();
  const [backgroundImageFile, setBackgroundImageFile] = useState<File>();
  const [categories, setCategories] = useState<undefined | IOption[]>(undefined);

  const categoryOptions = useMemo(() => getOptions(), [getOptions]);

  const isOwner = checkIsOwner(data?.address);

  const getSignature = useCallback(async () => {
    try {
      const message = 'For editing you need to sign this message.'.padEnd(50) + uuidv4();
      const signature = await signer?.signMessage(message);
      if (!message || !signature || !account) {
        throw new Error();
      }
      setMetaData({ message, signature, soulId: companySoulId!.toString(), account: account });
    } catch (e) {
      console.log('no');
    }

    return;
  }, [setMetaData, signer, account]);

  const onSave = async () => {
    if (!metaData) {
      getSignature();

      return;
    }

    const { message, signature } = metaData;
    try {
      if (typeof companySoulId === 'string' && signature && account) {
        const imagesCredentials = await apiServices.getImageCredentials({
          soulId: companySoulId,
          imageType: {
            forLogo: !!logoImageFile,
            forFeatured: !!featuredImageFile,
            forBackground: !!backgroundImageFile,
          },
          accessData: { message, address: account, sign: signature },
          isProxy: true,
        });

        const logoImageKey = await sendImageToAWS(imagesCredentials?.logo, logoImageFile);
        const featuredImageKey = await sendImageToAWS(
          imagesCredentials?.featured,
          featuredImageFile,
        );
        const backgroundImageKey = await sendImageToAWS(
          imagesCredentials?.background,
          backgroundImageFile,
        );

        const links = [
          { url: twitter, type: 'twitter' },
          { url: discord, type: 'discord' },
          { url: instagram, type: 'instagram' },
          { url: site, type: 'site' },
        ].filter(link => !!link.url);

        mutate({
          soulId: companySoulId,
          accessData: { message, address: account, sign: signature },
          companyInfo: {
            logoImageKey,
            featuredImageKey,
            backgroundImageKey,
            description: desk,
            categoriesIds: categories?.map(item => Number(item.value)),
            links,
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
      setTwitter(getSocialLink('twitter').url ?? '');
      setDiscord(getSocialLink('discord').url ?? '');
      setInstagram(getSocialLink('instagram').url ?? '');
      setSite(getSocialLink('site').url ?? '');

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
            isVerified={getSocialLink('discord').verified}
          />
          <InputSM
            type="twitter"
            onChange={setTwitter}
            value={twitter}
            getSignature={getSignature}
            isVerified={getSocialLink('twitter').verified}
          />
          <InputSM
            type="instagram"
            onChange={setInstagram}
            value={instagram}
            getSignature={getSignature}
            isVerified={getSocialLink('instagram').verified}
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
