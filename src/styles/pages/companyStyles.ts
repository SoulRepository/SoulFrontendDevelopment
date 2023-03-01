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
    flexDirection: 'column',
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
            fontSize: '15px',
          },
          '.digi-icon': {
            border: '3px solid white',
            position: 'relative',
            borderRadius: 'full',
            ml: '-10px',
            boxSize: '28px',
          },
        },
        '.profile-menu': {
          boxSize: '50px',
          ...roundedWhiteSection,
        },
      },
    },
    '.content-section': {
      // w: '100%',
      justifyContent: 'space-between',
      '.side-bar': {
        flexDirection: 'column',
        '.address-section': {
          flexDirection: 'column',
          '.copy-icon': {
            cursor: 'pointer',
            ml: '10px',
          },
          '.tag': {
            h: '36px',
            px: '30px',
            py: '12px',
            bgColor: '#041226',
            color: 'white',
            borderRadius: 'full',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #f4f7fa',
            mr: '-20px',
          },
          '.address': {
            px: '22px',
            py: '14px',
            ...roundedWhiteSection,
          },
        },
      },
    },
  },
};
