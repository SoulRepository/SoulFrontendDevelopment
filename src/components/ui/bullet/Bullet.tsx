import { FC, PropsWithChildren, useMemo } from 'react';
import { Flex, FlexProps, SystemStyleObject } from '@chakra-ui/react';

import { bulletStyles } from '@app/components/ui/bullet/bulletStyles';

type BulletProps = {
  sx?: SystemStyleObject;
} & PropsWithChildren &
  FlexProps;

export const Bullet: FC<BulletProps> = ({ children, sx, ...props }) => {
  const styles = useMemo(() => ({ ...bulletStyles, ...sx }), [sx]);

  return (
    <Flex {...props} sx={styles}>
      {children}
    </Flex>
  );
};
