import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';

import { companyStyles, menuItemStyles } from '@app/styles/pages/companyStyles';

import {
  CopyIcon,
  DiscordStaticIcon,
  EllipsisIcon,
  InstaStaticIcon,
  SiteIcon,
  TwitterStaticIcon,
  VerifyIcon,
} from '@app/components/ui/icons';
import { Bullet } from '@app/components/ui';

import { getImgPath } from '@app/utils';
import { useState } from 'react';
import Link from 'next/link';

const digiProofsIcon = [
  getImgPath('coinbase.png'),
  getImgPath('gost.png'),
  getImgPath('led.png'),
];

const tags = ['ERC20', 'NFT', 'Contract'];

const socialMediaLinks = [
  {
    label: '@WomenriseNFT',
    type: 'twitter',
    icon: TwitterStaticIcon,
    link: '#',
    isVerify: true,
  },
  {
    label: '@womenrisenft',
    type: 'instagram',
    icon: InstaStaticIcon,
    link: '#',
    isVerify: false,
  },
  {
    label: 'womenrise.art',
    type: 'site',
    icon: SiteIcon,
    link: '#',
  },
  {
    label: 'discord.com',
    type: 'discord',
    icon: DiscordStaticIcon,
    link: '#',
    isVerify: true,
  },
];

const digiProofsTypes = [
  {
    id: '1',
    name: 'Partnerships',
    description:
      'Women Rise is an art project. It is a collection of 10,000 unique art NFT’s that are representing and celebrating',
  },
  {
    id: '2',
    name: 'Collaborations',
    description:
      'Women Rise is an art project. It is a collection of 10,000 unique art NFT’s that are representing and celebrating',
  },
  {
    id: '3',
    name: 'Investors',
    description:
      'Women Rise is an art project. It is a collection of 10,000 unique art NFT’s that are representing and celebrating',
  },
  {
    id: '4',
    name: 'Team Members',
    description:
      'Women Rise is an art project. It is a collection of 10,000 unique art NFT’s that are representing and celebrating',
  },
];
// [{
//   featuredImage: <string>
//     name: <string>
//     sbtId: <string>
//     verification: <bool>,
//     }]

const relationshipsCompany = {
  Partnerships: [
    {
      featuredImage: 'coinbase_feature_image.jpg',
      name: 'Coinbase',
      sbtId: 'coinbase.soul',
      verification: true,
    },
    {
      featuredImage: 'ledger_feature_image.jpg',
      name: 'Ledger',
      sbtId: 'ledger.soul',
      verification: false,
    },
    {
      featuredImage: 'rarible_feature_image.jpg',
      name: 'Rarible',
      sbtId: 'rarible.soul',
      verification: true,
    },
    {
      featuredImage: 'rarible_feature_image.jpg',
      name: 'Rarible',
      sbtId: 'rarible.soul',
      verification: true,
    },
  ],
  Collaborations: [
    {
      featuredImage: 'rarible_feature_image.jpg',
      name: 'Rarible',
      sbtId: 'rarible.soul',
      verification: true,
    },
    {
      featuredImage: 'ledger_feature_image.jpg',
      name: 'Ledger',
      sbtId: 'ledger.soul',
      verification: false,
    },
  ],
  Investors: [
    {
      featuredImage: 'coinbase_feature_image.jpg',
      name: 'Coinbase',
      sbtId: 'coinbase.soul',
      verification: true,
    },
  ],
  'Team Members': [],
};

const CompanyPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const digiProofsTypesData = digiProofsTypes[activeTabIndex];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const relationships = relationshipsCompany[digiProofsTypesData.name];

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
            <Flex className="profile-menu">
              <EllipsisIcon />
            </Flex>
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
              <Bullet w='270px'>
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
              {socialMediaLinks.map(
                ({ label, icon: Icon, link, isVerify }, i) => (
                  <Flex key={i} className="social-box">
                    <Bullet>
                      <Text>
                        <Icon boxSize="20px" mr="10px" />
                        <a href={link}>{label}</a>
                        {isVerify && <VerifyIcon boxSize="15px" ml="5px" />}
                      </Text>
                    </Bullet>
                  </Flex>
                ),
              )}
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
              {relationships.map(
                (
                  { featuredImage, name, sbtId, verification }: any,
                  i: number,
                ) => (
                  <Flex key={i} className="partner-card">
                    <Link href="#">
                      <Flex className="card">
                        <Flex className="img">
                          <Image
                            fill
                            src={getImgPath(featuredImage)}
                            alt="feature_image"
                          />
                        </Flex>
                      </Flex>
                    </Link>
                    <Text>
                      {sbtId} {verification && <VerifyIcon ml="7px" />}
                    </Text>
                    <Text as="h3">{name}</Text>
                  </Flex>
                ),
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CompanyPage;
