import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Text } from '@chakra-ui/react';

import { companyStyles, menuItemStyles } from '@app/styles/pages/companyStyles';

import { CopyIcon, VerifyIcon } from '@app/components/ui/icons';
import { Bullet } from '@app/components/ui';

import { getImgPath } from '@app/utils';

import {
  digiProofsIcon,
  digiProofsTypes,
  relationshipsCompany,
  socialMediaLinks,
  tags,
} from '@app/mockData';
import { LikeButton } from '@app/components/ui/like-button/LikeButton';
import { DropdownMenu } from '@app/components/ui/dropdown-menu/DropdownMenu';

import type { IMenuItem } from '@app/types';

const CompanyPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const digiProofsTypesData = digiProofsTypes[activeTabIndex];

  const router = useRouter();
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

  const address = '0xCC3C…EC00';

  const companyName = 'Women Rise';
  const companySoulId = 'womenrise.soul';

  const descText =
    'Women Rise is an art project. It is a collection of 10,000 unique art NFT’s that are representing and celebrating women activists, artists, scientists, coders and many others rising on the blockchain!';

  const onCopy = () => {
    console.log('copy');
  };

  return (
    <Flex as="section" sx={companyStyles}>
      <Flex className="header">
        <Image fill src={getImgPath('default-bg.jpg')} alt="bg" />
      </Flex>
      <Flex className="company-section">
        <Flex className="company-info">
          <Flex>
            <Box className="avatar">
              <Image fill src={getImgPath('default-avatar.jpg')} alt="avatar" />
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
                {tags.map((tag, i) => (
                  <Flex key={i} className="tag">
                    {tag}
                  </Flex>
                ))}
              </Flex>
              <Bullet w="270px">
                {address} <CopyIcon className="copy-icon" onClick={onCopy} />
              </Bullet>
            </Flex>
            <Flex className="soulId-section">
              <Text as="h2">{companyName}</Text>
              <Text>{companySoulId}</Text>
            </Flex>
            <Flex className="desc-section">
              <Text className="title">Description</Text>
              <Text className="text">{descText}</Text>
            </Flex>
            <Flex className="sm-section">
              {socialMediaLinks.map(({ label, icon: Icon, link, isVerify }, i) => (
                <Flex key={i} className="social-box">
                  <Bullet>
                    <Text>
                      <Icon boxSize="20px" mr="10px" />
                      <a href={link}>{label}</a>
                      {isVerify && <VerifyIcon boxSize="15px" ml="5px" />}
                    </Text>
                  </Bullet>
                </Flex>
              ))}
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
                <Text fontSize='20px' color='#697280'>No Gigi-proof relationships yet</Text>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CompanyPage;
