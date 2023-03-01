import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { companyStyles } from '@app/styles/pages/companyStyles';

import { getImgPath } from '@app/utils';
import { CopyIcon, EllipsisIcon } from '@app/components/ui/icons';

const digiProofsIcon = [
  getImgPath('coinbase.png'),
  getImgPath('gost.png'),
  getImgPath('led.png'),
];

const tags = ['ERC20', 'NFT', 'Contract'];

const CompanyPage = () => {
  const address = '0xCC3C…EC00';

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
            <Flex className="soulId-section">Women Rise</Flex>
            <Flex className="desc-section">Description</Flex>
            <Flex className="sm-section">twitter</Flex>
            <Flex className="join-date-section">twitter</Flex>
          </Flex>
          <Flex className="content">content</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CompanyPage;
