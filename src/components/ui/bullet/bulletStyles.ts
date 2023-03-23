import { SystemStyleObject } from '@chakra-ui/react';

export const bulletStyles = (isSquare = false): SystemStyleObject => ({
  bg: 'white',
  borderRadius: isSquare ? '6px' : 'full',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 2px 6px rgba(4, 18, 38, 0.1)',
  px: '15px',
  py: { '2xl': '12px', md: '10px' },
  transition: 'all .3s',
});
