import { Flex, FlexProps } from '@chakra-ui/react';

import { Bullet } from '@app/components/ui';
import { LikeIcon } from '@app/components/ui/icons';
import { bulletStyles } from '@app/components/ui/like-button/likeButtonStyles';
import { FC } from 'react';

type LikeButtonProps = {
  withOutBg?: boolean;
} & FlexProps;

export const LikeButton: FC<LikeButtonProps> = ({ withOutBg, ...props }) => (
  <Flex {...props}>
    <Bullet className="like" sx={bulletStyles(withOutBg)}>
      <LikeIcon />
      &nbsp;3
    </Bullet>
  </Flex>
);
