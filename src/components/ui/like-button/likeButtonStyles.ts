import { SystemStyleObject } from '@chakra-ui/react';
import { lightColor } from '@app/styles/colorScheme';

export const bulletStyles = (withOutBg = false): SystemStyleObject => ({
  px: '20px',
  cursor: 'pointer',
  color: '#49535B',
  ...(() =>
    withOutBg && { boxShadow: 'none', bgColor: 'transparent', px: 0, py: 0 })(),

  _hover: { color: lightColor.highlighting },
});
