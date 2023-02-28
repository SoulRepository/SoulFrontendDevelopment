import { Box, Flex,Text } from '@chakra-ui/react';
import Image from 'next/image';

import { companyStyles } from '@app/styles/pages/companyStyles';

import { getImgPath } from '@app/utils';
import { EllipsisIcon } from '@app/components/ui/icons';

const digiProofsIcon = [
  getImgPath('coinbase.png'),
  getImgPath('gost.png'),
  getImgPath('led.png'),
];

const CompanyPage = () => (
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
      </Flex>
    </Flex>
  );

export default CompanyPage;
