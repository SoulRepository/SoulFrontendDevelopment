import { SystemStyleObject } from '@chakra-ui/react';
import { mainPx, roundedWhiteSection } from '@app/styles/styleVars';

export const companyStyles: SystemStyleObject = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  w: '100%',
  '.header': {
    position: 'relative',
    h: '280px',
    w: '100%',
  },
  '.company-section': {
    px: mainPx,
    w: '100%',
    '.company-info': {
      w: '100%',
      alignItems: 'center',
      position: 'relative',
      bottom: '72px',
      justifyContent: 'space-between',
      '.avatar': {
        position: 'relative',
        overflow: 'hidden',
        boxSize: '142px',
        borderRadius: 'full',
        border: '9px solid #F4F7FA',
      },
      '.menu-section': {
        '.digi-proofs': {
          w: '260px',
          h: '50px',
          mr: '10px',
          ...roundedWhiteSection,
          p: {
            mr: '17px',
            fontWeight: 500,
            fontSize: '15px'
          },
          '.digi-icon': {
            border: '3px solid white',
            position: 'relative',
            borderRadius: 'full',
            ml: '-10px',
            boxSize: '28px'
          },
        },
        '.profile-menu': {
          boxSize: '50px',
          ...roundedWhiteSection,
        },
      },
    },
  },
};
