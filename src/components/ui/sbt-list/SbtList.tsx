import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Flex, Text } from '@chakra-ui/react';

import { getImgPath } from '@app/utils';

import { VerifyIcon } from '@app/components/ui/icons';
import { LikeButton } from '@app/components/ui/like-button/LikeButton';

import { sbtListStyles } from '@app/components/ui/sbt-list/sbtListStyles';
import { useSbtList } from '@app/api/http/query/useSbtList';
import { FC } from 'react';

interface ISbtListProps {
  souldId: string;
  digiProof: string;
}

export const SbtList: FC<ISbtListProps> = ({ souldId, digiProof }) => {
  const router = useRouter();

  const { data } = useSbtList({ souldId, digiProof });



  if (!data || !data.length) {
    return (
      <>
        <Text fontSize="18px" color="#697280">
          No Digi-proof relationships yet
        </Text>
      </>
    );
  }

  return (
    <>
      {data.map(({ sbtId, companies  }, i) => {
        const { name, soulId, featuredImage, verified } = companies[0];
        const featureImageUri = featuredImage ?? getImgPath('default-feature.png')


        return <Flex key={i} sx={sbtListStyles}>
          <Link href={router.asPath + `/${sbtId.toLowerCase()}`}>
            <Flex className="card">
              <Flex className="img">
                <Image fill src={featureImageUri} alt="feature_image" />
              </Flex>
            </Flex>
          </Link>
          <Text>
            {soulId} {verified && <VerifyIcon ml="7px" />}
          </Text>
          <Flex className="footer">
            <Text as="h3">{name}</Text>
            <LikeButton withOutBg />
          </Flex>
        </Flex>
      })}
    </>
  );
};
