import { FC } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

import { Bullet } from '@app/components/ui';
import { LikeIcon } from '@app/components/ui/icons';
import { bulletStyles } from '@app/components/ui/like-button/likeButtonStyles';



type LikeButtonProps = {
  withOutBg?: boolean;
  count?: number
} & FlexProps;

export const LikeButton: FC<LikeButtonProps> = ({ withOutBg, count = 10, ...props }) => (
  <Flex {...props}>
    <Bullet className="like" sx={bulletStyles(withOutBg)}>
      <LikeIcon />
      &nbsp; {count}
    </Bullet>
  </Flex>
);
