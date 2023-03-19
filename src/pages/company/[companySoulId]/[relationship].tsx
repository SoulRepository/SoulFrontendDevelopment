import { useEffect } from 'react';
import { Button, Flex, Text, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { buttonStyles, relationshipStyles } from '@app/styles/pages/relationshipStyles';

import { LikeButton } from '@app/components/ui/like-button/LikeButton';
import { Bullet } from '@app/components/ui';
import { VerifyIcon } from '@app/components/ui/icons';
import { Loader } from '@app/components/ui/loader/Loader';

import { useSbtCompanyInfo } from '@app/api/http/query/complex/useSbtCompanyInfo';

import { formatDateV2, getImgPath } from '@app/utils';

const Relationship = () => {
  const router = useRouter();
  const { companySoulId, relationship } = router.query;

  const { isLoading, isSuccess, isError, data } = useSbtCompanyInfo({
    sbtId: relationship?.toString(),
    soulId: companySoulId?.toString(),
  });

  const toast = useToast();

  useEffect(() => {
    if (isError) {
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
  }, [isError]);

  if (isLoading || !isSuccess) {
    return (
      <Flex h="700px" w="100%" alignItems="center" justifyContent="center">
        <Loader />
      </Flex>
    );
  }

  const { sbtName, description, featuredImage, companies, digiProofType, companyName, } = data;

  const featuredImageUrl = featuredImage ?? getImgPath('default-feature.png');

  return (
    <Flex sx={relationshipStyles}>
      <Flex className="header">
        <Flex className="breadcrumbs">
          <Text onClick={() => router.back()} cursor="pointer">
            {companyName}
          </Text>
          &nbsp;.&nbsp;
          {sbtName}
        </Flex>
      </Flex>
      <Flex className="content-section">
        <Flex className="content">
          <Flex className="image-block">
            <Image fill src={featuredImageUrl} alt="featuredImage" />
          </Flex>
        </Flex>
        <Flex className="sidebar">
          <Text as="h2">{companyName}</Text>
          <Flex className="sidebar-header">
            <Text className="relationship-type">{digiProofType}</Text>
            <Flex className="digi-proof">Digi-Proof</Flex>
            <LikeButton />
          </Flex>
          <Flex className="companies-section">
            <Text as="h3">Companies</Text>
            <Flex className="companies">
              {companies.map(({ logo, soulId, name, verified }, i) => {
                const logoUrl = logo ?? getImgPath('default-avatar.png');

                return (
                  <Link key={i} href={'/company/' + soulId.toLowerCase()}>
                    <Bullet mr="10px" isSquare>
                      <Flex className="image-block">
                        <Flex className="featured-Image">
                          <Image fill src={logoUrl} alt="featured-Image" />
                        </Flex>
                        {verified && <VerifyIcon className="verify-icon" />}
                      </Flex>
                      <Text textTransform="capitalize">{name}</Text>
                    </Bullet>
                  </Link>
                );
              })}
            </Flex>
          </Flex>
          <Flex className="properties-section">
            <Text>Properties</Text>
            <Flex className="description">{description}</Flex>
          </Flex>
          <Flex className="date">Created: {formatDateV2('2023-03-10T16:25:13.683Z')}</Flex>
          <Flex className="button-section">
            <Button sx={buttonStyles} isDisabled>
              Withdraw
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Relationship;
