import { SystemStyleObject } from '@chakra-ui/react';
import { mainPx } from '@app/styles/styleVars';

export const HomeStyles: SystemStyleObject = {
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative',
  py: '200px',
  px: { '2xl': `calc(146px + ${mainPx})`, xl: mainPx },
  h1: {
    fontSize: '100px',
    fontWeight: 600,
    lineHeight: '121px',
  },
};

