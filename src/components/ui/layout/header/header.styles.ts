import { SystemStyleObject } from '@chakra-ui/react';
import { lightColor } from '@app/styles/colorScheme';
import { mainPx } from '@app/styles/styleVars';

export const headerStyles = (isShowBg: boolean): SystemStyleObject => ({
  h: '85px',
  w: '100%',
  zIndex: '1',
  px: { '2xl': mainPx },
  alignItems: 'center',
  justifyContent: 'center',
  background: isShowBg
    ? lightColor.headerBgColor
    : 'linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)',
  position: isShowBg ? 'relative' : 'absolute',
  '.search': {
    mr: { '2xl': '95px', md: '65px' },
  },
  '.logo': {
    mr: '39px',
    position: 'relative',
    minW: '185px',
    h: '27px',
  },
  '.account-section': {
    alignItems: 'center',
    justifyContent: 'center',
    minW: '170px',
    '.account': {
      textTransform: 'uppercase',
      cursor: 'pointer',
      fontSize: { '2xl': '16px', md: '14px' },
      _hover: { color: lightColor.highlighting },
    },
    '.exit': {
      cursor: 'pointer',
      ml: '10px',
      _hover: { color: lightColor.highlighting },
    },
  },
});

export const menuStyles: SystemStyleObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  w: '280px',
  mr: { '2xl': '160px', md: '100px' },
  '.menu-item': {
    fontSize: { '2xl': '16px', md: '14px' },
    color: 'white',
    transition: 'all 0.3s',
    _hover: {
      color: lightColor.highlighting,
    },
  },
};
