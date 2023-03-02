import { Flex, Text } from '@chakra-ui/react';
import {
  likeStyle,
  relationshipStyles,
} from '@app/styles/pages/relationshipStyles';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { relationships } from '@app/mockData';
import { Bullet } from '@app/components/ui';
import { LikeIcon } from '@app/components/ui/icons';

const Relationship = () => {
  const router = useRouter();

  const { companyName, relationship } = router.query;

  const relation = relationships.find(
    company => company.companyName.toLowerCase() === relationship?.toString(),
  );

  if (!relation) {
    return null;
  }

  return (
    <Flex sx={relationshipStyles}>
      <Flex className="header">
        <Flex className="breadcrumbs">
          <Text onClick={() => router.back()} cursor="pointer">
            {companyName}
          </Text>
          &nbsp;.&nbsp;
          {relationship}
        </Flex>
      </Flex>
      <Flex className="content-section">
        <Flex className="content">
          <Flex className="image-block">
            <Image
              width={450}
              height={128}
              src={relation.featuredImage}
              alt="featuredImage"
            />
          </Flex>
        </Flex>
        <Flex className="sidebar">
          <Text as="h2">{companyName}</Text>
          <Flex className="sidebar-header">
            <Text className="relationship-type">
              {relation.relationshipType}
            </Text>
            <Flex className="digi-proof">Digi-Proof</Flex>
            <Flex sx={likeStyle}>
              <Bullet className=''>
                <LikeIcon />
                &nbsp;3
              </Bullet>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Relationship;
