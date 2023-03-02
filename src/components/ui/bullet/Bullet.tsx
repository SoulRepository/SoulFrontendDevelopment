import { FC, PropsWithChildren, useMemo } from 'react';
import { Flex, FlexProps, SystemStyleObject } from '@chakra-ui/react';

import { bulletStyles } from '@app/components/ui/bullet/bulletStyles';

type BulletProps = {
  sx?: SystemStyleObject;
  isSquare?: boolean;
} & PropsWithChildren &
  FlexProps;

export const Bullet: FC<BulletProps> = ({
  children,
  sx,
  isSquare,
  ...props
}) => {
  const styles = useMemo(() => ({ ...bulletStyles(isSquare), ...sx }), [isSquare, sx]);

  return (
    <Flex {...props} sx={styles}>
      {children}
    </Flex>
  );
};
