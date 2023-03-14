import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Text, Tooltip, useToast } from '@chakra-ui/react';

import { companyStyles, menuItemStyles } from '@app/styles/pages/companyStyles';

import { CopyIcon, VerifyIcon } from '@app/components/ui/icons';
import { Bullet } from '@app/components/ui';

import { getImgPath, getShortAddress, transformLinkToName } from '@app/utils';

import {
  digiProofsIcon,
  digiProofsTypes,
  relationshipsCompany,
  socialMediaMetaData,
} from '@app/mockData';
import { LikeButton } from '@app/components/ui/like-button/LikeButton';
import { DropdownMenu } from '@app/components/ui/dropdown-menu/DropdownMenu';

import type { IMenuItem } from '@app/types';
import { useCompany } from '@app/api/http/query/useCompany';
import { Loader } from '@app/components/ui/loader/Loader';
import useCopyToClipboard from '@app/hooks/useCopyToClipBoard';
import { useNetworkConfig } from '@app/api/web3/hooks/useNetworkConfig';

const CompanyPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const digiProofsTypesData = digiProofsTypes[activeTabIndex];
  const router = useRouter();
  const toast = useToast();
  const { scanTransaction } = useNetworkConfig();
  const [, onCopy] = useCopyToClipboard();

  const { companyResp, isSuccess } = useCompany(router.query?.companyName?.toString() ?? '');

  const dropdownMenuItem: IMenuItem[] = useMemo(
    () => [
      {
        label: 'Edit',
        link: `${router.asPath}/edit`,
      },
    ],
    [router.asPath],
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const relationships = relationshipsCompany[digiProofsTypesData.name.toLowerCase()];

  useEffect(() => {
    if (!companyResp && isSuccess) {
      router.push('/');
    }
  }, [companyResp, isSuccess]);

  if (!companyResp) {
    return (
      <Flex h="700px" w="100%" alignItems="center" justifyContent="center">
        <Loader />
      </Flex>
    );
  }
  const {
    soulId,
    name,
    address,
    backgroundImageUrl,
    logoImageUrl,
    description,
    categories,
    links,
  } = companyResp;

  const bgImageUrl = backgroundImageUrl ?? getImgPath('default-bg.jpg');
  const avatarUrl = logoImageUrl ?? getImgPath('default-avatar.jpg');
  const nftAddress = getShortAddress(address);

  const onCopyHandler = () => {
    onCopy(address);
    toast({
      title: 'Copy',
      description: `You copy address ${address}`,
      status: 'info',
      duration: 5000,
      isClosable: true,
      position: 'top-left',
      colorScheme: 'whatsapp',
    });
  };

  return (
    <Flex as="section" sx={companyStyles}>
      <Flex className="header">
        <Image fill src={bgImageUrl} alt="bg" />
      </Flex>
      <Flex className="company-section">
        <Flex className="company-info">
          <Flex>
            <Box className="avatar">
              <Image fill src={avatarUrl} alt="avatar" />
            </Box>
          </Flex>
          <Flex className="menu-section">
            <Bullet className="digi-proofs">
              <Text>Digi-Proofs with</Text>
              {digiProofsIcon.map((src, i) => (
                <Flex key={i} className="digi-icon">
                  <Image fill src={src} alt="icon" />
                </Flex>
              ))}
            </Bullet>
            <DropdownMenu menuItems={dropdownMenuItem} />
          </Flex>
        </Flex>
        <Flex className="content-section">
          <Flex className="side-bar">
            <Flex className="address-section">
              <Flex mb="10px">
                {categories.map(({ name }, i) => (
                  <Tooltip key={i} label={name} placement="top">
                    <Flex className="tag">{getShortAddress(name, 3, 3)}</Flex>
                  </Tooltip>
                ))}
              </Flex>
              <Bullet w="270px">
                <Text className="copy-icon" onClick={() => scanTransaction(address, 'address')}>
                  {nftAddress}
                </Text>{' '}
                <CopyIcon className="copy-icon" onClick={onCopyHandler} />
              </Bullet>
            </Flex>
            <Flex className="soulId-section">
              <Text as="h2">{name}</Text>
              <Text>{soulId}</Text>
            </Flex>
            <Flex className="desc-section">
              <Text className="title">Description</Text>
              <Text className="text">{description}</Text>
            </Flex>
            <Flex className="sm-section">
              {links.map(({ type, url }, i) => {
                const Icon = socialMediaMetaData[type].icon;

                return (
                  <Flex key={i} className="social-box">
                    <Bullet>
                      <Text>
                        <Icon boxSize="20px" mr="10px" />
                        <a href={url} target="_blank">
                          @{transformLinkToName(url, type)}
                        </a>
                        {false && <VerifyIcon boxSize="15px" ml="5px" />}
                      </Text>
                    </Bullet>
                  </Flex>
                );
              })}
            </Flex>
            <Flex className="join-date-section">
              <Text className="title">Joined</Text>
              <Text className="date">February 2023</Text>
            </Flex>
          </Flex>
          <Flex className="content">
            <Flex className="menu">
              {digiProofsTypes.map(({ name }, i) => (
                <Bullet
                  key={i}
                  sx={menuItemStyles(i === activeTabIndex)}
                  onClick={() => setActiveTabIndex(i)}
                >
                  {name}
                </Bullet>
              ))}
            </Flex>
            <Flex className="partner-cards-section">
              {relationships.length ? (
                relationships.map(
                  ({ featuredImage, name, sbtId, verification }: any, i: number) => (
                    <Flex key={i} className="partner-card">
                      <Link href={router.asPath + `/${name.toLowerCase()}`}>
                        <Flex className="card">
                          <Flex className="img">
                            <Image fill src={getImgPath(featuredImage)} alt="feature_image" />
                          </Flex>
                        </Flex>
                      </Link>
                      <Text>
                        {sbtId} {verification && <VerifyIcon ml="7px" />}
                      </Text>
                      <Flex className="footer">
                        <Text as="h3">{name}</Text>
                        <LikeButton withOutBg />
                      </Flex>
                    </Flex>
                  ),
                )
              ) : (
                <Text fontSize="20px" color="#697280">
                  No Digi-proof relationships yet
                </Text>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CompanyPage;
