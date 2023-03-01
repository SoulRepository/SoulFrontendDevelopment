import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { companyStyles } from '@app/styles/pages/companyStyles';

import { getImgPath } from '@app/utils';
import {
  CopyIcon,
  DiscordStaticIcon,
  EllipsisIcon,
  InstaStaticIcon,
  SiteIcon,
  TwitterStaticIcon,
  VerifyIcon,
} from '@app/components/ui/icons';

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

const CompanyPage = () => {
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
            <Flex className="digi-proofs">
              <Text>Digi-Proofs with</Text>
              {digiProofsIcon.map((src, i) => (
                <Flex key={i} className="digi-icon">
                  <Image fill src={src} alt={'icon'} />
                </Flex>
              ))}
            </Flex>
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
              <Flex className="address">
                {address} <CopyIcon className="copy-icon" onClick={onCopy} />
              </Flex>
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
                  <a href={link}>
                    <Text>
                      <Icon boxSize="20px" mr="10px" />
                      {label}
                      {isVerify && <VerifyIcon boxSize="15px" ml="5px" />}
                    </Text>
                  </a>
                </Flex>
              ))}
            </Flex>
            <Flex className="join-date-section">
              <Text className='title'>Joined</Text>
              <Text className='date'>February 2023</Text>
            </Flex>
          </Flex>
          <Flex className="content">
           content
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CompanyPage;
