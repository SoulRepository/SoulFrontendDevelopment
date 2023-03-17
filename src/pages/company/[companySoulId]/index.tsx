import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box, Flex, Text, Tooltip, useToast } from '@chakra-ui/react';

import { companyStyles, menuItemStyles } from '@app/styles/pages/companyStyles';

import { getImgPath, getShortAddress, transformLinkToName } from '@app/utils';

import { digiProofsIcon, socialMediaMetaData } from '@app/mockData';

import { CopyIcon, VerifyIcon } from '@app/components/ui/icons';
import { Bullet } from '@app/components/ui';
import { DropdownMenu } from '@app/components/ui/dropdown-menu/DropdownMenu';
import { Loader } from '@app/components/ui/loader/Loader';
import { SbtList } from '@app/components/ui/sbt-list/SbtList';

import useCopyToClipboard from '@app/hooks/useCopyToClipBoard';
import { useNetworkConfig } from '@app/api/web3/hooks/useNetworkConfig';
import { useSearchCompany } from '@app/api/http/query/useSearchCompany';
import { useDigiProofs } from '@app/api/http/query/useDigiProofs';

import type { IMenuItem } from '@app/types';
import { useWallet } from '@app/api/web3/providers/WalletProvider';

const CompanyPage = () => {
  const { checkIsOwner } = useWallet();
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const router = useRouter();
  const toast = useToast();
  const { scanTransaction } = useNetworkConfig();
  const [, onCopy] = useCopyToClipboard();

  const { companyResp, isSuccess } = useSearchCompany(
    router.query?.companySoulId?.toString() ?? '',
  );

  const { data: digiProofsTypes } = useDigiProofs();

  const dropdownMenuItem: IMenuItem[] = useMemo(
    () => [
      {
        label: 'Edit',
        link: `${router.asPath}/edit`,
      },
    ],
    [router.asPath],
  );

  useEffect(() => {
    if (!companyResp && isSuccess) {
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
  }, [companyResp, isSuccess]);

  if (!companyResp || !digiProofsTypes) {
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

  const isOwner = checkIsOwner(address)

  const bgImageUrl = backgroundImageUrl ?? getImgPath('default-bg.png');
  const avatarUrl = logoImageUrl ?? getImgPath('default-avatar.png');
  const nftAddress = getShortAddress(address);
  const digiProof = digiProofsTypes[activeTabIndex].name;

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
            {isOwner && <DropdownMenu menuItems={dropdownMenuItem} />}
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
                <Text
                  className="copy-icon"
                  textTransform="uppercase"
                  onClick={() => scanTransaction(address, 'address')}
                >
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
              {links.map(({ type, url, verified }, i) => {
                const Icon = socialMediaMetaData[type].icon;

                return (
                  <Flex key={i} className="social-box">
                    <Bullet>
                      <Text>
                        <Icon boxSize="20px" mr="10px" />
                        <a href={url} target="_blank">
                          @{transformLinkToName(url, type)}
                        </a>
                        {verified && <VerifyIcon boxSize="15px" ml="5px" />}
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
              <SbtList souldId={soulId} digiProof={digiProof} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CompanyPage;