import { Flex } from '@chakra-ui/react';
import { bulletStyles } from '@app/components/ui/bullet/bulletStyles';
import { FC, PropsWithChildren } from 'react';

type BulletProps = {
  className?: string;
} & PropsWithChildren;

export const Bullet: FC<BulletProps> = ({ children, className }) => (
  <Flex className={className} sx={bulletStyles}>{children}</Flex>
);
